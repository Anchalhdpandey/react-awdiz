import EffectOne from "./components/Effectone";
import EffectTwo from "./components/Effecttwo";
import Counter from "./components/counter";
import Login from "./components/login";
import Register from "./components/register";
import ToDolist from  './components/todolist'
import Welcome from './components/welcome';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () =>{
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/counter" element={<Counter/>}/>
          </Routes>
          </Router>
          </div>
          );
};
export default App;