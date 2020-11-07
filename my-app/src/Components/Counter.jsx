import React from "react"

class Counter extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }
    
    handleClick =()=>{
    this.setState({count: this.state.count + 1})
        }
    
    handleClickdown =()=>{
        this.setState({
            count: this.state.count > 1 ? this.state.count - 1 : 0
         })
            }
    render() {
        return (
            <div className ="counter">
                <button onClick={this.handleClick}>+</button>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleClickdown}>-</button>
            </div>
        )
    }
}


export default Counter;
