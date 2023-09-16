import React from "react";

import './GoalList.css';

import GoalItem from "../GoalItem/GoalItem";

const GoalList=({goalList})=>{
  

    return (
        <div className="container">

            {goalList.map(item=>
                <GoalItem goalItem={item}></GoalItem>
            )}
        </div>
    );
}

export default GoalList;