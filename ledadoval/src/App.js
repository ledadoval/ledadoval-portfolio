import logo from './logo.svg';
import './App.css';
import HeaderP from './components/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footerp from './components/footer';

function MyApp() {
  return (
   <button>i1m a button</button>
  );
}

export default function App(){
  return(
    <div>
    <HeaderP/>

    <h1>My app</h1>
    <MyApp/>
    <Footerp/>
    </div>
  );
}
