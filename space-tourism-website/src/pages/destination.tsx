import { useState } from "react";
import data from "../lib/data.json" with { type: "json" };

import { DestinationDetails } from "../components/destination/destination-details";
import { DestinationTab } from "../components/destination/destination-tab";
import { VideoSource } from "../components/video-source";

export function Destination() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <VideoSource source="/videos/video2.webm" />
      <section className="flex flex-col">
        <h1 className="text-center lg:text-start mb-4 pb-4 text-3xl border-b border-white/10">
          01 <span>Pick Your Destination</span>
        </h1>
        <div className="flex justify-center space-x-12 mb-6" role="tablist">
          {data.destinations.map((tab, index) => (
            <DestinationTab
              key={tab.name}
              name={tab.name}
              isActive={index === activeTab}
              onClick={() => setActiveTab(index)}
            />
          ))}
        </div>
        <div className="lg:flex lg:gap-x-22">
          <DestinationDetails destination={data.destinations[activeTab]} />
        </div>
      </section>
    </>
  );
}
