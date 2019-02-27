import videojs from "video.js";
// import hlsQualitySelector from "videojs-hls-quality-selector";

let video: typeof videojs;
video = videojs;
if(process.env.NODE_ENV === 'testing') {
  // video = require('video.js').default; // it works too
  video = require('video.js/dist/video.cjs.js');
}

// Register the plugin
// video.registerPlugin("hlsQualitySelector", hlsQualitySelector);
// hlsQualitySelector();

export default video;