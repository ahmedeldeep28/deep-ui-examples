import React, { Fragment } from "react";
import TicketsReceivedTable from "./../components/tables/TicketsReceivedTable";

function TicketsReceivedPage() {
  return (
    <Fragment>
      <div className="flex justify-between items-center mb-3">
        <h6 className="text-2xl font-bold">View Received Tickets</h6>
      </div>
      <TicketsReceivedTable />
    </Fragment>
  );
}

export default TicketsReceivedPage;
