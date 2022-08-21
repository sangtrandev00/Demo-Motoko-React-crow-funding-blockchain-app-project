import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import DetailFundPage from './Pages/DetailFundPage/index';
import DisbursementPage from './Pages/DisbursementPage/index';
import HistoryDonatePage from './Pages/HistoryDonatePage';

ReactDOM.render(
  // <React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <h1>Helllo world</h1>

//     <BrowserRouter>
//       <App />
//       {/* <h1>Hello world</h1> */}
//     </BrowserRouter>
//   </React.StrictMode>
// );
