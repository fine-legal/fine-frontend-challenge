import React, { FC, forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import { Box, Divider, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, TextField, Button } from "@mui/material";
import MuiDrawer from '@mui/material/Drawer';
import { styled, Theme, CSSObject } from '@mui/material';
import storageHelper from '@/helpers/storageHelper';
import Image from 'next/image';
import MailIcon from '@mui/icons-material/Mail';
import styles from "../styles/home.module.css";
import { useRouter } from 'next/router';
import { usePostStore } from '@/stores/postStore';
import { toast } from 'react-toastify';
import RssFeedIcon from '@mui/icons-material/RssFeed';

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        marginTop: theme.spacing(8),
        variants: [
            {
                props: ({ open }) => open,
                style: {
                    ...openedMixin(theme),
                    '& .MuiDrawer-paper': openedMixin(theme),
                },
            },
            {
                props: ({ open }) => !open,
                style: {
                    ...closedMixin(theme),
                    '& .MuiDrawer-paper': closedMixin(theme),
                },
            },
        ],
    }),
);


interface LeftDrawerProps {
}


const LeftDrawer = forwardRef(({ }: LeftDrawerProps, ref) => {
    const [open, setOpen] = React.useState(false);
    const router = useRouter();
    const postStore = usePostStore();
    const [email, setEmail] = useState<string>('');


    useEffect(() => {
        const openMenu = storageHelper.getMenuOpen();
        setOpen(openMenu === 'open');
    }, []);


    useImperativeHandle(ref, () => ({
        toggleLeftDrawer() {
            setOpen(!open);
        }
    }));

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Drawer variant="permanent" open={open}>
            <Box mt={8}>
                <Box sx={{ mb: 2, display: 'flex', justifyContent: 'center' }}>
                    <React.Fragment>
                        <Image
                            className={styles.logo}
                            src="/logo-fine.svg"
                            alt="Fine Logo"
                            width={180}
                            height={open ? 37 : 20}
                            priority
                        />
                    </React.Fragment>
                </Box>
                <Divider />
                <Stack direction={'column'} justifyContent={'space-between'} >
                    <Box flexGrow={1}>
                        <List>
                            <ListItem disablePadding sx={{ display: 'block' }}>
                                <ListItemButton
                                    onClick={() => {
                                        router.push('/');
                                    }}
                                    sx={[
                                        {
                                            minHeight: 48,
                                            px: 2.5,
                                        },
                                        open
                                            ? {
                                                justifyContent: 'initial',
                                            }
                                            : {
                                                justifyContent: 'center',
                                            },
                                    ]}
                                >
                                    <ListItemIcon
                                        sx={[
                                            {
                                                minWidth: 0,
                                                justifyContent: 'center',
                                            },
                                            open
                                                ? {
                                                    mr: 3,
                                                }
                                                : {
                                                    mr: 'auto',
                                                },
                                        ]}
                                    >
                                        <MailIcon />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={'Posts'}
                                        sx={[
                                            open
                                                ? {
                                                    opacity: 1,
                                                }
                                                : {
                                                    opacity: 0,
                                                },
                                        ]}
                                    />
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </Box>
                    <Divider />
                    <Box
                        p={2}
                        sx={{ position: 'absolute', bottom: 0, width: '-webkit-fill-available' }}>
                        {
                            open ?
                                <Stack
                                    direction={"column"}
                                    spacing={2}>
                                    <TextField
                                        label="Subscribe to Newsletter"
                                        variant="outlined"
                                        fullWidth
                                        size="small"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        fullWidth
                                        sx={{ mt: 1 }}
                                        onClick={() => {
                                            if (postStore) {
                                                postStore.service.subscribe(email)
                                                    .then((response) => {
                                                        toast.success(response)
                                                        setEmail('')
                                                    }).catch((error) => {
                                                        toast.error(error)
                                                    });
                                            }
                                        }}
                                    >
                                        Subscribe
                                    </Button>
                                </Stack> :
                                <IconButton onClick={handleDrawerOpen}>
                                    <RssFeedIcon />
                                </IconButton>
                        }
                    </Box>
                </Stack>
            </Box>
        </Drawer>
    );
});

LeftDrawer.displayName = 'LeftDrawer';
export default LeftDrawer;