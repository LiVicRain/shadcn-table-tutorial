import ClientTable from "@/components/client-table";
import { data } from "@/lib/data";

export default function Home() {
  return (
    <div className="w-full h-full flex-col justify-center items-center p-10 gap-4">
      <ClientTable data={data} />
    </div>
  );
}
