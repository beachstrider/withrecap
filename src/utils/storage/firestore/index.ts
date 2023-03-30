import { getFirestore } from 'firebase/firestore';

import { firebase } from '../../auth/firebase';

export const firestore = getFirestore(firebase);
