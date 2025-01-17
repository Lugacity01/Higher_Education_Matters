import "./App.css";
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Program from "./pages/Program";
import Success from "./pages/Success";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
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
