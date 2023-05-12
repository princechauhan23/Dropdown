import { createRoot } from "react-dom/client";
import Dropdown1 from "./Dropdown1";
import Dropdown2 from "./Dropdown2";
import Dropdown3 from "./Dropdown3";
import "./index.css";

function App() {
  // list item array
  const listItems = [
    "Select an option",
    "List item 1",
    "List item 2",
    "List item 3",
    "List item 4",
    "By Prince",
  ];
  return (
    <div id="conatiner" className="h-screen w-full text-center flex flex-col items-center gap-y-10 bg-gradient-to-b from-blue-800 from-10% to-indigo-950 to-90%">
      <h1>Dropdown</h1>
      <div className="h-1/6 w-6/12 flex justify-evenly items-center">
        <Dropdown1 items={listItems} />
        <Dropdown2 items={listItems} />
        <Dropdown3 items={listItems} />
      </div>
    </div>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
