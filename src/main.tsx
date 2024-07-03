import * as ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Profile from './pages/form/layouts/main/Profile'
import Plans from './pages/form/layouts/main/Plans'
import AddOns from './pages/form/layouts/main/AddOns'
import Summary from './pages/form/layouts/main/Summary'
import FormProvider from './hooks/formContext'
import Confirmation from './pages/form/layouts/main/Confirmation'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Profile />,
  },
  {
    path: '/profile',
    element: <Profile />,
  },
  {
    path: '/plans',
    element: <Plans />,
  },
  {
    path: '/add-ons',
    element: <AddOns />,
  },
  {
    path: '/summary',
    element: <Summary />,
  },
  {
    path: '/confirm',
    element: <Confirmation />,
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <FormProvider>
    <RouterProvider router={router} />
  </FormProvider>
)
