import './App.css';

import Clock from './components/Clock.js';

import Header from './components/Header';

import Content from './components/Content';

import Footer from './components/Footer';

function App() {



  
  return (
    
    <>
    <section className="todoapp">
      
      <Header/>
      
      <Content/>
      
      <Clock/>
    
    </section>

    <Footer/>

    </>
  );
}

export default App;
