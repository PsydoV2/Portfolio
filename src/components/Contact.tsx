import { Input, Textarea } from "@heroui/input";
import { Button } from "@heroui/button";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

export const Contact = () => {
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
          <li>
            <a href="mailto:seb.falter@gmail.com" target="_blank">
              <MdAlternateEmail className="icon" /> seb.falter@gmail.com
            </a>
          </li>
        </ul>
      </div>
      <form
        className="rightSideContact"
        action="https://formsubmit.co/seb.falter@gmail.com"
        method="POST"
      >
        <Input isRequired className="input" label="Name" type="text" />
        <Input isRequired className="input" label="Email" type="email" />
        <Input
          isRequired
          className="input"
          label="Subject"
          type="text"
          labelPlacement="inside"
        />
        <Textarea
          isRequired
          className="input"
          label="Message"
          labelPlacement="inside"
          placeholder="Type your message here..."
        />
        <Button color="primary" variant="ghost" className="input" type="submit">
          Send Message
        </Button>
      </form>
    </div>
  );
};
