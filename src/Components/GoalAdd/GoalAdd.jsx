import React from "react";

import './GoalAdd.css';
import { useState } from "react";

const GoalAdd=({onGoalAdd})=>{
    const [inputUser,setInputUser]=useState("");

    return (
        <div>
            <form action="submit" onSubmit={event=>{
                event.preventDefault();

                onGoalAdd({id: Math.random, content: inputUser});

                setInputUser("");

            }}>
                <input type="text" value={inputUser} onChange={e=>setInputUser(e.target.value)}/>
                <button type="submit" className="btn btn-primary">Click to submit</button>
            </form>
        </div>
    );
}

export default GoalAdd;