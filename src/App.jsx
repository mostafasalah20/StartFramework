import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import { createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout/Layout.jsx'
import About from './components/About/About.jsx'
import Portfolio from './components/Portfolio/Portfolio.jsx'
import Contact from './components/Contact/Contact.jsx'
import Notfound from './components/Notfound/Notfound.jsx'
import { RouterProvider } from'react-router-dom'
import Home from './components/Home/Home.jsx'


let routers= createBrowserRouter([
  {path:'',element:<Layout/>,children:[
    {index:true,element:<Home/>},
    {path:'about',element:<About/>},
    {path:'portfolio',element:<Portfolio/>},
    {path:'contact',element:<Contact/>},
    {path:'*',element:<Notfound/>},

  ]}
])
function App() {

  return  <RouterProvider router={routers}></RouterProvider>
   

}

export default App
