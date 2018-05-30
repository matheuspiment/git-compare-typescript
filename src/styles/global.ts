import 'font-awesome/css/font-awesome.css';
import { injectGlobal } from '../types/styled-components';

// tslint:disable-next-line:no-unused-expression
injectGlobal`
  * {
    box-sizing: border-box;
    margin: 0;
    outline: 0;
    padding: 0;
  }

  body {
    background: #9B65E5;
    font-family: sans-serif;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;

    button {
      cursor: pointer;
    }
  }
`;
