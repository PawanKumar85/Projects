import Header from "./Components/Header";
import style from "./App.module.css";
import Board from "./Components/Board";
import Project from './Components/Project'


const App = () => {
 
  return (
    <div style={{margin:"80px"}}>
      <Header />
      <div className={style.board}>
        <Board />
      </div>
      <Project/>
    </div>
  );
};

export default App;
