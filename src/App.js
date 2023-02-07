import logo from './logo.svg';
import './App.css';
import Form from './Form';
import {Table} from "./Table"
import BasicButtons from './Buttontest';
import { MaterialForm } from './MaterialForm';
import { Reviseform } from './Reviseform';
import { Cardmaterial } from './Cardmaterial';
import { Cardrevise } from './Cardrevise';
import Classcomp from './Component/Classcomp';
import FY from './Component/FY';
import { Materialformcard } from './Component/Materialformcard';
import { Componentlevel3 } from './Component/Componentlevel';
import { Componentlevel1 } from './Component/Componentlevel1';
import { Schoolform } from './Component/Schoolform';
import { Componentlevel5 } from './Component/Componentlevel5';
import { Schoolformrevise } from './Component/Schoolformrevise';
import { Task } from './Component/Task';
import { Datamap } from './DataComponent/Datamap';



function App() {
  return (
    <div className="App">
      {/* <MaterialForm/> */}
         {/* <Reviseform/> */}
      {/* <Table/>
      <Form/>
      <BasicButtons/> */}
      {/* <Cardmaterial/> */}
      {/* <Cardrevise/> */}
      {/* <Classcomp/> */}
      {/* <FY/> */}
      {/* <Materialformcard/> */}
      {/* <Componentlevel1/> */}
      <Schoolform/>
      {/* <Componentlevel5/> */}
      {/* <Schoolformrevise/> */}
      {/* <Task/> */}
      {/* <Datamap/>/ */}
        </div>
  );
}

export default App;
