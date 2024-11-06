import React, { FC } from 'react';
import {
    AppBar,
    Box,
    IconButton,
    Stack,
    Toolbar,
    Typography,
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import _ from "lodash";
import { useThemeStore } from '@/stores/themeStore';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

interface HeaderProps {
    toggleLeftDrawer: (type: string) => void
}

const Header: FC<HeaderProps> = ({ toggleLeftDrawer }: HeaderProps) => {
    const themeStore = useThemeStore();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} color={'primary'}>
                <Toolbar variant="dense">
                    <IconButton
                        onClick={() => {
                            toggleLeftDrawer('menu')
                        }}
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Box sx={{ flexGrow: 1, px: 5 }}>
                        <Stack direction={"row"} justifyContent={"space-between"}>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1, my: 'auto' }}>
                                Fine Volders Frontend Assessment
                            </Typography>
                            <IconButton color="inherit" //title='theme'
                                onClick={() => themeStore && themeStore.toggleDarkMode()}>
                                {themeStore && themeStore.theme === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                            </IconButton>
                        </Stack>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
};

export default Header;
