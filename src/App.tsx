import React, {useState, useEffect} from 'react';
import './App.css';
import Logo from './components/Logo';
import ClaimBox from './components/ClaimBox';
import Footer from './components/Footer';
import {ThemeProvider} from '@mui/material';
import {theme} from './theme/theme';
import { CssBaseline } from '@mui/material';
import { useTranslation } from 'react-i18next';
import {Language} from './constants/languages';
import LanguageButton from './components/LanguageButton';


const App: React.FC = () => {

  const { i18n } = useTranslation();

  const [lang, setLang] = useState<Language>(Language.polish)

  useEffect(() => {
    i18n.changeLanguage(Language.english);
  }, [])

  const changeLanguage: React.MouseEventHandler<HTMLButtonElement> = () => {
    lang === Language.english ? setLang(Language.polish) : setLang(Language.english)
    i18n.changeLanguage(lang);
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <Logo />
        <LanguageButton lang={lang} changeLanguage={changeLanguage} />
        <ClaimBox />
        <Footer />
    </ThemeProvider>
  );
}

export default App;
