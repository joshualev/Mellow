import { useEffect, useState } from "react";

import TopNavBar from "./components/TopNavbar/TopNavBar.component";
import Main from "./components/Main/Main.component";
import SideNavBar from "./components/SideNavbar/SideNavBar.component";
import Header from "./components/Header/Header.component";

import "./App.styles.scss";
function App() {
  const [cardData, setCardData] = useState(null);

  useEffect(() => {
    console.log("effect fired");

    const boardData = async () => {
      try {
        const response = await fetch("http://localhost:5173/data.json");
        const data = await response.json();
        setCardData(data);
      } catch (e) {
        console.log("error", e.message);
      }
    };

    boardData();
  }, []);

  return (
    <div className="App">
      <TopNavBar />
      <SideNavBar />
      <Header />
      {cardData && <Main cardData={cardData} />}
    </div>
  );
}

export default App;
