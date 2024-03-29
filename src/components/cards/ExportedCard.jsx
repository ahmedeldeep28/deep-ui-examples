import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Tooltip,
  TooltipProvider,
} from "deep-ui-react";
import { HiDownload } from "react-icons/hi";

function ExportedCard() {
  return (
    <Card className="hover:bg-success/10">
      <CardBody>
        <img
          className="w-20 mb-2 m-auto"
          src="/images/xls.png"
          alt="xls logo"
        />
        <h6 className="text-lg font-medium text-center line-clamp-1">
          tickets from 2023-12-01 to 2024-01-01
        </h6>
      </CardBody>
      <CardFooter className="flex justify-between items-center">
        <p className="text-muted-foreground">1/10/2024 3:43 PM</p>
        <TooltipProvider>
          <Tooltip content="download">
            <Button size="sm" rounded="full" variant="soft" isIconOnly>
              <HiDownload />
            </Button>
          </Tooltip>
        </TooltipProvider>
      </CardFooter>
    </Card>
  );
}

export default ExportedCard;
