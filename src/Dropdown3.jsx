import { useState } from "react";

const Dropdown3 = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleButtonClick = () => {
    document.getElementById("dropdown3-list").classList.toggle("hidden");
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    document.getElementById("dropdown3-list").classList.toggle("hidden");
  };

  return (
    <div className="w-32 h-8 mt-2">
      <button
        className="border border-sky-200 text-white rounded-md p-1 hover:bg-blue-400 hover:text-black"
        onClick={handleButtonClick}
        onMouseOver={handleButtonClick}
      >
        {selectedItem ? selectedItem : "Select an option"}
      </button>
      <ul id="dropdown3-list" className="list-none hidden">
        {items.map((item, index) => (
          <li
            key={index}
            className="h-auto mt-2 text-gray-300 cursor-pointer hover:bg-blue-200 hover:text-black rounded-md"
            onClick={() => handleItemClick(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown3;
