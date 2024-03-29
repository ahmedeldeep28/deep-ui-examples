import React, { Fragment, useState } from "react";
import { Button } from "deep-ui-react";
import useDisclosure from "../hooks/useDisclosure";
import ExportsFileModal from "../components/modals/ExportsFileModal";
import ExportedCard from "../components/cards/ExportedCard";

function ExportsPage() {
  const { isOpen, onOpenChange, onOpen } = useDisclosure();
  return (
    <Fragment>
      <ExportsFileModal open={isOpen} onOpenChange={onOpenChange} />
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">View Files Exports</h2>
        <Button onClick={onOpen}>export</Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        <ExportedCard />
        <ExportedCard />
        <ExportedCard />
        <ExportedCard />
        <ExportedCard />
        <ExportedCard />
        <ExportedCard />
      </div>
    </Fragment>
  );
}

export default ExportsPage;
