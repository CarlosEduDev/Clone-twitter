// import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css';

import { RouterProvider } from 'react-router-dom';
import { router } from './routes';

// forEach / map

// forEach => não tem retorno

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>

      <RouterProvider router={router}/>
        
  // {/* </React.StrictMode> */}
)


// Componentes: pequenas partes de interface reutilizáveis