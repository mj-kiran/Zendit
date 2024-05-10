import { ThemeProvider } from '@mui/material'
import './App.css'
import { Theme } from './utils';
import { RouterProvider } from 'react-router-dom';
import router from './routes';
import { TemplateScope } from './pages';

function App() {

  return (
    <>
      <TemplateScope>
        <ThemeProvider theme={Theme}>
          <RouterProvider router={router}/>
        </ThemeProvider>
      </TemplateScope>
    </>
  );
}

export default App
