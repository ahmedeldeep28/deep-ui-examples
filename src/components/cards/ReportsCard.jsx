import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardText,
  CardTitle,
  FormControl,
  Input,
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  Textarea,
} from "deep-ui-react";
import React from "react";

function ReportsCard({ ...props }) {
  return (
    <Card {...props}>
      <CardHeader>
        <CardTitle>Report an issue</CardTitle>
        <CardText>What area are you having problems with?</CardText>
      </CardHeader>
      <CardBody>
        <div className="grid grid-cols-2 gap-3">
          <FormControl>
            <Label>Area</Label>
            <Select className="w-full">
              <SelectTrigger />
              <SelectContent>
                <SelectItem value="team">Team</SelectItem>
                <SelectItem value="billing">billing</SelectItem>
                <SelectItem value="account">account</SelectItem>
                <SelectItem value="support">support</SelectItem>
              </SelectContent>
            </Select>
          </FormControl>
          <FormControl>
            <Label>Security Level</Label>
            <Select className="w-full">
              <SelectTrigger />
              <SelectContent>
                <SelectItem value="severity-1">Severity 1</SelectItem>
                <SelectItem value="severity-2">Severity 2</SelectItem>
                <SelectItem value="severity-3">Severity 3</SelectItem>
                <SelectItem value="severity-4">Severity 4</SelectItem>
              </SelectContent>
            </Select>
          </FormControl>
        </div>
        <FormControl>
          <Label>Subject</Label>
          <Input placeholder="i need help with ..." />
        </FormControl>
        <FormControl>
          <Label>Description</Label>
          <Textarea placeholder="Please include all information"></Textarea>
        </FormControl>
      </CardBody>
      <CardFooter className="d-flex justify-between">
        <Button variant="soft">cancel</Button>
        <Button>submit</Button>
      </CardFooter>
    </Card>
  );
}

export default ReportsCard;
