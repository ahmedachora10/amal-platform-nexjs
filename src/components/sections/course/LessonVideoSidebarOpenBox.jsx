'use client';

import LessonQuizBox from "@/components/lesson_quiz_box";
import getVideoDuration from "@/utils/getVideoDuration";
import { useState, useEffect } from "react";

/**
 * 
 * @param {{video: import("@/types/static/global").Video, courseId: number}} param0 
 */
export default function LessonVideoSidebarOpenBox({ video, courseId }) {
    const [duration, setDuration] = useState(null);
    useEffect(() => {
        if (video.video) {
            getVideoDuration(video.video).then(duration => {
                setDuration(duration);
            });
        }
    }, []);
    return (
        <LessonQuizBox key={video.id} title={video.name} unitValue={duration?.toFixed(2)} unitName="m" progress={undefined} url={video.video ? `/courses/${courseId}/videos/${video.id}` : ""} />
    )
}