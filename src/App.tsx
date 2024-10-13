import { TitleBar } from "./components/TitleBar";
// import { Clock } from "./components/Clock";
// import { ToDoList } from "./components/ToDoList";
import { About } from "./components/About";
import { Cookies } from "./components/Cookies";
// import { Contact } from "./components/Contact";

import { ProjectCon } from "./components/ProjectCon";

import { useState } from "react";

function App() {
  const [choice, setChoice] = useState<string | null>(
    sessionStorage.getItem("cookiesChoice")
  );

  const handelClick = (choice: string) => {
    setChoice(choice);
    sessionStorage.setItem("cookiesChoice", choice);
    checkValue();
  };

  const checkValue = () => {
    if (choice == "true") {
      loadGoogleFonts();
    }
  };

  const loadGoogleFonts = () => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css?family=Nova%20Round:700|Nova%20Round:400";
    document.head.appendChild(link);
  };

  return (
    <>
      {choice == null ? (
        <Cookies
          handelClick={(choice) => {
            handelClick(choice);
          }}
        ></Cookies>
      ) : (
        checkValue()
      )}

      <TitleBar></TitleBar>

      <About></About>

      <ProjectCon></ProjectCon>

      {/* <Contact></Contact> */}
    </>
  );
}

export default App;
