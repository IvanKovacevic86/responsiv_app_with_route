import React from "react";
import "./video.css";
import video1 from "../../videos/video1.mp4";
import video2 from "../../videos/video2.mp4";
import video3 from "../../videos/video3.mp4";
import video4 from "../../videos/video4.mp4";
import video5 from "../../videos/video5.mp4";
import video6 from "../../videos/video6.mp4";
import video7 from "../../videos/video7.mp4";
import video8 from "../../videos/video8.mp4";
import video9 from "../../videos/video9.mp4";

const Video = () => {
  return (
    <div className="videoDiv">
      <video
        src={video1}
        muted
        controls
        type="video/mp4"
        className="divVideo"
      ></video>

      <video
        src={video2}
        muted
        controls
        type="video/mp4"
        className="divVideo"
      ></video>

      <video
        src={video3}
        muted
        controls
        type="video/mp4"
        className="divVideo"
      ></video>

      <video
        src={video4}
        muted
        controls
        type="video/mp4"
        className="divVideo"
      ></video>

      <video
        src={video5}
        muted
        controls
        type="video/mp4"
        className="divVideo"
      ></video>

      <video
        src={video6}
        muted
        controls
        type="video/mp4"
        className="divVideo"
      ></video>

      <video
        src={video7}
        muted
        controls
        type="video/mp4"
        className="divVideo"
      ></video>

      <video
        src={video8}
        muted
        controls
        type="video/mp4"
        className="divVideo"
      ></video>

      <video
        src={video9}
        muted
        controls
        type="video/mp4"
        className="divVideo"
      ></video>
    </div>
  );
};

export default Video;
