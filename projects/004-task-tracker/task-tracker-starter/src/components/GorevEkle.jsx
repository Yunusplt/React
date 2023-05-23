import { useState } from "react";
import moment from "moment"

const GorevEkle = ({postGorev,gorevler}) => {
let length = gorevler.length



const[text, setText] = useState("")
const[day, setDay] = useState("")
// const[bitti, setBitti] = useState("")


const addTask = (e)=>{
  e.preventDefault();
  postGorev({id:length+1, text:text, day:moment(day).format("MMM Do [at] h:mma"), bitti:true})
}
  
  return (
    <div>
      <header className="header">
        <h1>TASK TRACKER</h1>
        <button
          className="btn"
          
        >
           ADD TASK BAR
        </button>
      </header>
        <form onSubmit={addTask}>
          <div className="form-control">
            <label htmlFor="text">Task</label>
            <input
              id="text"
              type="text"
              name="text"
              placeholder="Add Task"
             onChange={(e)=>setText(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="day">Day & Time</label>
            <input
              id="day"
              type="date"
              name="day"
              placeholder="Add Task"
              onChange={(e)=>setDay(e.target.value)}
            
            />
          </div>
          <div>
            <button className="btn btn-submit" type="submit">
              SUBMİT
            </button>
          </div>
        </form>
      
    </div>
  );
};

export default GorevEkle;
