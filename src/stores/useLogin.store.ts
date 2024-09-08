import { create } from 'zustand';

type State = {
  user: string;
  password: string;
};

type Action = {
  login: (user: State['user'], password: State['password']) => void;
};

export const useLoginStore = create<State & Action>((set) => ({
  user: '',
  password: '',
  login: (user, password) => {
    set(() => ({ user: user, password: password }));
    console.log(user, password);
  },
}));
