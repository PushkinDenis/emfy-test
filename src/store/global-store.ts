import { create } from 'zustand';
import { ILead } from '@api';

export interface IGlobalStore {
  leads?: ILead[];
  setLeads: (leads?: ILead[]) => void;
}

export const useGlobalStore = create<IGlobalStore>((set) => ({
  leads: undefined,
  setLeads: (leads) => set(() => ({ leads })),
}));
