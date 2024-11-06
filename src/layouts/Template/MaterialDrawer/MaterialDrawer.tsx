//Most of that code was copy-pasted from https://mui.com/material-ui/react-drawer/
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import { useTheme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import React, { useState } from 'react';
import { useContent } from '../Template.context';
import { DrawerMenuItems, items } from './items';
import { useRouter } from 'next/router';

interface MaterialDrawerProps {
  drawerWidth: number;
}

function MaterialDrawer({ drawerWidth }: MaterialDrawerProps) {
  const router = useRouter();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { open, setOpen } = useContent();
  const theme = useTheme();
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleItemMenuClick = (destination: string, index: number) => {
    setSelectedIndex(index);
    router.push(destination);
  };

  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  }));

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'ltr' ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        {items.map((item: DrawerMenuItems, index: number) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton
              selected={selectedIndex === index}
              onClick={() => handleItemMenuClick(item.href, index)}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

export default MaterialDrawer;
