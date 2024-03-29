import React from "react";

function TicketDetails() {
  return (
    <div className="h-full">
      <ul className="flex flex-col space-y-4 my-3.5">
        <li className="flex gap-1.5">
          <strong className="capitalize">user:</strong>
          <span>Mohamed Attia</span>
        </li>
        <li className="flex gap-1.5">
          <strong className="capitalize">department:</strong>
          <span>It</span>
        </li>
        <li className="flex gap-1.5">
          <strong className="capitalize">building:</strong>
          <span>stores</span>
        </li>
        <li className="flex gap-1.5">
          <strong className="capitalize">floor:</strong>
          <span>El-Hegaz</span>
        </li>
        <li className="flex gap-1.5">
          <strong className="capitalize">phone:</strong>
          <span>+201551734799</span>
        </li>
        <li className="flex gap-1.5">
          <strong className="capitalize">extension:</strong>
          <span>6000</span>
        </li>
        <li className="flex gap-1.5">
          <strong className="capitalize">date:</strong>
          <span>1/21/2024 1:04 AM</span>
        </li>
        <li className="flex gap-1.5">
          <strong className="capitalize">talks:</strong>
          <span>je</span>
        </li>
        <li className="flex gap-1.5">
          <strong className="capitalize">issue type:</strong>
          <span>Hmis App</span>
        </li>
      </ul>
      <div className="bg-muted rounded-md p-2 mb-3">
        <h6 className="text-base capitalize mb-2 font-medium">description</h6>
        <p>ssssssssss</p>
      </div>
    </div>
  );
}

export default TicketDetails;
