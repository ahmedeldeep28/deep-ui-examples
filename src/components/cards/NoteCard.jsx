import { Avatar, Card, CardBody, CardHeader, Divider } from "deep-ui-react";
import React from "react";

function NoteCard() {
  return (
    <Card>
      <CardHeader className="py-2">
        <div className="flex items-center gap-2">
          <Avatar src="https://support.csch-svu.com:8080/media/Users/ProfileLogo/IMG_0208.JPG" />
          <div className="flex flex-col">
            <h6 className="text-base capitalize font-medium">ahmed hatem</h6>
            <p className="text-sm text-foreground/80">1/21/2024 11:18 AM</p>
          </div>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p className="mb-2 5 whitespace-pre-wrap">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio cumque
          ullam in nulla laudantium expedita minus quisquam. Labore perspiciatis
          excepturi deleniti ipsum, tempore praesentium velit! Expedita quasi
          enim dolore unde!
        </p>
      </CardBody>
    </Card>
  );
}

export default NoteCard;
