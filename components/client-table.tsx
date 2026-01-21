"use client";

import { createColumnHelper } from "@tanstack/react-table";
import { DataTable } from "./data-table";
import { User } from "@/lib/data";
import { Checkbox } from "./ui/checkbox";
import DefaultHeader from "./default-header";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { MoreVertical } from "lucide-react";

const columnHelper = createColumnHelper<User>();
const columns = [
  columnHelper.display({
    id: "action",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() || (table.getIsSomeRowsSelected() && "indeterminate")
        }
        onCheckedChange={value => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={value => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  }),

  columnHelper.accessor("firstName", {
    header: info => <DefaultHeader info={info} name="First Name" />,
    cell: info => info.getValue(),
  }),
  columnHelper.accessor("lastName", {
    header: info => <DefaultHeader info={info} name="Last Name" />,
    cell: info => info.getValue(),
  }),
  columnHelper.accessor("email", {
    header: info => <DefaultHeader info={info} name="Email" />,
    cell: info => info.getValue(),
  }),
  columnHelper.accessor("age", {
    header: info => <DefaultHeader info={info} name="Age" />,
    cell: info => info.getValue(),
  }),
  columnHelper.accessor("comments", {
    header: info => <DefaultHeader info={info} name="Comments" />,
    cell: info => info.getValue(),
  }),
  columnHelper.display({
    id: "more",
    cell: ({ row }) => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant={"ghost"}>
              <MoreVertical />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent onCloseAutoFocus={e => e.preventDefault()}>
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="">Copy</DropdownMenuItem>
            <DropdownMenuItem className="">Paste</DropdownMenuItem>
            <DropdownMenuItem className="">Cut</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  }),
];

export default function ClientTable({ data }: { data: User[] }) {
  return <DataTable<User, never> columns={columns} data={data} />;
}
