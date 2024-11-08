import { useState } from "react";
// import profilePic from "../assets/Profile_avatar_placeholder_large.png";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Switch } from "@nextui-org/react";
// import profilePic from "../assets/pepes.webp";
// import { Button } from "@nextui-org/react";
// import { CV } from "./CV";

export const About = () => {
  const [hovered, setHovered] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [buzzwordsActiv, togglebuzzwordsActive] = useState(true);
  // const [showCV, toggleCV] = useState(false);

  // const skills = [
  //   "Java",
  //   "C#",
  //   "SQL",
  //   "PHP",
  //   "HTML",
  //   "CSS",
  //   "JavaScript",
  //   "TypeScript",
  //   "React",
  //   "React Native",
  //   "Node.js",
  // ];

  const skills = [
    { name: "Java", color: "#b07219" }, // Java - Braun
    { name: "C#", color: "#68217A" }, // C# - Lila
    { name: "SQL", color: "#336791" }, // SQL - Dunkelblau
    { name: "PHP", color: "#4F5D95" }, // PHP - Dunkelblau
    { name: "HTML", color: "#e34c26" }, // HTML - Rot
    { name: "CSS", color: "#264de4" }, // CSS - Blau
    { name: "JavaScript", color: "#f0db4f" }, // JavaScript - Gelb
    { name: "TypeScript", color: "#3178c6" }, // TypeScript - Hellblau
    { name: "React", color: "#61dafb" }, // React - Hellblau
    { name: "React Native", color: "#61dafb" }, // React Native - Hellblau
    { name: "Node.js", color: "#3c873a" }, // Node.js - Grün
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
            Hi, I'm <span className="accentAboutMe"> Sebastian Falter</span>, a
            passionate web developer with a love for creating dynamic and
            beautiful web applications. With a strong foundation in HTML, CSS,
            JavaScript, and growing expertise in React with TypeScript, I enjoy
            bringing ideas to life in the browser. I also build mobile apps
            using React Native with TypeScript, expanding my reach to versatile,
            cross-platform projects. I'm currently completing an apprenticeship
            as a{" "}
            <a
              className="accentAboutMe"
              href="https://www.google.com/search?q=Fachinformatiker+f%C3%BCr+Anwendungsentwicklung"
              target="_blank"
            >
              Fachinformatiker für Anwendungsentwicklung
            </a>{" "}
            (Software Developer) at 1&1. Alongside my skills in Java, PHP, and
            C#, I have experience working with APIs and backend frameworks like
            Node.js.
          </p>
          <p>
            Beyond coding, I enjoy exploring new technologies, motorcycle
            riding, 3D modeling, and playing video games. I'm always excited to
            take on new challenges and work on innovative projects.
          </p>
        </div>
        <div style={buzzwordsActiv == true ? { display: "none" } : {}}>
          <p>
            Hi, I'm <span className="accentAboutMe"> Sebastian Falter</span>, a
            web developer with a focus on building web and mobile applications.
            I work with HTML, CSS, JavaScript, React, and TypeScript, and I also
            create mobile apps using React Native. Currently, I’m training as a{" "}
            <a
              className="accentAboutMe"
              href="https://www.google.com/search?q=Fachinformatiker+f%C3%BCr+Anwendungsentwicklung"
              target="_blank"
            >
              Fachinformatiker für Anwendungsentwicklung
            </a>{" "}
            (Software Developer) at 1&1 and have experience with Java, PHP, C#,
            and Node.js.
          </p>
          <p>
            In my free time, I like to explore new tech, ride motorcycles, do 3D
            modeling, and play video games. I'm always eager to take on new
            projects and challenges.
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
                  ? { backgroundColor: skill.color }
                  : {}
              }
              onClick={() =>
                window.open(
                  `https://www.google.com/search?q=${skill}`,
                  "_blank"
                )
              }
            >
              {skill.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
