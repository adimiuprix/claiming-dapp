import React, {useState, useEffect} from 'react';
import './App.css';
import Logo from './components/Logo';
import ClaimBox from './components/ClaimBox';
import Footer from './components/Footer';
import {ThemeProvider} from '@mui/material';
import {theme} from './theme/theme';
import { useTranslation } from 'react-i18next';
import LanguageButton from './components/LanguageButton';


const App: React.FC = () => {

  const { i18n } = useTranslation();

  const [lang, setLang] = useState<string>('pl')

  useEffect(() => {
    i18n.changeLanguage('en');
  }, [])

  const changeLanguage: React.MouseEventHandler<HTMLButtonElement> = () => {
    lang === 'en' ? setLang('pl') : setLang('en')
    i18n.changeLanguage(lang);
  }

  return (
    <ThemeProvider theme={theme}>
      <Logo />
      <LanguageButton lang={lang} changeLanguage={changeLanguage} />
      <ClaimBox />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
