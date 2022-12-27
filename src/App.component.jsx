import TopNavBar from "./components/TopNavbar/TopNavBar.component";
import Main from "./components/Main/Main.component";
import SideNavBar from "./components/SideNavbar/SideNavBar.component";
import Header from "./components/Header/Header.component";

import "./App.styles.scss";
function App() {
  return (
    <div className="App">
      <TopNavBar />
      <SideNavBar />
      <Header />
      <Main />
    </div>
  );
}

export default App;
