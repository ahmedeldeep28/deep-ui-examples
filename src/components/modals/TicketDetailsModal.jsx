import React from "react";
import {
  Dialog,
  DialogBody,
  DialogContent,
  Divider,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "deep-ui-react";
import TicketDetails from "../shared/TicketDetails";

function TicketDetailsModal(props) {
  return (
    <Dialog className="px-4" {...props}>
      <DialogContent className="max-w-lg md:max-w-3xl">
        <DialogBody className="p-3">
          <Tabs defaultValue={"details"}>
            <TabsList className="mb-2">
              <TabsTrigger value="details">details</TabsTrigger>
              <TabsTrigger value="attachments">attachments</TabsTrigger>
              <TabsTrigger value="chat" disabled>
                chat
              </TabsTrigger>
            </TabsList>
            <Divider />
            <div className="h-[60vh] overflow-auto">
              <TabsContent value="details">
                <TicketDetails />
              </TabsContent>
              <TabsContent value="attachments">
                <div className="flex flex-col gap-3 h-full *:rounded-lg">
                  <img src="/images/img1.jpg" alt="img1" />
                  <img src="/images/img1.jpg" alt="img1" />
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </DialogBody>
      </DialogContent>
    </Dialog>
  );
}

export default TicketDetailsModal;
