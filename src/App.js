
import './App.css';
import Explore from './Components/Explore/Explore';
import Home from './Components/Home/Home'
import Layout from './Components/Layout/Layout'
import Messages from './Components/Messages/Messages';
import Profile from './Components/Profile/Profile';
import {   RouterProvider,  createBrowserRouter } from "react-router-dom";
import SignUp from './Components/SignUp/SignUp';
import SignIn from './Components/SignIn/SignIn';
// import Modal from '../src/Components/Modal/Modal.jsx'
function App() {
  
  const router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
    
      children: [
        { index: true, element: <Home /> },
        { path:"Profile" , element: <Profile /> },
        { path:"Messages" , element: <Messages /> },
        {path:"Explore" , element: <Explore />},
        { path: "*", element: <h3>'page not found'</h3> },
      ],
    },
  ])

  return (
    <div  className="App" style={{display:"flex"}} >
      {/* <SignIn/> */}
     <RouterProvider router={router} />
    </div>
    
  );
}

export default App;

