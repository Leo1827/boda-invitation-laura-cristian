import Hero from "@/components/sections/Hero";
import Countdown from "@/components/sections/Countdown";
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
      <Location />
      <Hotels />
      <DressCode />
      <NoGifts />
      <Confirmation />
    </main>
  );
}