import Header from "../components/Header";
import Input from "../components/Input";
import React,{ useState } from "react";
import "./List.css";

function List() {
  const [assignment, setAssignment] = useState({task:'' , completed: false});
  const [tasks, setTasks] = useState([]);

  function handleCreate() {
    setTasks([...tasks,assignment]);
    setAssignment("");
  }

  function handleComplete(e) {
    const array = [...tasks];
    if(array[e.target.id].completed === false){
    array[e.target.id] = { task: e.target.innerText , completed:true };
    setTasks(array);
    return;
    }
    array[e.target.id] = { task: e.target.innerText , completed:false };
    setTasks(array);
  }

  function handleDelete() {
    setTasks(tasks.filter((el)=> el.completed === false))
  }
  console.log(tasks);
  return(
    <div>
      <Header />
      <h5>Clique duas vezes em um item para marcá-lo como completo</h5>
      <div>
        <Input 
          type="text" 
          id="tarefa"
          onChange={ ({target})=> setAssignment({task: target.value, completed:false})}
          value={assignment.task}
        />
        <button type="button" onClick={ handleCreate }>Criar</button>
        <button type="button" onClick={ handleDelete }>Deletar Tarefa</button>
      </div>
      <ol>
        { tasks.map((element,index)=> <li id={ index } style={ element.completed ? {textDecoration: "line-through"} : {}} onDoubleClick={ (e)=> handleComplete(e) }>{element.task}</li>)}
      </ol>
    </div>
  )
}

export default List;