import Image from "next/image";
import {HeroSection} from "./HeroSection/Page"
export default function Home() {
  return (
    <main suppressHydrationWarning={true}>
      <HeroSection/>
   </main>
  );
}
