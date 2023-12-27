const root = ReactDOM.createRoot(document.querySelector("#root"));

function Counter() {
  const [count, setCount] = React.useState(0);
  const [numberColor, setNumberColor] = React.useState('white');


  const increaseCount = () => {
    setCount(count + 1);
    setNumberColor(getRandomColor());

  };

  const decreaseCount = () => {
    setCount(count - 1);
    setNumberColor(getRandomColor());

  };

  const resetCount = () => {
    setCount(0);
    setNumberColor('white');

  };
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  return (
    <div className="counter">
      <button class="button-73" onClick={increaseCount}>
        <span class="text">+</span>
      </button>

      <h2 className="number" style={{ color: numberColor }}>{count}</h2>

      <button class="button-73" onClick={decreaseCount}>
        <span class="text">-</span>
      </button>
      <button class="button-73" onClick={resetCount}>
        <span class="text">C</span>
      </button>
    </div>
  );
}

function App() {
  return (
    <div className="app-container">
      <h1>Today: {new Date().toDateString()}</h1>
      <Counter />
    </div>
  );
}

root.render(<App />);
