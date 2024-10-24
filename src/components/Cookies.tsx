import { Button, ButtonGroup } from "@nextui-org/react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";

interface CookiesProps {
  handelClick: (choice: string) => void;
}

export const Cookies = (props: CookiesProps) => {
  return (
    <Card className="max-w-[400px] cookiesCon" style={{ zIndex: 100 }}>
      <CardHeader className="flex gap-3">
        <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src="https://cdn-icons-png.flaticon.com/512/1047/1047711.png"
          width={40}
        />
        <div className="flex flex-col">
          <h5>This Website uses Cookies!</h5>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p>
          We use cookies to enhance your experience and to load{" "}
          <Link href="https://fonts.google.com/" target="_blank">
            Google Fonts
          </Link>
          . Do you accept the use of these cookies?
        </p>
      </CardBody>
      <Divider />
      <CardFooter
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ButtonGroup style={{ width: "90%" }}>
          <Button
            onClick={() => {
              props.handelClick("true");
            }}
            color="primary"
            fullWidth
          >
            Accept
          </Button>
          <Button
            onClick={() => {
              props.handelClick("false");
            }}
            color="danger"
            fullWidth
          >
            Decline
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};
