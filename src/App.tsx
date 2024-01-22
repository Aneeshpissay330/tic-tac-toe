import './App.css';

function App() {
  return (
    <div className="root">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((_, index) => (
        <div className="square" onClick={() => console.log("d")} key={index}></div>
      ))}
    </div>
  );
}

export default App;
