import React, {memo} from 'react';

const Habitaddform = memo(props => {
    const inputRef = React.createRef();
    
    const onSubmit = event => {
        event.preventDefault();
        const name = inputRef.current.value;
        name && props.onAdd(name);
        inputRef.current.value = '';
    }
    return (
        <div className="add">
            <form className="add-form" onSubmit={onSubmit}>
                <input 
                ref={inputRef} 
                type="text" 
                className="add-input" 
                placeholder="Habit"/>
                <button className="add-button">Add</button>
            </form>
        </div>
    );
            
});

export default Habitaddform;

// 컴포넌트 형식
// import React, { PureComponent } from 'react';

// class HabitAddForm extends PureComponent {
//     inputRef = React.createRef();

//     onSubmit = event => {
//         event.preventDefault();
//         const name = this.inputRef.current.value;
//         name && this.props.onAdd(name);
//         this.inputRef.current.value = '';
//     }
//     render() {
//         return (
//             <div className="add">
//                 <form className="add-form" onSubmit={this.onSubmit}>
//                     <input ref={this.inputRef} type="text" className="add-input" placeholder="Habit"/>
//                     <button className="add-button">Add</button>
//                 </form>
//             </div>
//         );
//     }
// }

// export default HabitAddForm;