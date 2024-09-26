import React, { useEffect } from "react";
import VideoJS from "./VideoJS";
import videojs from "video.js";
import { useParams } from "react-router-dom";
import axios from "axios";
import { StyledVideo } from "./styled";
import { MdAccessTimeFilled } from "react-icons/md";
import { FaPlay, FaStar } from "react-icons/fa";
import { BiSolidDollarCircle } from "react-icons/bi";
export const VideoGlobal = ({ dataVideo }: any) => {
  const playerRef = React.useRef(null);

  const videoJsOptions = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    playbackRates: [0.5, 1, 1.5, 2],
    sources: [
      {
        src: `${process.env.REACT_APP_PORT}/streamVideo/${dataVideo?.id}`,
        type: "video/mp4",
      },
    ],
  };
  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on("waiting", () => {
      videojs.log("player is waiting");
    });

    player.on("dispose", () => {
      videojs.log("player will dispose");
    });
  };
  return (
    <StyledVideo>
      <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />;
      <div className="wrapper">
        <div className="title">{dataVideo?.title}</div>
        <div className="box-des">
          <div className="des-child">
            <ul>
              This class is a fun and approachable explorantion of hand-coding
              your first website:
              <li>Writing and structuring content with HTML</li>
              <li>Writing and structuring content with HTML</li>
            </ul>
          </div>
        </div>
      </div>
    </StyledVideo>
  );
};
