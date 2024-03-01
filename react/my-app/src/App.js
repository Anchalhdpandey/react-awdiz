import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () =>{
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/login"  element={<Login />}></Route>
        </Routes>
      </Router>
    </div>
  )
}
export default App;