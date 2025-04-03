import { useState } from "react";
import { CrewDetails } from "../components/crew/crew-details";
import { CrewTab } from "../components/crew/crew-tab";
import { Seo } from "../components/seo";
import { VideoSource } from "../components/video-source";
import data from "../lib/data.json" with { type: "json" };

export function Crew() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <Seo title="Space Tourism - Crew" description="Meet your crew" />
      <VideoSource source="/videos/video1.webm" />
      <section> 
        <h1 className="text-center lg:text-start mb-4 pb-4 text-3xl border-b border-white/10">
          02 <span>Meet your crew</span>
        </h1>
        <div className="flex justify-center  lg:justify-start  lg:w-md gap-x-5 mb-6" role="tablist">
          {data.crew.map((tab, index) => (
            <CrewTab
              key={tab.name}
              isActive={index === activeTab}
              onClick={() => setActiveTab(index)}
            />
          ))}
        </div>
        <div className="lg:flex lg:gap-x-22">
          <CrewDetails crew={data.crew[activeTab]} />
        </div>
      </section>
    </>
  );
}
