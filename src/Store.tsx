import create from 'zustand';

interface UserState {
  user: object;
  setUser: (obj: object) => void;
}

const useUser = create<UserState>((set) => ({
  user: {},
  setUser: (obj: object) => set((state) => ({ user: (state.user = obj) })),
}));

export { useUser };
