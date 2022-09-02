import "./App.scss";

const SunRay = () => (
  <>
    <div>
      <img src="https://via.placeholder.com/340x1200.jpg" alt="" />
    </div>
    <div></div>
  </>
);

function App() {
  return (
    <div className="wrapper">
      <div className="positioner">
        {[...Array(22).keys()].map((n) => (
          <SunRay key={n} />
        ))}
      </div>
    </div>
  );
}

export default App;
