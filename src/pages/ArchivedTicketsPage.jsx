import React, { Fragment } from "react";
import ArchivedTicketsTable from "../components/tables/ArchivedTicketsTable";

function ArchivedTicketsPage() {
  return (
    <Fragment>
      <div className="flex justify-between items-center mb-3">
        <h6 className="text-2xl font-bold">View Archived Tickets</h6>
      </div>
      <ArchivedTicketsTable />
    </Fragment>
  );
}

export default ArchivedTicketsPage;
