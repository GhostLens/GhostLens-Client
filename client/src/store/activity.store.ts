import { create } from "zustand";
import type { TActivityItemType } from "../types/main.types";

export interface IActivityStore {
  activities: TActivityItemType[];

  setActivities: (list: IActivityStore["activities"]) => void;
}

export const useActiviyStore = create<IActivityStore>()((set) => ({
  activities: [],

  setActivities: (activities) => set(() => ({ activities })),
}));
