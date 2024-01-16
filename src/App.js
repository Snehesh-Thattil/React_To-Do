import './App.css';
import { useState } from 'react';

function App() {
  const [toDosAll, setToDosAll] = useState([])
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
          setToDosAll([...toDosAll, { id: Date.now(), task: toDo, status: false }])
          setToDo('') //emptying what currently typed
        }} className="fas fa-plus"></i>
      </div>

      {/* Displaying space*/}
      <div className="todos">

        {toDosAll.map((objAll) => {
          return (
            <div className="todo">

              <div className="left">
                <input type="checkbox" onChange={(e) => {
                  // console.log(e.target.checked) // console.log(objAll)

                  setToDosAll(toDosAll.filter(objFilt => {
                    if (objFilt.id === objAll.id) {
                      objFilt.status = e.target.checked
                    }
                    return objFilt
                  }))

                }} value={objAll.status} />

                <p>{objAll.task}</p>
              </div>

              <div className="right">
                <i className="fas fa-times"></i>
              </div>

            </div>
          )
        })}

        {/* Finsished Displaying space */}
        <div className='finished'>
          <h3>FINISHED ITEMS</h3>

          {toDosAll.map((objAll) => {
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
