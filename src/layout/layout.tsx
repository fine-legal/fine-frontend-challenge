import { Box } from '@mui/material'
import Header from '../components/Header'
import storageHelper from '../helpers/storageHelper'
import { useEffect, useRef, useState } from 'react'
import LeftDrawer from '../components/LeftDrawer'
import { usePostStore } from '../stores/postStore'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const leftDrawerRef = useRef();
  const [leftOpen, setLeftOpen] = useState<boolean>(false);

  const postStore = usePostStore();

  useEffect(() => {
    const openMenu = storageHelper.getMenuOpen();
    setLeftOpen(openMenu === 'open');
  }, []);


  useEffect(() => {
    postStore && postStore.fetch(true);
  }, []);

  return (
    <Box sx={{ display: 'flex' }} id="app-body">
      <Header
        toggleLeftDrawer={() => {
          const newValue = !leftOpen
          setLeftOpen(newValue);
          storageHelper.setMenuOpen(newValue ? 'open' : 'closed');
          (leftDrawerRef.current as any).toggleLeftDrawer();
        }}
      />
      <LeftDrawer ref={leftDrawerRef} />
      <Box component="main" sx={{ flexGrow: 1, pt: 6, px: 4, width: 1 }}>
        {children}
      </Box>
      <ToastContainer />
    </Box>
  )
}
