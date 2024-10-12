"use client";

import CourseSkeleton from "@/components/ui/skeletons/course";
import dynamic from "next/dynamic";
import "plyr-react/plyr.css";
import React, { Suspense } from "react";

const Plyr = dynamic(() => import("plyr-react"), { ssr: false });

const VideoPlayer = ({ src, poster }) => {
  return (
    <>
      <Suspense fallback={<CourseSkeleton />}>
        <Plyr
          source={{
            type: "video",
            poster,
            sources: [
              {
                src,
                type: "video/mp4",
              },
            ],
          }}
          options
        />
      </Suspense>
    </>
  );
};

export default VideoPlayer;
