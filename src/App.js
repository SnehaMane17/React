import logo from './logo.svg';
import './App.css';

function SecretComponent(){
  return <h1>This super secret component for authorized users</h1>;
}
function RegularComponent(){
  return <h1>This regular component</h1>;
}
function App(props) {
  if(props.authorized){
    return <SecretComponent/>;
  }else{
    return <RegularComponent/>;
  }
}

export default App;
