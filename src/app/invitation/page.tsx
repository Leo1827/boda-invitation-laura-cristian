import Countdown from "@/components/sections/Countdown";
import Location from "@/components/sections/Location";
import DressCode from "@/components/sections/Dresscode";
import Hotels from "@/components/sections/Hotels";
import NoGifts from "@/components/sections/NoGifts";
import Confirmation from "@/components/sections/Confirmation";

export default function Invitacion() {
  return (
    <main className="space-y-10 p-5">
      <Countdown />
      <Location />
      <Hotels />
      <DressCode />
      <NoGifts />
      <Confirmation />
    </main>
  );
}