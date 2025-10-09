function openFullscreen() {
    if ($video.requestFullscreen) {
        $video.requestFullscreen();
    } else if ($video.webkitRequestFullscreen) { /* Safari */
        $video.webkitRequestFullscreen();
    } else if ($video.msRequestFullscreen) { /* IE11 */
        $video.msRequestFullscreen();
    }
}
