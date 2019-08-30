import React, { useContext } from 'react';
import { useCustomProps } from './AppContainer'
import { ThemeContext, LanguageContext } from 'context'
import { Select } from 'atoms'
import './App.css';

const App = (props) => {
  const theme = useContext(ThemeContext)
  const language = useContext(LanguageContext)
  return (
    <div>
      <div className={theme['value']}>
        {theme['value']}
        <Select {...theme} />
      </div>
      <div>
        {language['value']}
        <Select {...language} />
      </div>
    </div>
  );
}

export default App;
