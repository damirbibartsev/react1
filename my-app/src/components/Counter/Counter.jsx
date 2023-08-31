import React from "react";
const {useState, useEffect} = React;

const Example = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((p) => p + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  }


  return (
    <div>
      <p>Вы нажали на кнопку {count} раз.</p>
      <button onClick={handleClick}>Нажми на меня</button>
    </div>
  );

}

export default Example;














// const { useState } = React;

// class Counter extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       clicks: 0
//     };
//   }

//   handleClick = () => this.setState({ clicks: this.state.clicks + 1 });

//   render() {
//     return (
//       <div>
//         <h1>Class Clicks: {this.state.clicks}</h1>
//         <button onClick={this.handleClick}>+</button>
//       </div>
//     );
//   }
// }

// export default Counter;
