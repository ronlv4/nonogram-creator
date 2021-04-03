import React, {useState} from 'react';
import './App.css';
import produce from 'immer';


  const numOfRows = 30
  const numOfCols = 30

// export type AppState = {
// 	board: number
// }

const createEmptyGrid = ()=>{
  const rows=[]
      for(let i=0;i<numOfRows;i++){
        rows.push(Array.from(Array(numOfCols),()=>0))
      }
      return rows;
}

const createRandomizedGrid = ()=>{
  const rows=[]
      for(let i=0;i<numOfRows;i++){
        rows.push(Array.from(Array(numOfCols),()=> Math.random()>0.7? 1 : 0))
      }
      return rows;
}

// export class App extends React.PureComponent<{}, AppState> {
  const App: React.FC = () =>{
    const [grid,setgrid] = useState(()=>{return createEmptyGrid()})
    return(
      <div>
        <button
        onClick={()=>{setgrid(createRandomizedGrid())}}>
          Randomize Grid
        </button>
        <button
        onClick={()=>{setgrid(createEmptyGrid())}}>
          Clear Grid
        </button>
        {()=> <button>sadas</button>}
        <div style = {{
          display: 'grid',
          alignSelf: 'center',
          gridTemplateColumns: `repeat(${numOfCols}, 20px)`
        }}>
          {grid.map((rows, i) =>
            rows.map((col, k) => (
              <div
                key={`${i}-${k}`}
                // onMouseDownCapture = {(e)=>{
                //     const newGrid = produce(grid, gridCopy =>{
                //       gridCopy[i][k] = 1-grid[i][k];
                //     })
                //     setgrid(newGrid)
                // }}
                onMouseEnter={(e)=>{
                  if(e.buttons===1){
                    const newGrid = produce(grid, gridCopy =>{
                      gridCopy[i][k] = 1-grid[i][k];
                    })
                    setgrid(newGrid)
                  }
                }}
                onMouseDown={() => {
                  const newGrid = produce(grid, gridCopy =>{
                    gridCopy[i][k] = 1-grid[i][k];
                  })
                  setgrid(newGrid)
                }}
                style={{
                  width: 20,
                  height: 20,
                  backgroundColor: grid[i][k] ? "black" : undefined,
                  border: "solid 1px black"
                }}
              />
            ))
          )}
        </div>
      </div>
    )
}

export default App;
