
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Contacts from './components/Contacts';
import CreateContact from './components/CreateContact';
import UpdateContact from './components/UpdateContact';

function App() {

  return (
    <div>
         <BrowserRouter>
            <Routes>
              <Route path="/" element={<Contacts />}></Route>
              <Route path="/create" element={<CreateContact />}></Route>
              <Route path="/update/:id" element={<UpdateContact />}></Route>
            </Routes>
         </BrowserRouter>
    </div>
  );
}

export default App;
