import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Model from './components/Model';



function App() {
  return (
    <div className="App">
      
      <Model name='bmw' price='100$' years='2024'/>
      <Model name='kia' price='40$' years='2023'/>
      <Model name='renault' price='30$' years='2022'/>
    
    </div>
  );
}

export default App;
