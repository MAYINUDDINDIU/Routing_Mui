import './App.css';
import { Link, RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './Components/About';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Main from './Layout/Main';
import Products from './Components/Products';
import Dark from './Components/Dark';
import Dark1 from './Components/Dark1';
import ProductDetails from './Components/ProductDetails/ProductDetails';

function App() {

  const router = createBrowserRouter([

    {path:"/",
    element: <Main/>,
    children:[
      {path:"/",element: <Home/>},
      {path:"about",element: <About/>},
      {path:"contact",element: <Contact/>},
      {path:"products",
      loader:async()=>{
         return fetch('https://jsonplaceholder.typicode.com/users');
      },
      element: <Products/>
    },
    {path:"/product/:pid",
    loader:async({params})=>{
      return fetch(`https://jsonplaceholder.typicode.com/users/${params.pid}`);
   },
    element: <ProductDetails/>},
    ]
     },
     {path:"/dark",
     element: <Dark/>,
     children:[
      {path:"dark",element: <Dark/>},
       {path:"dark1",element: <Dark1/>},
     ]
      },
      {path:"*",element: <div>Router Not Found</div>},

  ]);
  return (
    <div className="App">
<RouterProvider router={router} />
    </div>
  );
}

export default App;
