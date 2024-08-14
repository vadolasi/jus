import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  BrowserRouter,
  useRoutes,
} from 'react-router-dom'

import routes from '~react-pages'


function App() {
  return (
    <Suspense fallback={<p>Carregando...</p>}>
      {useRoutes(routes)}
    </Suspense>
  )
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
