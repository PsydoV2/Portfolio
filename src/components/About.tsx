import { useState } from "react";
// import profilePic from "../assets/Profile_avatar_placeholder_large.png";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Switch } from "@nextui-org/react";
import {
  FaJava,
  FaPhp,
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
} from "react-icons/fa6";
import { TbBrandCSharp, TbBrandReactNative } from "react-icons/tb";
import {
  SiTypescript,
  SiElectron,
  SiMariadbfoundation,
  SiExpo,
  SiPython,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { TbSql } from "react-icons/tb";
// import profilePic from "../assets/pepes.webp";
// import { Button } from "@nextui-org/react";
// import { CV } from "./CV";

export const About = () => {
  const [hovered, setHovered] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [buzzwordsActiv, togglebuzzwordsActive] = useState(true);
  // const [showCV, toggleCV] = useState(false);

  const skills = [
    // Backend-Sprachen
    { name: "Java", color: "#de8e2f", icon: <FaJava />, fontColor: "#fff" },
    {
      name: "C#",
      color: "#67217a",
      icon: <TbBrandCSharp />,
      fontColor: "#fff",
    },
    { name: "PHP", color: "#777cb4", icon: <FaPhp />, fontColor: "#fff" },
    { name: "Python", color: "#336d9c", icon: <SiPython />, fontColor: "#fff" },

    // Datenbanken
    { name: "MySQL", color: "#f29208", icon: <GrMysql />, fontColor: "#fff" },
    {
      name: "MariaDB",
      color: "#394669",
      icon: <SiMariadbfoundation />,
      fontColor: "#fff",
    },
    { name: "SQL", color: "#336791", icon: <TbSql />, fontColor: "#fff" },

    // Web (Frontend)
    { name: "HTML", color: "#e4542d", icon: <FaHtml5 />, fontColor: "#fff" },
    { name: "CSS", color: "#6b399c", icon: <FaCss3 />, fontColor: "#fff" },
    { name: "JavaScript", color: "#f8e026", icon: <FaJs />, fontColor: "#000" },
    {
      name: "TypeScript",
      color: "#2f74c1",
      icon: <SiTypescript />,
      fontColor: "#fff",
    },

    // Frameworks & Libraries
    { name: "React", color: "#57c4db", icon: <FaReact />, fontColor: "#000" },
    {
      name: "React Native",
      color: "#57c4db",
      icon: <TbBrandReactNative />,
      fontColor: "#000",
    },
    { name: "Expo", color: "#1877b9", icon: <SiExpo />, fontColor: "#fff" },

    // Backend/Fullstack Tools
    {
      name: "Node.js",
      color: "#417e38",
      icon: <FaNodeJs />,
      fontColor: "#fff",
    },
    {
      name: "Electron",
      color: "#9eeaf8",
      icon: <SiElectron />,
      fontColor: "#000",
    },
  ];

  // const handelCV = () => {
  //   toggleCV(!showCV);
  // };

  return (
    <div className="aboutCon" id="about">
      <div className="profilePicContainer">
        <div
          // src={profilePic}
          // alt="Profile"
          className={`profilePic ${hovered ? "hovered" : ""}`}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={() =>
            window.open(
              "https://www.jetpunk.com/user-quizzes/1902574/twitch-emotes-erraten"
            )
          }
        />
        <div className="socialIcons">
          <a
            href="https://github.com/PsydoV2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/sebfalter/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/sebfalter/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
      <div className="aboutText">
        <h1>About Me</h1>
        <br />
        <Switch
          onValueChange={() => togglebuzzwordsActive(!buzzwordsActiv)}
          size="md"
          isSelected={buzzwordsActiv}
        >
          Buzzwords
        </Switch>
        <br />
        <br />
        <div style={buzzwordsActiv == false ? { display: "none" } : {}}>
          <p>
            Hi, I'm <span className="accentAboutMe">Sebastian Falter</span>, a
            passionate full-stack developer with a love for clean code, smooth
            user experiences, and smart solutions. I specialize in building
            responsive and dynamic web and mobile applications using
            technologies like React, TypeScript, and React Native. With tools
            like Expo and Electron, I’m able to create cross-platform
            experiences — from mobile devices to desktop environments.
          </p>
          <p>
            I'm currently completing my apprenticeship as a{" "}
            <a
              className="accentAboutMe"
              href="https://www.google.com/search?q=Fachinformatiker+f%C3%BCr+Anwendungsentwicklung"
              target="_blank"
            >
              Fachinformatiker für Anwendungsentwicklung
            </a>{" "}
            (Software Developer) at 1&1, where I work with modern enterprise
            technologies such as C#, ASP.NET, REST and SOAP APIs. Whether I’m
            maintaining current systems, developing new services, or modernizing
            legacy tools, I enjoy solving real-world problems with reliable
            backend logic and clean architecture.
          </p>
          <p>
            My stack also includes Java, PHP, and Node.js, and I’m always eager
            to explore new technologies and frameworks. I enjoy combining my
            technical knowledge with creativity – be it through 3D modeling,
            tinkering with mobile sensors, or crafting custom tooling to enhance
            productivity. In my spare time, you'll likely find me riding
            motorcycles, experimenting with side projects, or diving into video
            games. I'm always excited to grow, learn, and build something
            meaningful.
          </p>
        </div>
        <div style={buzzwordsActiv == true ? { display: "none" } : {}}>
          <p>
            Hi, I'm <span className="accentAboutMe">Sebastian Falter</span>, a
            developer working on web and mobile apps using React, TypeScript,
            and React Native. I use Expo for cross-platform development and
            occasionally work on desktop applications using Electron. I enjoy
            writing clean, understandable code and turning ideas into working
            interfaces.
          </p>
          <p>
            I’m currently doing an apprenticeship as a{" "}
            <a
              className="accentAboutMe"
              href="https://www.google.com/search?q=Fachinformatiker+f%C3%BCr+Anwendungsentwicklung"
              target="_blank"
            >
              Fachinformatiker für Anwendungsentwicklung
            </a>{" "}
            (Software Developer) at 1&1. There, I mainly work with C#, ASP.NET,
            and REST and SOAP APIs. The projects range from backend APIs to
            internal web tools used in real production environments.. I also
            have experience with Java, PHP, SQL, and Node.js from various
            private and team-based projects.
          </p>
          <p>
            I also enjoy 3D modeling, gaming, and motorcycle riding. I’m always
            up for learning new things and building tools that are both useful
            and fun.
          </p>
        </div>
      </div>
      <div className="skillsContainer">
        <h2>What im working with</h2>
        <div className="skillsGrid">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`skillCard ${
                hoveredSkill === skill.name ? "hovered" : ""
              }`}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
              style={
                hoveredSkill == skill.name
                  ? { backgroundColor: skill.color, color: skill.fontColor }
                  : {}
              }
              onClick={() =>
                window.open(
                  `https://www.google.com/search?q=${skill.name}`,
                  "_blank"
                )
              }
            >
              {skill.icon}
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
