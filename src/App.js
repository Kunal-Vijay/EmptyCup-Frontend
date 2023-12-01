import { useEffect, useState } from "react";
import "./App.css";
import ItemCard from "./components/ItemCard";
import Navbar from "./components/Navbar";

function App() {
  const [showShortlisted, setShowShortlisted] = useState(false);
  const [designers, setDesigners] = useState([]);
  const host = process.env.REACT_APP_BASE_URL;

  useEffect(() => {
    // Fetch designers from the server
    const fetchDesigners = async () => {
      try {
        const response = await fetch(`${host}/designers`);
        const data = await response.json();
        setDesigners(data);
      } catch (error) {
        console.error("Error fetching designers:", error);
      }
    };

    // Call the fetch function
    fetchDesigners();
  }, []);

  return (
    <div className="App">
      <Navbar
        showShortlisted={showShortlisted}
        setShowShortlisted={setShowShortlisted}
      />

      {showShortlisted
        ? designers
            .filter((designer) => designer.shortlisted === true)
            .map((item, key) => <ItemCard key={key} designer={item} />)
        : designers.map((item, key) => <ItemCard key={key} designer={item}  setDesigners={setDesigners} />)}
    </div>
  );
}

export default App;
