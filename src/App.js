import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './UIpart/Navbar';
import Home from './UIpart/Home';
import Student from './UIpart/Student';
import AddNewCompo from './UIpart/AddNewCompo';
import EditCompo from './UIpart/EditCompo';
import Contact from './UIpart/Contact';
import StuStore from './Store/Studenstore';
import { Provider } from 'react-redux';

function App() {
  return (
  <div className="App">
    <BrowserRouter>
    <Provider store={StuStore}>
    <Navbar />
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/contact' element={<Contact />} />
    <Route path='/student' element={<Student/>} />
    <Route path='/student-desc' element={<AddNewCompo/>} />
    <Route path='/student-desc/:ID' element={<EditCompo />} />
    
      
    </Routes>
    </Provider>
    </BrowserRouter>



</div>
  );
}

export default App;










