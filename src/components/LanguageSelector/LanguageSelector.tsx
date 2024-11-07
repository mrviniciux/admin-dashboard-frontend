'use client';

import React from 'react';
import {
  Select,
  MenuItem,
  FormControl,
  SelectChangeEvent,
  Container,
  Typography,
  Box,
} from '@mui/material';
import Flag from 'react-world-flags';
import { useRouter } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { SidebarFooterProps } from '@toolpad/core';

type LanguageSelectProps = {
  labeled?: boolean;
};

const LanguageSelector: React.FC<LanguageSelectProps> = ({ labeled }) => {
  const router = useRouter();
  const locale = useLocale();
  const translate = useTranslations();

  const handleChange = (event: SelectChangeEvent<string>) => {
    const selectedLocale = event.target.value as string;
    router.push(`/${selectedLocale}/dashboard`);
  };

  const languages = [
    {
      value: 'pt-BR',
      code: 'BR',
      alt: 'Português',
    },
    {
      value: 'en-US',
      code: 'US',
      alt: 'English',
    },
  ];

  const InputLanguage = () => (
    <FormControl variant="outlined" size="small">
      <Select
        value={locale} // Idioma atual
        onChange={handleChange}
        displayEmpty
        inputProps={{ 'aria-label': 'Select Language' }}
        style={{ width: 70 }}
      >
        {languages.map((lang, index) => (
          <MenuItem value={lang.value} key={lang.alt + index}>
            <Flag code={lang.code} alt={lang.alt} width={24} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );

  if (!labeled) return <InputLanguage />;

  return (
    <Box padding={2}>
      <Typography variant="caption">{translate('menu.languages')}</Typography>{' '}
      <br />
      <InputLanguage />
    </Box>
  );
};

export default LanguageSelector;
