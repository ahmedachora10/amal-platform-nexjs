"use client";
import getVideoDuration from "@/utils/getVideoDuration";
import React, { useEffect, useState } from "react";
import CourseLessonUnit from "./CourseLessonUnit";

/**
 *
 * @param {{video: import("@/types/static/global").Video, courseId: number, onDuration: (duration: number) => void}} param0
 * @returns
 */
export default function CourseLessonVideoUnit({
  isSubscribed,
  video,
  courseId,
  onDuration = (duration) => {},
}) {
  const [unitValue, setUnitValue] = useState(0);
  const isAva = video?.isFree || isSubscribed;

  useEffect(() => {
    if (video.video) {
      getVideoDuration(video.video).then((duration) => {
        setUnitValue(duration);
        onDuration(duration);
      });
    }
  }, []);

  return (
    <React.Fragment>
      <CourseLessonUnit
        name={video.name}
        icon="file"
        icon2={isAva ? "none" : "time"}
        unit={
          isAva
            ? null
            : video.video
            ? (unitValue / 60).toFixed(2) || null
            : null
        }
        unitName={isAva ? "preview" : <>{unitValue ? "min" : ""}</>}
        url={isAva ? `/courses/${courseId}/videos/${video?.id}` : ""}
      />
      <hr />
    </React.Fragment>
  );
}
