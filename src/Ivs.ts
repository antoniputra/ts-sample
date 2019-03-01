// import video from './video';
import video from "video.js";
import VjsIma from "./VjsIma";
// import * as ima from "videojs-ima";
// let ima = require('videojs-ima/dist/videojs.ima');
// video.registerPlugin(ima.name, ima.init);

const google = ( window as any).google;

console.log(VjsIma);

export default class Ivs extends video.getComponent("player") {
  public elVideo: HTMLElement;
  private ima : any;

  constructor(elem: HTMLElement) {
    super(elem as any);
    this.elVideo = elem;
  }

  myConsole(text: any) {
    // console.log('myConsole: ', text)
  }

  createPlayer(srcVideo: string, vttUrl: string, adTagUrl: string): any {
    let player = this;
    player.src(srcVideo);
    player.addRemoteTextTrack({
      kind: 'subtitles',
      srclang: 'en',
      label: 'Indonesia',
      src: vttUrl
    }, true);
    player.muted(false);
    player.autoplay(false);

    this.myConsole('hi, this just sample func from console');

    player.ima = new VjsIma(player, {
      id: this.elVideo,
      adTagUrl: adTagUrl,
    });

    return player;
  }
}