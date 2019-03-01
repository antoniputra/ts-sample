import Calculator from "./Calculator";
import Ivs from "./Ivs";
import "video.js/dist/video-js.css";
import "videojs-contrib-ads/dist/videojs.ads.css";


// Calculator stuff
const elem = document.createElement("div");
elem.id = 'video1';
const calc = new Calculator(elem);
calc.fillElem('Hi Mas Antoni prend');
document.querySelector('body').appendChild(calc.elem);


// Videojs stuff
const elVideo = document.getElementById('video1');
const ivs = new Ivs(elVideo);
ivs.createPlayer(
  'https://lamberta.github.io/html5-animation/examples/ch04/assets/movieclip.webm',
  'https://assets-ivstream.ivideosmart.com/3000348/211872/3000348-211872.en.vtt',
  'https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/single_ad_samples&ciu_szs=300x250&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&cust_params=deployment%3Ddevsite%26sample_ct%3Dskippablelinear&correlator='
);
