import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Header from './header';
import Home from './Home';
import './App.css';
import Footer from './footer';
import Cera from './1ceramic';
import Login from './log-in';
import Form from './form';


function App() {
  return (
    <div className="App">
      <BrowserRouter><Header/>
      <Routes>
        <Route path='log-in' element={<Login/>}/>
      
        <Route path='/' element={<Home/>}/>

        <Route path='cera' element={<Cera/>}/>
        <Route path='form' element={<Form/>}/>
      
      
      
      </Routes>
      <Footer/>
      </BrowserRouter>
      {/*<img src='./Mahindra.jpg.jpg' height={1000} width={1800}/>*/}
      {/*<video src='./vedio.mp4' autoPlay loop muted width="100%" height="300%"/> */}
    
    
    </div>
  );
}

export default App;
