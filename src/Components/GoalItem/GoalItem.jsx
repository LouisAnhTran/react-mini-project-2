import React from "react";

import './GoalItem.css';

const GoalItem=({goalItem})=>{
    return(
        <li className="goal-item-design" key={GoalItem.id}>{goalItem.content}</li>
    );
}

export default GoalItem;
