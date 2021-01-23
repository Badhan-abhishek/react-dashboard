import "./App.css";
import MidBar from "./components/MidBar/MidBar";
import StatusBar from "./components/statusBar/StatusBar";
import TabBar from "./components/TabBar/TabBar";

function App() {
  return (
    <>
      <div className="container">
        <StatusBar brand="Campaign Management" />
      </div>
      <div className="page-container">
        <MidBar />
        <TabBar />
      </div>
    </>
  );
}

export default App;
