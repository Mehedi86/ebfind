import Image from "next/image";
import Banner from "@/components/header/banner/Banner";
import Requests from "@/components/contents/Requests";
import WhyDonate from "@/components/contents/WhyDonate";
import BoxSpinner from "@/components/animation/boxSpinner";

export default function Home() {
  return (
    <div className="pt-16 md:pt-20 relative">
      <Banner />
      <Requests/>
      <WhyDonate />
      <BoxSpinner position="top-10 right-20"/>
      <BoxSpinner position="top-120 left-20"/>
    </div>
  );
}
