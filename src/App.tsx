import { TitleBar } from "./components/TitleBar";
// import { Clock } from "./components/Clock";
// import { ToDoList } from "./components/ToDoList";
import { About } from "./components/About";
import { Cookies } from "./components/Cookies";
import { Contact } from "./components/Contact";
import Footer from "./components/Footer";
import { ProjectCon } from "./components/ProjectCon";

import { useState } from "react";

function App() {
  const [choice, setChoice] = useState<string | null>(
    localStorage.getItem("cookiesChoice")
  );

  const handelClick = (choice: string) => {
    setChoice(choice);
    localStorage.setItem("cookiesChoice", choice);
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
      "https://fonts.googleapis.com/css2?family=Doto:wght@100..900&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Oswald:wght@200..700&display=swap";
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
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

export default App;
