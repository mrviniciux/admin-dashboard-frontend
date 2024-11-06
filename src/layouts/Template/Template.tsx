//Most of that code was copy-pasted from https://mui.com/material-ui/react-drawer/
import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import MaterialAppBar from './MaterialAppBar';
import MaterialDrawer from './MaterialDrawer';
import { ContentProvider } from './Template.context';
import MaterialMainContent from './MaterialMainContent';

const drawerWidth = 240;

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <ContentProvider>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <MaterialAppBar drawerWidth={drawerWidth} />
        <MaterialDrawer drawerWidth={drawerWidth} />
        <MaterialMainContent drawerWidth={drawerWidth}>
          {children}
        </MaterialMainContent>
      </Box>
    </ContentProvider>
  );
}
