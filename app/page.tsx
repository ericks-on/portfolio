import Image from "next/image";
import HomeSummary from "./ui/home/home_summary";

export default function Home() {
  return (
    <div >
      {/* landing */}
      <div className="flex flex-col-reverse justify-end md:flex-row pt-20 h-screen w-screen gap-4">
        <HomeSummary />
        <Image 
        className="h-1/2 w-full md:h-full md:w-2/5"
          src="/images/erick_pic.png"
          alt="person"
          width={1365}
          height={2048}
        />
      </div>
      
    </div>
  );
}
