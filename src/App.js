import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Components/Routes/Routes';
import { Children } from 'react';

function App({ children }) {
  return (
    <div data-theme='light'>
      <RouterProvider router={router} >
        {Children}
      </RouterProvider>
    </div>
  )
}

export default App;