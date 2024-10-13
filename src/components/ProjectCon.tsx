import { ProjectCards } from "./ProjectCards";

import geisProjImage from "../assets/ProjImages/geisProj.png";
import bashProjImage from "../assets/ProjImages/bash.png";
import spacerunnerProjImage from "../assets/ProjImages/spacerunner.png";
import hackathonweatherProjImage from "../assets/ProjImages/hackathonweather.png";
import hackatonscansafeProjImage from "../assets/ProjImages/hackathonscansafe.png";
import hackatonbeforeafterProjImage from "../assets/ProjImages/hackathonBeforeORAfter.png";

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
      <ProjectCards
        title="Webgame"
        description="I just wanted to learn how to do Webgames so i created that simple game."
        link="https://sfalter.de/WebGames/SpaceRun/"
        image={spacerunnerProjImage}
        langs={["HTML", "CSS", "JS"]}
      ></ProjectCards>
      <ProjectCards
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
      ></ProjectCards>
      <ProjectCards
        title="Before or After"
        description="As part of a hackathon, the third challenge was to build something using the Open Movie Database API. That's why I developed an app inspired by the Higher Lower Game, in which you have to decide whether a film was released before or after the specified film."
        link="https://github.com/PsydoV2/HackathonAufgabe3"
        image={hackatonbeforeafterProjImage}
        langs={["HTML", "CSS", "TypeScript", "React Native"]}
      ></ProjectCards>
    </div>
  );
};