import logo from './logo.svg';
import './App.css';
import GoalList from './Components/GoalList/GoalList';
import GoalAdd from './Components/GoalAdd/GoalAdd.jsx';
import { useState } from 'react';

function App() {
    const [goalList,setGoalList]=useState([
        {
            id: "001", content: "finish all react concepts"
        },
        {
            id: "002", content: "finish all react exercises"
        },
        {
            id: "003", content: "finish all react hooks and components"
        }

    ]);

    const updateList=(newGoal)=>{
      setGoalList(preGoalList=>preGoalList.concat(newGoal));
    }

  return (
    <div className="App">
      <h1 class="app-title">Welcome to Goals application</h1>
      <GoalAdd onGoalAdd={updateList}></GoalAdd>
      <GoalList goalList={goalList}></GoalList>
    </div>
  );
}

export default App;
