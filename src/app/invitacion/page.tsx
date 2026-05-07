import Hero from "@/components/sections/Hero";
import Countdown from "@/components/sections/Countdown";
import Calendar from "@/components/sections/Calendar";
import Location from "@/components/sections/Location";
import DressCode from "@/components/sections/Dresscode";
import Hotels from "@/components/sections/Hotels";
import NoGifts from "@/components/sections/NoGifts";
import Confirmation from "@/components/sections/Confirmation";
import Message from "@/components/sections/Message";

export default function Invitacion() {
  return (
    <main>
      <Hero />
      <Message />
      <Countdown />
      <Calendar />
      <Location />
      <Hotels />
      <DressCode />
      <NoGifts />
      <Confirmation />
    </main>
  );
}