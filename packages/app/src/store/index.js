import * as recoil from 'recoil'

export const Auth = recoil.atom({
  key: 'Auth',
  default: {}
})

export const { useRecoilValue: useStore, useRecoilState: useSetStore } = recoil
