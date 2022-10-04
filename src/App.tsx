import { Navbar } from "./components/navbar/navbar";
import { menuData, menuElementType } from "./data/menuData";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { About } from "./components/about/about";

const findMenuData = (menu: Array<menuElementType>, dataSrc: string) =>
  menu.find((el) => el.title.toLowerCase() === dataSrc.toLowerCase());

function App() {
  return (
    <div className="App">
      <Navbar menu={menuData} />
      <Routes>
        <Route path="about" element={<About content={findMenuData(menuData,"about")} />} />
        <Route path="skills & experience" element={<About content={findMenuData(menuData,"skills & experience")} />} />
      </Routes>
    </div>
  );
}

export default App;
