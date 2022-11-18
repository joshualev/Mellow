import TopNavBar from "./components/TopNavbar/TopNavBar.component";
import MainContent from "./components/Main/MainContent.component";
import SideNavBar from "./components/SideNavbar/SideNavBar.component";
import Header from "./components/Header/Header.component";

import "./App.styles.scss";
function App() {
  return (
    <div className="App">
      <TopNavBar />
      <SideNavBar />
      <Header />
      <MainContent />
    </div>
  );
}

export default App;
