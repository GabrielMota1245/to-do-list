import { Button, TextField } from "@mui/material"
import "./style.css";
import { useState } from "react";

function App() {
  const [textTarefa, setTextTarefa] = useState("");
  const [listTarefa, setlistTarefa] = useState([]);


  function clicarbotao() {
    setlistTarefa((old) => [...old, textTarefa])
    setTextTarefa("");
  }
  function deletarbotao() {
  setlistTarefa([])
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
              <>
                <div key={String(index)}>
                  {tarefa}
                </div>
                <div className="divider"/>
              </>
            ))
          }
        </div>
      </div>
    </>
  )
}
export default App
