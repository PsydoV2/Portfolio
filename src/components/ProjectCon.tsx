import { ProjectCards } from "./ProjectCards";

import geisProjImage from "../assets/ProjImages/geisProj.png";
import bashProjImage from "../assets/ProjImages/bash.png";
// import spacerunnerProjImage from "../assets/ProjImages/spacerunner.png";
// import hackathonweatherProjImage from "../assets/ProjImages/hackathonweather.png";
// import hackatonscansafeProjImage from "../assets/ProjImages/hackathonscansafe.png";
import hackatonbeforeafterProjImage from "../assets/ProjImages/hackathonBeforeORAfter.png";
import tastysnapProjImage from "../assets/ProjImages/tastysnap.png";
import assemblyProjImage from "../assets/ProjImages/assembly.png";
import lifeSpanProj from "../assets/ProjImages/lifeSpanProj.png";
import leanx from "../assets/ProjImages/leanx.png";
import expoTemplateImg from "../assets/ProjImages/ExpoTemplate.png";

export const ProjectCon = () => {
  return (
    <div className="projectCon" id="projects">
      <ProjectCards
        title="Webpage for local store"
        description="My first project for a 'client' was to modernize an old website and make it more appealing to customers."
        link="https://www.obst-gemuese-geis.de/"
        image={geisProjImage}
        langs={["HTML", "CSS", "JS"]}
      ></ProjectCards>
      <ProjectCards
        title="Bash Script"
        description="For a term paper in ITEC (information technology), a script had to be created that should be able to run according to the POSIX standard."
        link="https://github.com/PsydoV2/ProjectScriptITEC"
        image={bashProjImage}
        langs={["SHELL", "ROFF"]}
      ></ProjectCards>
      {/* <ProjectCards
        title="Space Runner"
        description="To explore the world of web game development, I created a simple game as a hands-on learning experience."
        link="https://sfalter.de/WebGames/SpaceRun/"
        image={spacerunnerProjImage}
        langs={["HTML", "CSS", "JS"]}
      ></ProjectCards> */}
      {/* <ProjectCards
        title="WeatherApp"
        description="As part of a hackathon, the first challenge was to create something about weather using the Open Meteo API, which is why I developed a classic weather forecast app with react native."
        link="https://github.com/PsydoV2/HackathonAufgabe1"
        image={hackathonweatherProjImage}
        langs={["HTML", "CSS", "TypeScript", "React Native"]}
      ></ProjectCards>
      <ProjectCards
        title="ScanSafe"
        description="As part of a hackathon, the second challenge was to create something using the Open Food Facts API. That's why I developed an app that allows you to scan a barcode and the app warns you if you're allergic to something in it."
        link="https://github.com/PsydoV2/HackathonAufgabe2"
        image={hackatonscansafeProjImage}
        langs={["HTML", "CSS", "TypeScript", "React Native"]}
      ></ProjectCards> */}
      <ProjectCards
        title="Before or After"
        description="As part of a hackathon, the third challenge was to build something using the Open Movie Database API. That's why I developed an app inspired by the Higher Lower Game, in which you have to decide whether a film was released before or after the specified film."
        link="https://github.com/PsydoV2/HackathonAufgabe3"
        image={hackatonbeforeafterProjImage}
        langs={["HTML", "CSS", "TypeScript", "React Native"]}
      ></ProjectCards>
      <ProjectCards
        title="TastySnap"
        description="TastySnap is the ultimate app for food lovers, share meal photos, rate dishes and restaurants, discover recipes, and connect with fellow foodies worldwide. (Not released yet)"
        link="https://tastysnap.org/"
        image={tastysnapProjImage}
        langs={[
          "HTML",
          "CSS",
          "TypeScript",
          "React Native",
          "React",
          "NodeJS",
          "SQL",
        ]}
      ></ProjectCards>
      <ProjectCards
        title="Assembly"
        description="This repository features basic programs written in assembly language, driven by my curiosity to understand how low-level programming works. Through these projects, I aimed to deepen my knowledge of computer architecture and the underlying mechanics of programming."
        link="https://github.com/PsydoV2/Assembly"
        image={assemblyProjImage}
        langs={["ASSEMBLY"]}
      ></ProjectCards>
      <ProjectCards
        title="Lifespan Visualizer"
        description="Bored during the holidays and inspired by an Instagram creator, I developed a website that visualizes your lifespan. The application uses the average life expectancy of your country of birth to calculate how much time you've already lived and how much you are expected to have left. You can customize the level of detail, choosing to view it in days, weeks, or years."
        link="https://lifespanvisualizer.sfalter.de/"
        image={lifeSpanProj}
        langs={["HTML", "CSS", "TypeScript", "React"]}
      ></ProjectCards>
      <ProjectCards
        title="LeanX"
        description="LeanX is your smart riding companion, designed to track and analyze your motorcycle's lean angle in real time. With precise sensor calibration, live tilt display, and ride history logging, LeanX helps you master every curve with confidence."
        link="https://leanx.sfalter.de/"
        image={leanx}
        langs={["HTML", "CSS", "TypeScript", "React", "React Native"]}
      ></ProjectCards>
      <ProjectCards
        title="Expo Template"
        description="A clean, minimal, and developer-friendly Expo starter template with authentication, file-based routing, and dark/light mode support – powered by expo-router."
        link="https://github.com/PsydoV2/ExpoAuthRouteTemplate"
        image={expoTemplateImg}
        langs={["HTML", "CSS", "TypeScript", "React", "React Native"]}
      ></ProjectCards>
    </div>
  );
};
