import "./App.css";
import data from "./data";
import Card from "./components/Card";
import Navbar from "./components/Navbar";

function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} {...item} />;
  });
  return (
    <div className="main">
      <Navbar />
      {cards}
    </div>
  );
}

export default App;
