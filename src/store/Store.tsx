import create from 'zustand';

import type { User } from './types'

interface UserState {
  user: User,
  setUser: (user: User) => void;
}

const useUser = create<UserState>((set) => ({
  user: {
    uid: '',
    email: '',
    emailVerified: false,
    isAnonymous: false,
    providerData: [],
    createdAt: '',
    lastLoginAt: '',
  },
  setUser: (user: User) => set((state) => ({ user: (state.user = user) })),
}));

export { useUser };
