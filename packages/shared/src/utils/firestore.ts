import { firestore } from 'firebase-admin'

export const deleteCollection = async (db: firestore.Firestore, collectionPath: string, batchSize: number = 500) => {
  const collectionRef = db.collection(collectionPath)
  const query = collectionRef.orderBy('__name__').limit(batchSize)

  return new Promise((resolve, reject) => deleteQueryBatch(db, query, resolve).catch(reject))
}

export const deleteQueryBatch = async (
  db: firestore.Firestore,
  query: firestore.Query<firestore.DocumentData>,
  resolve: (value: void | PromiseLike<void>) => void
) => {
  const snapshot = await query.get()

  const batchSize = snapshot.size
  if (batchSize === 0) {
    // When there are no documents left, we are done
    resolve()
    return
  }

  // Delete documents in a batch
  const batch = db.batch()
  snapshot.docs.forEach((doc) => {
    batch.delete(doc.ref)
  })
  await batch.commit()

  // Recurse on the next process tick, to avoid
  // exploding the stack.
  process.nextTick(() => {
    deleteQueryBatch(db, query, resolve)
  })
}
