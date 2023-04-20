import { Button, TextField} from "@mui/material"
import "./style.css";
import { useState } from "react";

function App() {
  const [textTarefa, setTextTarefa] = useState("");
  function clicarbotao(){
    console.log(textTarefa)
  }
  return (
    <form className="form-container">
     <TextField value={textTarefa} id="standard-basic"  label="Tarefa" variant="filled" placeholder="Digite sua tarefa" onChange={({target}) => setTextTarefa(target.value)} ></TextField>
     <Button onClick={clicarbotao} variant="contained">Add</Button>
    </form>
    
  )
}
export default App
