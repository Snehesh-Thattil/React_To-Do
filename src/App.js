import './App.css';
import { useState } from 'react';

function App() {
  const [toDos, setToDos] = useState([])
  const [toDo, setToDo] = useState('')
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>To Do List</h1>
      </div>

      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>

      {/* Entering space */}
      <div className="input">
        <input value={toDo} onChange={(e) => setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={() => {
          setToDos([...toDos, { id: Date.now(), task: toDo, status: false }])
          setToDo('') //emptying what currently typed
        }} className="fas fa-plus"></i>
      </div>

      {/* Displaying space*/}
      <div className="todos">

        {toDos.map((objAll) => {
          return (
            <div className="todo">

              <div className="left">
                <input onChange={(e) => {
                  console.log(e.target.checked)
                  console.log(objAll)

                  setToDos(toDos.filter(objFilt => {
                    if (objFilt.id === objAll.id) {
                      objFilt.status = e.target.checked
                    }
                    return objFilt
                  }))

                }} value={objAll.status} type="checkbox" name="" id="" />
                <p>{objAll.task}</p>
              </div>

              <div className="right">
                <i className="fas fa-times"></i>
              </div>

            </div>
          )
        })}

        <div className='finished'>
          <h1>FINISHED ITEMS</h1>
          {/* Finsished Displaying space */}
          {toDos.map((objAll) => {
            if (objAll.status) {
              return (<p>{objAll.task}</p>)
            }
            return null
          })}
        </div>

      </div>
    </div>
  )
}

export default App;
