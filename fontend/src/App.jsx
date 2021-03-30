import React from "react";
import Nav from "./components/Nav/Nav";
import UploadAxios from "./getAPI/UploadAxios";
import Footer from "./components/Footer";
import General from "./components/pages/Tips";
import Dropdown from "./components/Nav/Dropdown";

function App() {
  const [isOpen, setIsOpen] = React.useState(false);
  function toggle() {
    setIsOpen(!isOpen);
  }

  function hideMenu() {
    if (window.innerWidth > 768 && isOpen) {
      setIsOpen(false);
    }
  }

  React.useEffect(() => {
    hideMenu();

    window.addEventListener("resize", hideMenu);

    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  });

  return (
    <div className="App">
      <Nav toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <UploadAxios />
      <General />
      <Footer />
    </div>
  );
}

export default App;
