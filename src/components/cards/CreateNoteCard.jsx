import React from "react";
import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  Textarea,
} from "deep-ui-react";
import { HiCamera } from "react-icons/hi";

function CreateNoteCard(props) {
  return (
    <Card {...props}>
      <CardBody className="flex gap-3">
        <Avatar src="https://support.csch-svu.com:8080/media/Users/ProfileLogo/IMG_0208.JPG" />
        <Textarea className="resize-none" />
      </CardBody>
      <CardFooter className="flex justify-between items-center">
        <Button>add note</Button>
        <Button isIconOnly>
          <HiCamera className="text-xl" />
        </Button>
      </CardFooter>
    </Card>
  );
}

export default CreateNoteCard;
