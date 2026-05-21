import Preloader from "@/components/sections/Preloader";
import Hero from "@/components/sections/Hero";
import Countdown from "@/components/sections/Countdown";
import Calendar from "@/components/sections/Calendar";
import Location from "@/components/sections/Location";
import DressCode from "@/components/sections/Dresscode";
import NoGifts from "@/components/sections/NoGifts";
import Confirmation from "@/components/sections/Confirmation";
import Message from "@/components/sections/Message";
import ImageParallax from "@/components/sections/ImageParallax";

export default function Invitacion() {
  return (
    <main>
      <Preloader />
      <Hero />
      <Message />
      <Countdown />
      <Calendar />
      <ImageParallax />
      <Location />
      <DressCode />
      <NoGifts />
      <Confirmation />
    </main>
  );
}