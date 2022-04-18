import './App.css';
import { Routes ,Route} from 'react-router-dom';
// import Navbar from './component/Navbar';
import Signin from './component/Signin';
import Register from './component/Register';
import Forgot from './component/Forgot';
import Verify from './component/Verify';
import Reset from './component/Reset';
import Changepassord from './component/Changepassword';
import Profile1 from './component/Profile1';
import Postlist from './component/Postlist';
import Createpost from './component/Createpost';
function App() {
  return (
    <>
     <Routes>
         <Route exact path='/' element={<Signin />} /> 
         <Route path='/register' element={<Register/>} />
         <Route path='/forgotpassword' element={<Forgot/>} />
         <Route path='/verify' element={<Verify/>} />
         <Route path='/resetpassword' element={<Reset/>} />
         <Route path='/changepassword' element={<Changepassord/>} />
         <Route path='/profile' element={<Profile1/>} />
         <Route path='/postlist' element={<Postlist/>} />
         <Route path='/createpost' element={<Createpost/>} />
     </Routes>
   </>
  );
}

export default App;
