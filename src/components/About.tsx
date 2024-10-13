import { useState } from "react";
// import profilePic from "../assets/Profile_avatar_placeholder_large.png";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
// import profilePic from "../assets/pepes.webp";
// import { Button } from "@nextui-org/react";
// import { CV } from "./CV";

export const About = () => {
  const [hovered, setHovered] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  // const [showCV, toggleCV] = useState(false);

  const skills = [
    "Java",
    "C#",
    "SQL",
    "PHP",
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "React Native",
    "Node.js",
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
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
      <div className="aboutText">
        <h1>About Me</h1>
        <p>
          Hi, I'm <span className="accentName"> Sebastian Falter</span>, a
          passionate web developer with a love for creating dynamic and
          beautiful web applications. With a strong foundation in HTML, CSS,
          JavaScript, and continuously growing skills in React, I enjoy bringing
          ideas to life in the browser. I'm also confident in using Java, PHP,
          and C#. I have experience working with APIs and backend frameworks
          like Node.js.
        </p>
        <p>
          In my free time, I love exploring new technologies and playing video
          games. I'm always excited to take on new challenges and work on
          innovative projects.
          {/* <h4 onClick={handelCV}>
            CV
            <div
              className="iconExpandCV"
              style={showCV ? { transform: "rotateZ(180deg)" } : {}}
            ></div>
          </h4>
          <CV height={showCV ? "100px" : "0px"}></CV> */}
        </p>
        {/* <Button color="primary" variant="flat">
          <a href="#contact" className="aboutLinkContact">
            Contact
          </a>
        </Button> */}
      </div>
      <div className="skillsContainer">
        <h2>Skills</h2>
        <div className="skillsGrid">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`skillCard ${hoveredSkill === skill ? "hovered" : ""}`}
              onMouseEnter={() => setHoveredSkill(skill)}
              onMouseLeave={() => setHoveredSkill(null)}
              onClick={() =>
                window.open(
                  `https://www.google.com/search?q=${skill}`,
                  "_blank"
                )
              }
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
