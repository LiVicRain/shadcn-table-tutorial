import { User } from "@/lib/data";
import { HeaderContext } from "@tanstack/react-table";
import { ArrowDownAZ, ArrowUpAZ } from "lucide-react";
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuTrigger,
} from "./ui/context-menu";

interface DefaultHeaderProps<T> {
  info: HeaderContext<User, T>;
  name: string;
}

export default function DefaultHeader<T>({ info, name }: DefaultHeaderProps<T>) {
  const sorted = info.column.getIsSorted();
  const { table } = info;

  return (
    <ContextMenu>
      <ContextMenuTrigger
        onPointerDown={e => {
          e.preventDefault();
          if (e.button === 2) return;
          info.column.toggleSorting(info.column.getIsSorted() === "asc");
        }}
        className="flex w-full h-full justify-start items-center gap-1"
      >
        {name}
        {sorted === "asc" && <ArrowDownAZ size={20} />}
        {sorted === "desc" && <ArrowUpAZ size={20} />}
      </ContextMenuTrigger>
      <ContextMenuContent>
        {table
          .getAllColumns()
          .filter(column => column.getCanHide())
          .map(column => (
            <ContextMenuCheckboxItem
              key={column.id}
              className="capitalize"
              checked={column.getIsVisible()}
              onCheckedChange={value => column.toggleVisibility(!!value)}
            >
              {column.id}
            </ContextMenuCheckboxItem>
          ))}
      </ContextMenuContent>
    </ContextMenu>
  );
}
