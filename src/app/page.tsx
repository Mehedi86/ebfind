import Image from "next/image";
import Banner from "@/components/header/banner/Banner";
import Requests from "@/components/contents/Requests";
import WhyDonate from "@/components/contents/WhyDonate";

export default function Home() {
  return (
    <div className="pt-16 md:pt-20">
      <Banner />
      <Requests/>
      <WhyDonate />
    </div>
  );
}
