import Calculator from "./Calculator";
import Ivs from "./Ivs";
import "video.js/dist/video-js.css";


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
  'http://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/ad_rule_samples&ciu_szs=300x250&ad_rule=1&impl=s&gdfp_req=1&env=vp&output=xml_vmap1&unviewed_position_start=1&cust_params=sample_ar%3Dpremidpostpod%26deployment%3Dgmf-js&cmsid=496&vid=short_onecue&correlator='
);
