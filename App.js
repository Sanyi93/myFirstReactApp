
function App(props){
  const currDate = new Date();

  return(
    <div>
      <h1>Thomas</h1>
      <h2>The today´s date is {currDate.toLocaleDateString()} and the current time is {currDate.toLocaleTimeString()}.</h2>
    </div>
  );
}

export default App;
