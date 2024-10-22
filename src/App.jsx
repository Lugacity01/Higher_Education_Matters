import "./App.css";
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/about";
import Program from "./pages/program";
import Success from "./pages/success";
import Resources from "./pages/resources";
import Contact from "./pages/contact";
import AppLayout from "./layouts/AppLayout";
import GetStarted from "./pages/GetStarted";



function App() {
  
  const routers = createBrowserRouter([
        {
          path: '/',
          element: <AppLayout/>,
          children: [
            {
              index: true,
              element: <Home/>,
            },
            {
              path: '/about-us',
              element: <About/>,
            },
            {
              path: '/program',
              element: <Program/>
            },
            {
              path: '/success-stories',
              element: <Success/>
            },
            {
              path: '/resources',
              element: <Resources/>
            },
            {
              path: '/contact',
              element: <Contact/>
            },
            {
              path: '/get-started',
              element: <GetStarted/>
            },

          ],
        },
        

  ]);



  return (
    <RouterProvider router={routers} />
  )
}

export default App
