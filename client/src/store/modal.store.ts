import { create } from "zustand";

export interface IModalStore {
  openApikey: boolean;
  setOpenApikey: (value: boolean) => void;

  openDelete: boolean;
  setOpenDelete: (value: boolean) => void;

  openSelectAccount: boolean;
  setOpenSelectAccount: (value: boolean) => void;
}

export const useModalStore = create<IModalStore>()((set) => ({
  openApikey: false,
  setOpenApikey: (value) => set(() => ({ openApikey: value })),
  openDelete: false,
  setOpenDelete: (value) => set(() => ({ openDelete: value })),
  openSelectAccount: false,
  setOpenSelectAccount: (value) => set(() => ({ openSelectAccount: value })),
}));
