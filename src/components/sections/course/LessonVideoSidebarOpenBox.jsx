'use client';

import useAuth from "@/app/_hook/useAuth";
import LessonQuizBox from "@/components/lesson_quiz_box";
import getVideoDuration from "@/utils/getVideoDuration";
import { useState, useEffect } from "react";

/**
 * 
 * @param {{video: import("@/types/static/global").Video, courseId: number}} param0 
 */
export default function LessonVideoSidebarOpenBox({ video, courseId }) {
    const {isStudentSubscripted} = useAuth();
    const [duration, setDuration] = useState(null);
    const isSubsribed = isStudentSubscripted(courseId);

    useEffect(() => {
        if (video.video) {
            getVideoDuration(video.video).then(duration => {
                setDuration(duration / 60);
            });
        }
    }, []);
    return (
        <LessonQuizBox key={video.id} title={video.name} unitValue={duration?.toFixed(2) || 0} unitName="m" progress={undefined} url={isSubsribed && video.video ? `/courses/${courseId}/videos/${video.id}` : ""} />
    )
}