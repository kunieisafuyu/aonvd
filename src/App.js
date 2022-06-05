
import Form from './Components/Form';
import './App.css';
import SimpleBottomNavigation from './Components/MainNav';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Container } from '@mui/system';

import Image from './Components/Image';

function App() {
  return (
    <>
    <div className="App">
      <Form />
    </div>
      <Image/>
    <div className='navbarbot'>
      <SimpleBottomNavigation />
    </div>
    </>

  );
}

export default App;
