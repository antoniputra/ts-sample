import videojs from "video.js";
import VjsIma from "./VjsIma";
import VjsExamplePlugin from "./plugins/VjsExamplePlugin";
import hlsQualitySelector from "videojs-hls-quality-selector";

let video: typeof videojs;
video = videojs;

// [Info] Use this line to conditionally import
//
// if(process.env.NODE_ENV === 'testing') {
//   // video = require('video.js').default; // it works too
//   video = require('video.js/dist/video.cjs.js');
// }


// Register the plugin

// 1. Hls Quality Plugin
video.registerPlugin("hlsQualitySelector", hlsQualitySelector);

// 2. Ima Plugin
video.registerPlugin("ima", VjsIma as any);

// 3. My Custom Plugin
video.registerPlugin("examplePlugin", VjsExamplePlugin as any);

export default video;
