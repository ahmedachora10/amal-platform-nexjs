/**
 * 
 * @param {string} url 
 * @returns {number}
 */
async function getVideoDuration(url) {
    // Create a new video element
    const video = document.createElement('video');

    // Set the video source to the provided URL
    video.src = url;

    // Wait for the video metadata to load
    await new Promise(r => {
        video.onloadedmetadata = () => {
            r(null);
        }
    });

    // Get the video duration in seconds
    const duration = video.duration;

    // Remove the video element to free up resources
    video.remove();

    // Return the video duration
    return duration;
}