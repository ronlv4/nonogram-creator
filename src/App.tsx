import React, {useState} from 'react';
import './App.css';
import produce from 'immer';


  const numOfRows = 50
  const numOfCols = 50

// export type AppState = {
// 	board: number
// }



// export class App extends React.PureComponent<{}, AppState> {
  const App: React.FC = () =>{
    const [grid,setgrid] = useState(()=>{
      const rows=[]
      for(let i=0;i<numOfRows;i++){
        rows.push(Array.from(Array(numOfCols),()=>0))
      }
      return rows;
    })

    console.log(grid);

    return(
      <div style = {{
        display: 'grid',
        gridTemplateColumns: `repeat(${numOfCols}, 20px)`
      }}>
        {grid.map((rows, i) =>
          rows.map((col, k) => (
            <div
              key={`${i}-${k}`}
              onClick={() => {
                const newGrid = produce(grid, gridCopy =>{
                  gridCopy[i][k] = grid[i][k] ? 0 : 1;
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
    )

  // props: AppProps = {
  //   numOfRows: 10,
  //   numOfCols: 15
  // }
  // state: AppState = {
  //   number: 5
  // }

	// state: AppState = {
	// 	board: [<BigSquare/>,<BigSquare/>,<BigSquare/>]
	// }

}

export default App;
