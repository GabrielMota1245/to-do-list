import { Button, TextField } from "@mui/material"
import "./style.css";
import { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import Checkbox from '@mui/material/Checkbox';
import { Task, TaskAlt } from "@mui/icons-material";

function App() {
  const [textTarefa, setTextTarefa] = useState("");
  const [listTarefa, setlistTarefa] = useState([]);

  function clicarbotao() 
  {
    if(!textTarefa){
      alert('Nome obrigatório')
    }else{
      setlistTarefa((old) => [...old, {id:Date.now(), title:textTarefa}])
      setTextTarefa("");
    }
  }
  function deletarbotao() {
    setlistTarefa([])
  }

  function deletarTask(idTask){

    setlistTarefa(listTarefa.filter((el) => el.id !== idTask))
  }

  function handleFinishedTask(idTask){
    setlistTarefa(listTarefa.map((Task) => Task.id === idTask ?  {...Task, indFinished: Task.indFinished} : Task ) )
  }

  return (
    <>
      <form className="form-container">
        <TextField value={textTarefa} id="standard-basic" label="Tarefa" variant="filled" placeholder="Digite sua tarefa" onChange={({ target }) => setTextTarefa(target.value)} ></TextField>
        <Button variant="contained" onClick={clicarbotao}>Add</Button>
        <Button variant="contained" color="secondary" onClick={deletarbotao}>Deletar</Button>
        {console.log(listTarefa)}
      </form>
      <div className="tabela">
        <div className="cega">
          {
            listTarefa.map((tarefa, index) => (
              <div key={tarefa.id}>
                <div className="task-single">

                <div key={String(index)} className="task">
                  <Checkbox onClick={() => handleFinishedTask(tarefa.id)}/>

                  <span style={{color: tarefa.indFinished ? 'red' : ''}}>{tarefa.title}</span>
                  </div>
                   <DeleteIcon onClick={()=> deletarTask(tarefa.id)} className="icon-delete"/> 
                   
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}
export default App
