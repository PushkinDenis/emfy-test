import { create } from 'zustand';

export interface IGlobalStore {
  leads?: unknown;
  setLeads: (leads?: unknown) => void;
}

export const useGlobalStore = create<IGlobalStore>((set) => ({
  leads: undefined,
  setLeads: (leads) => set(() => ({ leads })),
}));
