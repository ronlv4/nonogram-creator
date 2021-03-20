import React from 'react';
import logo from './logo.svg';
import './App.css';
import BigSquare from './components/BigSquare'


export type AppProps = {
  numOfRows: number,
  numOfCols: number
}

export type AppState = {
	board: JSX.Element[]
}


export class App extends React.PureComponent<{}, AppState> {

  // props: AppProps = {
  //   numOfRows: 10,
  //   numOfCols: 15
  // }

	state: AppState = {
		board: [<BigSquare/>,<BigSquare/>,<BigSquare/>]
	}

  render(){

    // const game = this.state.board.map(()=> return <)
    
    return (
      <div className="App">
        <BigSquare/>
      </div>
    );
  }
}

export default App;
