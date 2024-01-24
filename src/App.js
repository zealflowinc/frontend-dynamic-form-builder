import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { Builder } from './pages/Builder';
import { Renderer } from './pages/Renderer';
import { Reader } from './pages/Reader';
import { MainLayout } from './layouts/MainLayout';


function App() {
    const router = createBrowserRouter([
        {
          path: "/",
          element: <MainLayout><Builder /></MainLayout>,
        },
        {
          path: "/renderer",
          element: <MainLayout><Renderer /></MainLayout>,
        },
        {
          path: "reader",
          element: <MainLayout><Reader /></MainLayout>,
        },
      ]);

    return (
        <RouterProvider router={router} />
    );
}

export default App;
