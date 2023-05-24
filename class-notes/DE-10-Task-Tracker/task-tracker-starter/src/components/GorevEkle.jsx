import { useState } from "react";
import moment from "moment";

const GorevEkle = ({gorevler,setGorevler}) => {

const [text, setText] = useState("");
const [day, setDay] = useState("");

const[taskBar, setTaskBar] = useState(true)

// const handleTaskBar =()=> {
//   if (taskBar) {
//     setTaskBar(!taskBar)
//   }else{
//     setTaskBar(taskBar)
//   }
// }


let taskId = moment(day).format("MDYYYYHMM")
console.log(gorevler);

const addTask=(e)=>{
  e.preventDefault();
  setGorevler([
    ...gorevler,
    {
      id: taskId,
      text: text,
      day: moment(day).format("MMM Do [at] h:mma"),
      bitti: false,
    },
  ]);
  
  
}

  return (
    <div>
      <header className="header">
        <h1>TASK TRACKER</h1>
        <button className="btn" onClick={()=> setTaskBar(!taskBar)}>
          {taskBar ? "CLOSE THE ADD TASK BAR" : "OPEN THE ADD TASK BAR"}
        </button>
      </header>
      {taskBar && (
        <form onSubmit={addTask}>
          <div className="form-control">
            <label htmlFor="text">Task</label>
            <input
              id="text"
              type="text"
              name="text"
              placeholder="Add Task"
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="day">Day & Time</label>
            <input
              id="day"
              type="datetime-local"
              name="day"
              placeholder="Date"
              onChange={(e) => setDay(e.target.value)}
            />
          </div>
          <div>
            <button className="btn btn-submit" type="submit">
              SUBMİT
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default GorevEkle;
