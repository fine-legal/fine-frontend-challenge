const StorageHelper = () => {

    const isBrowser = typeof window !== 'undefined'

    const THEME = 'theme';
    const MENU_OPEN = 'menu_open';

    const getTheme = (): 'dark' | 'light' => {
        let savedTheme = 'light';
        if (isBrowser) {
            savedTheme = localStorage.getItem(THEME) ?? 'light';
        }
        return savedTheme as ('dark' | 'light');
    }

    const setTheme = (theme: string): void => {
        if (isBrowser) {
            localStorage.setItem(THEME, theme);
        }
    }

    const getMenuOpen = (): 'open' | 'closed' => {
        let savedMenuOpen = 'open';
        if (isBrowser) {
            savedMenuOpen = localStorage.getItem(MENU_OPEN) ?? 'open';
        }
        return savedMenuOpen as ('open' | 'closed');
    }

    const setMenuOpen = (menuOpen: string): void => {
        if (isBrowser) {
            localStorage.setItem(MENU_OPEN, menuOpen);
        }
    }

    return {
        getTheme: getTheme,
        setTheme: setTheme,        
        setMenuOpen: setMenuOpen,
        getMenuOpen: getMenuOpen,
    };
}
export default StorageHelper();
