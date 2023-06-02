
import './App.css';
import { Route,Switch,Link } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
function App() {
  return (
    <Router>
    <div>
      
      <Switch>
        <Route exact path = '/' component= {Page} />
        <Route  path = '/contact' component= {Contact} />
        <Route  path = '/about' component= {About} />

      </Switch>

    </div>
    </Router>
  );
}


const Navbar = () => {
  return (
      <div>
      <div className="nav">
      <nav className="navbar">
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><a href="#">Services</a></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
   
        <nav className="navbar navbar-right">
      <ul>
        <li><a href="#">Login</a></li>
        <li><a href="#">Signup</a></li>
      </ul>
    </nav>

    </nav>
   </div>
    <div className="container">
    <div className="left">
    <h1>Create Polls on risingpoll like never before.</h1>
    <p>Now get everyone's opinion faster than anyone only on the risingpoll</p>
  </div>
        <div className="center">
          <a href="https://example.com">
            <img src=".\public\logo512.png" alt="Image" />
          </a>
        
      </div>
      </div>
   
    </div>
  );
};

const Footer =() =>{
  return(
    <div>
    <div className="foot">
      <form>
        <label>Sign up for newsletter :  
          <input type= "text" />
         <button type="submit">subscribe</button>
        </label>
<p>Gather opinions and insights with Rising Poll -participating in engaging polls. Join us today to start polling!

</p>
      </form>

    <div className="foot">
    <nav className="tool">
        <ul>
            <li><a href="#">Privacy policy</a></li>
            <li><a href="#">Terms & condition</a></li>
            <li><a href="#">Disclaimer</a></li>
            <li><a href="#">Contact us</a></li>
        </ul>
   </nav>

    </div>
    </div>
    <div className="may">
    <p>@2023 Risingpoll.All rights reserved.</p>
    
    </div>
    </div>
  );
}
const Body = () =>{
return (
 <h1>This is about page</h1>
);


};
 
const Page =() =>{
  return (
  <div>
    <Navbar />
    <Footer />
   
  </div>
  );
};

export default App;
