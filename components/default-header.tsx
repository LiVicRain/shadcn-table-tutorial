import { User } from "@/lib/data";
import { HeaderContext } from "@tanstack/react-table";
import { ArrowDownAZ, ArrowUpAZ } from "lucide-react";

interface DefaultHeaderProps<T> {
  info: HeaderContext<User, T>;
  name: string;
}

export default function DefaultHeader<T>({ info, name }: DefaultHeaderProps<T>) {
  const sorted = info.column.getIsSorted();

  return (
    <div
      onClick={e => {
        e.preventDefault();
        info.column.toggleSorting(info.column.getIsSorted() === "asc");
      }}
      className="flex w-full h-full justify-start items-center gap-1"
    >
      {name}
      {sorted === "asc" && <ArrowDownAZ size={20} />}
      {sorted === "desc" && <ArrowUpAZ size={20} />}
    </div>
  );
}
  