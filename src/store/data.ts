import { create } from "zustand";

interface UserState {
    id: string
    setId: (id: string) => void
}

export const useUserStore = create<UserState>((set) => ({
    id: "",
    setId: (id) => set({ id })
}))