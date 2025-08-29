import Homepage from "@/components/homepage";
import Navbar from "@/components/navbar";
import ServiceBarber from "@/components/serviceBarber";


export default function Home() {
  return (
    <div className="w-full relative bg-[#050a05] text-white">
      <Navbar/>
      <Homepage/>
      <ServiceBarber/>
    </div>
  );
}
