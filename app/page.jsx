import HeaderWrapper from "@/components/HeaderWrapper";
import SnowDayCalculator from "@/components/SnowDayCalculator";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeaderWrapper />
      <SnowDayCalculator />
    </div>
  );
}
