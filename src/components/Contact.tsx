import { Input, Textarea } from "@heroui/input";
import { Button } from "@heroui/button";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useState } from "react";

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handelSendEmail = () => {
    console.log(name);
    console.log(email);
    console.log(subject);
    console.log(message);
  };

  return (
    <div className="contactContainer">
      <div className="leftSideContact">
        <h1>Let's Connect</h1>
        <p>
          Whether you have a project in mind, a collaboration opportunity, or
          just want to say hello — I’d love to hear from you. I’m always open to
          discussing new ideas, exploring creative solutions, or simply chatting
          about design and development.
        </p>

        <p>
          Feel free to reach out using the contact form on the right. I do my
          best to respond as quickly as possible.
        </p>

        <h2>Prefer other ways to connect?</h2>
        <span>Check out the links below:</span>

        <ul>
          <li>
            <a href="https://www.instagram.com/sebfalter/" target="_blank">
              <FaInstagram className="icon" /> Send me a DM on Instagram
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/sebfalter/" target="_blank">
              <FaLinkedin className="icon" /> Connect on LinkedIn
            </a>
          </li>
          <li>
            <a href="https://github.com/PsydoV2" target="_blank">
              <FaGithub className="icon" /> Browse My GitHub Projects
            </a>
          </li>
        </ul>
      </div>
      <div className="rightSideContact">
        <Input
          isRequired
          className="input"
          label="Name"
          type="text"
          onChange={(event) => setName(event.target.value)}
        />
        <Input
          isRequired
          className="input"
          label="Email"
          type="email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <Input
          isRequired
          className="input"
          label="Subject"
          type="text"
          labelPlacement="inside"
          onChange={(event) => setSubject(event.target.value)}
        />
        <Textarea
          isRequired
          className="input"
          label="Message"
          labelPlacement="inside"
          placeholder="Type your message here..."
          onChange={(event) => setMessage(event.target.value)}
        />
        <Button
          color="primary"
          variant="ghost"
          className="input"
          onPress={handelSendEmail}
          isDisabled
        >
          Send Message
        </Button>
      </div>
    </div>
  );
};
