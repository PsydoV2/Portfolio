import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
  Button,
  Chip,
} from "@nextui-org/react";
import { ScrollShadow } from "@nextui-org/react";

interface PropsProjectCards {
  title: string;
  description: string;
  image: string;
  link: string;
  langs: string[];
}

export const ProjectCards = (props: PropsProjectCards) => {
  return (
    <Card className="projectCard">
      <CardHeader>
        <Image
          isBlurred
          isZoomed
          alt="nextui logo"
          height={100}
          radius="sm"
          src={props.image}
          width={400}
          className="projImage"
        />
      </CardHeader>
      <Divider />
      <CardBody>
        <h1 className="projTitle"> {props.title} </h1>
        <br />
        <div className="projLangs">
          {props.langs.map((lang, index) => (
            <Chip
              key={index}
              color="primary"
              size="md"
              radius="md"
              variant="dot"
              className="projLangTag"
              onClick={() =>
                window.open(`https://www.google.com/search?q=${lang}`, "_blank")
              }
            >
              {lang}
            </Chip>
          ))}
        </div>
        <br />
        <ScrollShadow className="w-[350px]">
          <p className="projDesc">{props.description}</p>
        </ScrollShadow>
      </CardBody>
      <Divider />
      <CardFooter>
        <Button
          href={props.link}
          as={Link}
          color="primary"
          showAnchorIcon
          variant="solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
        </Button>
      </CardFooter>
    </Card>
  );
};
