import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardText,
  CardTitle,
  FormControl,
  Input,
  Label,
  RadioCard,
  RadioGroup,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  toast,
} from "deep-ui-react";

import React from "react";

function PaymentMethodCard({ ...props }) {
  return (
    <Card {...props}>
      <CardHeader>
        <CardTitle>Payment Method</CardTitle>
        <CardText>Add a new payment method to your account.</CardText>
      </CardHeader>
      <CardBody>
        <FormControl>
          <RadioGroup orientation="horizontal" onChange={(value) => console.log(value)}>
            <RadioCard value="card">card</RadioCard>
            <RadioCard value="paypal">paypal</RadioCard>
            <RadioCard value="apple">apple</RadioCard>
          </RadioGroup>
        </FormControl>
        <FormControl>
          <Label htmlFor="name">name</Label>
          <Input id="name" placeholder="enter full name" />
        </FormControl>
        <FormControl>
          <Label htmlFor="card-number">card number</Label>
          <Input id="card-number" placeholder="enter card number" />
        </FormControl>
        <div className="grid grid-cols-3 gap-3">
          <FormControl>
            <Label>expires</Label>
            <Select>
              <SelectTrigger />
              <SelectContent>
                <SelectItem value="1">January</SelectItem>
                <SelectItem value="2">February</SelectItem>
                <SelectItem value="3">March</SelectItem>
                <SelectItem value="4">April</SelectItem>
                <SelectItem value="5">May</SelectItem>
                <SelectItem value="6">June</SelectItem>
                <SelectItem value="7">July</SelectItem>
                <SelectItem value="8">August</SelectItem>
                <SelectItem value="9">September</SelectItem>
                <SelectItem value="10">October</SelectItem>
                <SelectItem value="11">November</SelectItem>
                <SelectItem value="12">December</SelectItem>
              </SelectContent>
            </Select>
          </FormControl>
          <FormControl>
            <Label>Year</Label>
            <Select>
              <SelectTrigger />
              <SelectContent>
                {Array.from({ length: 10 }, (_, i) => (
                  <SelectItem key={i} value={`${new Date().getFullYear() + i}`}>
                    {new Date().getFullYear() + i}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormControl>
          <FormControl>
            <Label>CVA</Label>
            <Input placeholder="CVA" />
          </FormControl>
        </div>
        <Button
          className="block w-full"
          onClick={() => {
            toast.error("Scheduled: Catch up");
          }}
        >
          continue
        </Button>
      </CardBody>
    </Card>
  );
}

export default PaymentMethodCard;
