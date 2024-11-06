import {create} from "zustand";

interface LoadingStore {
    loading: boolean
    message: string
    start: (message?: string) => void
    stop: () => void
}

export const useLoadingStore = create<LoadingStore>()((set, get) => ({
    loading: false,
    message: '',
    start: (message?: string) => {
        set({message: message || '', loading: true});
    },
    stop: () => {
        set({loading: false});
    }
}))
