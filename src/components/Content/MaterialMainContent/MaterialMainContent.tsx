//Most of that code was copy-pasted from https://mui.com/material-ui/react-drawer/
import { styled } from '@mui/material/styles';
import { useContent } from '../Content.context';
import { ReactNode } from 'react';

function MaterialMainContent({
  drawerWidth,
  children,
}: {
  drawerWidth: number;
  children: ReactNode;
}) {
  const { open } = useContent();

  const Main = styled('main', {
    shouldForwardProp: (prop) => prop !== 'open',
  })<{
    open?: boolean;
  }>(({ theme }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    marginTop: '60px',
    variants: [
      {
        props: ({ open }) => open,
        style: {
          transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
          }),
          marginLeft: 0,
        },
      },
    ],
  }));

  return <Main open={open}>{children}</Main>;
}

export default MaterialMainContent;
