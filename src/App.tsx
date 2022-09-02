import "./App.scss";

const SunRay = () => (
  <>
    <div>
      <img src="https://via.placeholder.com/250x900.jpg" alt="" />
    </div>
    <div></div>
  </>
);

function App() {

  return (
    <div className="wrapper">
      {[...Array(22).keys()].map((n) => (
        <SunRay key={n} />
      ))}
    </div>
  );
}

export default App;
