
import './App.css';
import Explore from './Components/Explore/Explore';
import Home from './Components/Home/Home'
import Layout from './Components/Layout/Layout'
import Messages from './Components/Messages/Messages';
import Profile from './Components/Profile/Profile';
import {   RouterProvider,  createBrowserRouter } from "react-router-dom";
import SignUp from './Components/SignUp/SignUp';
import SignIn from './Components/SignIn/SignIn';
import Layout2 from './Components/Layout2/Layout2';
import ProtectedRouter from './Components/ProtectedRouter/ProtectedRouter';
// import Modal from '../src/Components/Modal/Modal.jsx'
function App() {
  
  const router = createBrowserRouter([
    {
      path:"",
      element:<Layout2/>,
      children:[
        {index:true,element:<SignIn/>},
        {path:"signUp",element:<SignUp />}
  
   ] },
    
    {
      path: "user",
      element: <Layout />,
    
      children: [
        { index: true, element:<ProtectedRouter><Home/> </ProtectedRouter> },
        { path:"Profile" , element: <ProtectedRouter><Profile /></ProtectedRouter> },
        { path:"Messages" , element:<ProtectedRouter><Messages /></ProtectedRouter>  },
        {path:"Explore" , element:<ProtectedRouter><Explore /></ProtectedRouter> },
        { path: "*", element: <h3>'page not found'</h3> },
      ],
    },
  ])

  const router2=createBrowserRouter([
  {path:"",
    element:<Layout2/>,
    children:[
      {index:true,element:<SignIn/>},
      {path:"signUp",element:<SignUp />},


    ]



}

  ])


  return (
    <div  className="App" style={{display:"flex"}}  >
      {/* <SignIn/> */}
     <RouterProvider router={router} />
     
    </div>
    
  );
}

export default App;

