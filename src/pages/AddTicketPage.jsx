import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Combobox,
  Form,
  FormControl,
  Input,
  Label,
  Textarea,
} from "deep-ui-react";
import React from "react";
import {
  building_options,
  department_options,
  floor_options,
} from "../constants/selectOptions";
import { Controller, useForm } from "react-hook-form";

function AddTicketPage() {
  const { register, control, handleSubmit } = useForm({
    defaultValues: {
      department: "",
      building: "",
      floor: "",
      phone: "",
      description: "",
    },
  });

  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <Card>
      <CardHeader>
        <CardTitle>Please Enter Ticket Info</CardTitle>
      </CardHeader>
      <CardBody>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-3">
            <FormControl>
              <Label htmlFor="department">Department</Label>
              <Combobox id="department" options={department_options} />
            </FormControl>

            <Controller
              name="building"
              control={control}
              render={({ field }) => (
                <FormControl>
                  <Label htmlFor="building">Building</Label>
                  <Combobox
                    id="building"
                    options={building_options}
                    {...field}
                  />
                </FormControl>
              )}
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <FormControl>
              <Label htmlFor="floor">floor</Label>
              <Combobox id="floor" options={floor_options["building_1"]} />
            </FormControl>
            <FormControl>
              <Label htmlFor="extension">Extension</Label>
              <Input
                id="extension"
                placeholder="enter extension number"
                {...register("extension")}
              />
            </FormControl>
          </div>
          <FormControl>
            <Label htmlFor="phone">phone</Label>
            <Input
              id="phone"
              placeholder="enter phone number"
              {...register("phone")}
            />
          </FormControl>
          <FormControl>
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="enter description"
              {...register("description")}
            />
          </FormControl>
          <Button>add ticket</Button>
        </Form>
      </CardBody>
    </Card>
  );
}

export default AddTicketPage;
