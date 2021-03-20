import React from 'react'
import Square from './Square';

class BigSquare extends React.Component{
    render(){
        return(
            <div>
                <div className = "bigSquare">
                    <Square/>
                    <Square/>
                    <Square/>
                    <Square/>
                    <Square/>
                </div>
                <div className = "bigSquare">
                    <Square/>
                    <Square/>
                    <Square/>
                    <Square/>
                    <Square/>
                </div>
                <div className = "bigSquare">
                    <Square/>
                    <Square/>
                    <Square/>
                    <Square/>
                    <Square/>
                </div>
                <div className = "bigSquare">
                    <Square/>
                    <Square/>
                    <Square/>
                    <Square/>
                    <Square/>
                </div>
            </div>
        )
    }
}

export default BigSquare