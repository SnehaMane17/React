import logo from './logo.svg';
import './App.css';
import photo from "./DSC01014.JPG";

function Header(props){
 
  return(
    <header>
      <h1>{props.name}</h1>
    </header>
    
  );
}
function Main(props){
  return(
    <main>
      <h2>She is a React developer</h2>
      <ul>
        {props.foods.map((food,i) => <li key={i}>{food}</li>)}

      </ul>
      
    </main>
    
  );
}
function Footer(){
  return(
    <footer>
      <h3>She works at birlasoft</h3>
      <img src={photo} height={200}></img>
    </footer>
    
  );
}
const foods = [
  "Onbase",
  ".net",
  "C#"
];

function App() {
  return (
    <div className="App">
      <Header name="Sneha" />
      <Main foods={foods}/>
      <Footer/>
      <h3>Test</h3>
   
    </div>
  );
}

export default App;
