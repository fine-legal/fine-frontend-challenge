import { create } from 'zustand'
import { createTheme } from '@mui/material';
import storageHelper from '@/helpers/storageHelper';

interface ThemeStore {
    theme: 'dark' | 'light',
    materialTheme: any
    toggleDarkMode: () => void
}

const createMaterialTheme = (theme: 'dark' | 'light') => {
    return createTheme({
        palette: {
            mode: theme,
        },
    });
}

export const useThemeStore = create<ThemeStore>()((set, get) => ({
    theme: storageHelper.getTheme(),
    materialTheme: createMaterialTheme(storageHelper.getTheme()),
    toggleDarkMode: () => {
        let newTheme: 'dark' | 'light' = get().theme === 'dark' ? 'light' : 'dark';
        storageHelper.setTheme(newTheme);
        set({ theme: newTheme, materialTheme: createMaterialTheme(newTheme) })
    },
}))
