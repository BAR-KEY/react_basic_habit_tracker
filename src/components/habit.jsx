import React, { Component } from 'react';

class Habit extends Component {

componentDidMount(){
    console.log(`habit: ${this.props.habit.name} mounted`);
}
// 컴포넌트가 사용자에게 보여질때 호출이 됨
componentWillUnmount(){
    console.log(`habit: ${this.props.habit.name} will UnDmounted`);
}
// 컴포넌트가 지워지기 전에 호출이 됨
    handleIncrement = () => {
        this.props.onIncrement(this.props.habit);
    }
    
    handleDecrement = () => {
        this.props.onDecrement(this.props.habit);
    }
    
    handleDelete = () => {
        this.props.onDelete(this.props.habit);

    }

    render() {
        const {name, count} = this.props.habit;
        return (
            <>
            <li className="habit">
            <span className="habit-name">{name}</span>
            <span className="habit-count">{count}</span>
            <button className="habit-button habit-increase" onClick={this.handleIncrement}>
                <i className="fas fa-plus-square"></i>
            </button>
            <button className="habit-button habit-decrease" onClick={this.handleDecrement}>
                <i className="fas fa-minus-square"></i>
            </button>
            <button className="habit-button habit-delete" onClick={this.handleDelete}>
                <i className="fas fa-trash"></i>
            </button>
            
            </li>
            </>
        );
    }
}

export default Habit;