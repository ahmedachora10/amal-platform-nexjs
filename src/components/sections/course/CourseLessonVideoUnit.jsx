'use client';
import React, { useState, useEffect } from "react";
import CourseLessonUnit from "./CourseLessonUnit";
import getVideoDuration from "@/utils/getVideoDuration";

/**
 * 
 * @param {{video: import("@/types/static/global").Video, courseId: number, onDuration: (duration: number) => void}} param0 
 * @returns 
 */
export default function CourseLessonVideoUnit({ video, courseId, onDuration = (duration) => { } }) {
    const [unitValue, setUnitValue] = useState(0);

    useEffect(() => {
        if (video.video) {
            getVideoDuration(video.video).then(duration => {
                setUnitValue(duration);
                onDuration(duration);
            });
        }
    }, []);

    return (
        <React.Fragment>
            <CourseLessonUnit name={video.name} icon="file" icon2={video.isFree ? "none" : "time"} unit={video.isFree ? null : video.video ? (unitValue / 60).toFixed(2) || null : null} unitName={video.isFree ? "preview" : unitValue ? "min" : ""} url={video.isFree ? `/courses/${courseId}/videos/${video.id}` : ""} />
            <hr />
        </React.Fragment>
    )
}