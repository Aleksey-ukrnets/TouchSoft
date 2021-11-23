import React, { Component } from "react";


export default class StateComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            count: 0
           

        };
        this.reset = this.reset.bind(this)
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
        // this.backColor = this.backColor.bind(this)
    }
    // backColor(){
    //     this.setState(state =>({

    //     }))
    // }

    reset(){
        this.setState({
            count: 0,
            
        })
    }
    increment(){
        this.setState(state => ({
            count: state.count + 1
        }));
    }
    decrement(){
        if(this.state.count <= 0){
            this.setState({
                count:0
            });
          }else {
            this.setState({
                count: this.state.count - 1
            });
          }
    }
    render(){
        if(this.state.count % 2 === 0){
        return (
    <div className='wrapper'>
        <div className='container'>
            <div className='counter' style={{background: 'blue'}}>{this.state.count}</div>
            <div className='number__type'>Введено четное число</div>
            <div className='btn-list'>
                <button className='minus' onClick={this.decrement}>-</button>
                <button className='reset' onClick={this.reset}>reset</button>
                <button className='plus' onClick={this.increment}>+</button>
            </div>

      </div>
    </div>
            
        )
    }
else{
    //////////////////////////// НЕчетное красный цвет, четное число синий цвет
    return(
        <div className='wrapper'>
        <div className='container'>
            <div className='counter' style={{background: 'red'}}>{this.state.count}</div>  
            <div className='number__type'>Введено нечетное число</div>
            <div className='btn-list'>
                <button className='minus' onClick={this.decrement}>-</button>
                <button className='reset' onClick={this.reset}>reset</button>
                <button className='plus' onClick={this.increment}>+</button>
            </div>

      </div>
    </div>
            
    )
}
    }

}
   