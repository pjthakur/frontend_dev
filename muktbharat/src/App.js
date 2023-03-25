import './App.css';
import Nav from './comp/Nav';
import Footer from './comp/Footer';
import Divs from './comp/Divs';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Footer/>
      <Divs image='https://anemiamuktbharat.info/wp-content/uploads/2019/08/slide-1-new.jpg'/>
      <Divs image='https://anemiamuktbharat.info/wp-content/uploads/2019/08/slide-1-new.jpg'/>
    </div>
  );
}

export default App;
