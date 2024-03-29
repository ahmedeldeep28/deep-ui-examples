import {
  Button,
  Combobox,
  Dialog,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  Form,
  FormControl,
  Input,
  Label,
} from "deep-ui-react";
import React from "react";
import { chunks_options } from "../../constants/selectOptions";

function ExportsFileModal({ open, onOpenChange, ...restProps }) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange} {...restProps}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Exports Excel File</DialogTitle>
        </DialogHeader>
        <DialogBody>
          <Form>
            <FormControl>
              <Label>file name</Label>
              <Input placeholder="enter file name" />
            </FormControl>
            <FormControl>
              <Label>Chunk</Label>
              <Combobox options={chunks_options} placeholder="select chunk" />
            </FormControl>
            <FormControl>
              <Label>Date</Label>
              <Input type="date" placeholder="enter file name" />
            </FormControl>
          </Form>
        </DialogBody>
        <DialogFooter>
          <DialogClose asChild>
            <Button color="danger" variant="soft">
              close
            </Button>
          </DialogClose>
          <Button>submit</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default ExportsFileModal;
