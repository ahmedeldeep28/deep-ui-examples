import React from "react";
import {
  Badge,
  Button,
  Card,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "deep-ui-react";
import { HiOutlineRefresh } from "react-icons/hi";

function ArchivedTicketsTable() {
  return (
    <Card>
      <div className="p-3 flex justify-between items-center">
        <p className="text-lg capitalize font-medium">total 14 tickets</p>
        <Select defaultValue="10">
          <SelectTrigger className="w-24" placeholder="select row size" />
          <SelectContent>
            <SelectItem value="10">10</SelectItem>
            <SelectItem value="20">20</SelectItem>
            <SelectItem value="30">30</SelectItem>
            <SelectItem value="40">40</SelectItem>
            <SelectItem value="50">50</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="h-[75vh] overflow-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>#</TableHead>
              <TableHead>User</TableHead>
              <TableHead>Department</TableHead>
              <TableHead>Building</TableHead>
              <TableHead>Floor</TableHead>
              <TableHead>Extension</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16].map((item) => {
              return (
                <TableRow key={item}>
                  <TableCell>152</TableCell>
                  <TableCell>Mohamed Attia</TableCell>
                  <TableCell>It</TableCell>
                  <TableCell>stores</TableCell>
                  <TableCell>El-Hegaz </TableCell>
                  <TableCell>6000</TableCell>
                  <TableCell>
                    <Badge color="success" variant="soft" size="sm">
                      complete
                    </Badge>
                  </TableCell>
                  <TableCell>1/21/2024 1:04 AM</TableCell>
                  <TableCell>
                    <Button isIconOnly size="sm" color="success" variant="soft">
                      <HiOutlineRefresh />
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
}

export default ArchivedTicketsTable;
