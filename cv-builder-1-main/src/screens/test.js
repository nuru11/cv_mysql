import React from "react"
import ReactPlayer from "react-player"
import video from "../video/video.mp4"


function Player() {
    return (
        <div>
            <div>Video Player</div>

            <ReactPlayer controls={true} url={video} height={300} width={300} />
        </div>
    )
}



export default Player