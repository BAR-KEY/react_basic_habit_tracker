import { Component } from 'react';
import './app.css';
import Habits from './components/habits';
import Navbar from './components/navbar';

class App extends Component {
  state = {
    habits: [
        {id:0, name:'Reading', count:0 },
        {id:1, name:'Running', count:0 },
        {id:2, name:'Coding', count:0 },
    ],
    
}
handleIncrement = habit => {
    console.log(`handleIncrement ${habit.name}`)
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits[index].count++;
    this.setState({ habits });
}

handleDecrement = habit => {
    console.log(`handleDecrement ${habit.name}`)
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    const count = habits[index].count - 1;
    habits[index].count = count < 0 ? 0 : count;
    this.setState({ habits });
    
}

handleDelete = habit => {
  console.log(`handleDelete ${habit.name}`);
    // 내가한거
    // const habits = [...this.state.habits];
    // const index = habits.indexOf(habit);
    // habits.splice(index, 1);
    // 내가한거
    const habits = this.state.habits.filter(item => item.id !== habit.id);
    // state의 habits을 빙글빙글 돌면서 item 을 전달받고, 
    // item의 id 가 habit 의 id와 동일하지 않은 item 으로 새롭게 배열을 짜겠다.
    
    this.setState({ habits });
    
}
handleAdd = name => {
  const habits = [...this.state.habits, {id: Date.now(), name, count:0}];
  this.setState({habits});
}
handleReset = () => {
const habits = this.state.habits.map(habit => {
  habit.count = 0;
  return habit;
});
this.setState({habits});
}
  render(){
    return (
      <>
      <Navbar totalCount={this.state.habits.filter(item => item.count > 0).length}/>
      <Habits habits={this.state.habits}
      onIncrement={this.handleIncrement}
      onDecrement={this.handleDecrement}
      onDelete={this.handleDelete}
      onAdd={this.handleAdd}
      onReset={this.handleReset}/>
      </>
    );
  }
}

export default App;
