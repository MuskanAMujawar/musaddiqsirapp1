import logo from './logo.svg';
import './App.css';
import Form from './Form';
import { Asyncawait } from './Component/Asyncawait';
import { Too } from './Component/Too';
import { Todo } from './Todo';
import { ToDoList1 } from './Component/ToDoList1';
import { ToDoList2 } from './Component/ToDoList2';
import { Home } from './Component/Page/Home';
import { Navbar } from './Component/Nav/Navbar';
import {RouteData} from './Component/RouteData';
import { Componentlevel1 } from './Component/Componentlevel1';



function App() {
  // const fname='zahura'
  // const flast='pathan'
  // const fadd='parbhani'
  // const fcontact='1234'
  // const sname='saba'
  // const slast='khan'
  // const sadd='Uttarpradesh'
  // const scontact='5678'
  // const lname='lubana'
  // const llast='fatima'
  // const ladd='Hyderabad'
  // const lcontact='0123'
  // const mname='shifa'
  // const mlast='naaz'
  // const madd='Basmat'
  // const mcontact='0987'

  // const car1name='mercedes'
  // const car2name='swift'
  // const car1model='suzuki'
  // const car2model='indica'
  // const car1color='grey'
  // const car2color='white'
  // const car1type='4 seater'
  // const car2type='6 seater'

  return (
    <div className="App">
            {/* <Greet name1={fname} name2={flast} name3={fadd} name4={fcontact}/>
      <Greet name1={sname} name2={slast} name3={sadd} name4={scontact}/>
      <Greet name1={lname} name2={llast} name3={ladd} name4={lcontact}/>
      <Greet name1={mname} name2={mlast} name3={madd} name4={mcontact}/> */}
      {/* <Greet car1={car1name}  car2={car1model} car3={car1color} car4={car1type}/> */}
      {/* <Greet car1={car2name} car2={car2model} car3={car2color} car4={car2type} /> */}
     
      {/* <Asyncawait/> */}
      {/* <Too/> */}
      {/* <Todo/> */}
      {/* <ToDoList1/> */}
      {/* <ToDoList2/> */}
      {/* <Navbar/> */}
      {/* <Home/> */}
      <RouteData/>
      
      {/* <Componentlevel1/> */}

        </div>
  );
}

export default App;
