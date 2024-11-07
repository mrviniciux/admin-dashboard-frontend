import { Box, Typography } from '@mui/material';
import LanguageSelector from '../LanguageSelector';
import Link from 'next/link';

function FooterMenu() {
  return (
    <Box>
      <LanguageSelector labeled />

      <Typography variant="caption" paddingLeft={2}>
        Developed by:{' '}
        <Link href={'https://github.com/mrviniciux'}>@mrviniciux</Link> - 2024
      </Typography>
    </Box>
  );
}

export default FooterMenu;
