import ReactDOM from 'react-dom/client';
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  
} from 'react-router-dom';
import './index.css'
import Login from './pages/login/Login.jsx';
import Form from './pages/Form/Form';
import Register from './pages/Register/Register';

const router = createBrowserRouter(createRoutesFromElements(
    <Route index element={<Form />}/>
))

// eslint-disable-next-line react-refresh/only-export-components
function App() {
  return (
    <RouterProvider router={router} />
  )
}

ReactDOM
.createRoot(document.getElementById('root'))
.render(<App />)
