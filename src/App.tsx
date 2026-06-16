import Hero from "./components/sections/Hero";
import Destiny from "./components/sections/Destiny";
import CoupleIntro from "./components/sections/CoupleIntro";
import Families from "./components/sections/Families";
import Story from "./components/sections/Story";
import BlessingReveal from "./components/sections/Blessing";
import InvitationReveal from "./components/sections/Invitation";
import SmoothScroll from "./components/common/SmoothScroll";
import WeddingCountdown from "./components/sections/Countdown";
import EventsTimeline from "./components/sections/Events";
import Finale from "./components/sections/Finale";
import Gallery from "./components/sections/Gallery";
import Venue from "./components/sections/Venue";
import { useMemo, useState } from "react";
import WeddingLoader from "./components/common/WeddingLoader";
import MusicPlayer from "./components/common/MusicPlayer";

function App() {
  
  const guestName = useMemo(() => {
    const params = new URLSearchParams(
      window.location.search
    );

    return params.get("guest");
  }, []);
  const [loading, setLoading] =
  useState(true);

  return (
    <>
      {loading && (
        <WeddingLoader
          guestName={guestName}
          onComplete={() => setLoading(false)
          }
        />
      )}

      {!loading && (
        <>
          <MusicPlayer />
          <SmoothScroll />
          <Hero />
          <Destiny />
          <CoupleIntro />
          <Families />
          <Story />
          <BlessingReveal />
          <InvitationReveal />
          <EventsTimeline />
          <WeddingCountdown />
          <Venue />
          <Gallery />
          <Finale />
        </>
      )}
    </>
  );
}

export default App;