import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import Form from './components/Form';
import ShowAlert from './components/ShowAlert';
import {useState} from 'react'
function App() {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <div className="App">
    <ShowAlert showAlert={showAlert} setShowAlert={setShowAlert}/>
      <Header/>
      <HomePage/>
      <Form showAlert={showAlert} setShowAlert={setShowAlert}/>
      <Footer/>
    </div>
  );
}

export default App;
