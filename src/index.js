import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { FormProvider1, FormProvider2, FormProvider3 } from './context/Context';

ReactDOM.render(
  <React.StrictMode>
    <FormProvider1>
      <FormProvider2>
        <FormProvider3>
          <App />
        </FormProvider3>
      </FormProvider2>
    </FormProvider1>
  </React.StrictMode>,
  document.getElementById('root')
);