import './App.css';
import Header from './Header.js';
import Nav from './Nav.js';
import Main from './Main.js';
import Footer from './Footer.js';

function App() {
  return (
    <>
      <head>
        <meta name="description" content="Little Lemon restaurant with wide variety of dishes and affordable prices"/>
        <meta name="og:title" content="Little Lemon restaurant"/>
        <meta name="og:description" content="Little Lemon restaurant with wide variety of dishes and affordable prices"/>
        <meta name="og:image" content=""/>
      </head>
      <body>
        <Header/>
        <Nav/>
        <Main/>
        <Footer/>
      </body>
    </>
  )
}

export default App;
