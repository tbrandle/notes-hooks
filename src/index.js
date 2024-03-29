import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './enviornments';
import * as serviceWorker from './serviceWorker';
import { ThemeProvider, LanguageProvider } from 'context';

const Root = () => (
  <ThemeProvider>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </ThemeProvider>
) 

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
