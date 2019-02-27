// import video from './video';
import video from "video.js";

export default class Ivs extends video.getComponent("player") {
  public elVideo: HTMLElement;

  constructor(elem: HTMLElement) {
    super(elem as any);
    this.elVideo = elem;
  }

  myConsole(text: any) {
    console.log('myConsole: ', text)
  }

  createPlayer(srcVideo: string, vttUrl: string, adTagUrl: string): void {
    let player = this;
    player.src(srcVideo);
    player.src(srcVideo);
    player.addRemoteTextTrack({
      kind: 'subtitles',
      srclang: 'en',
      label: 'English',
      src: vttUrl
    }, true);
    player.muted(false);
    player.autoplay(false);

    this.myConsole('player');

    // console.log(player.getPlugins())

    // player.ima(new ima.ImaPlugin(player, {
    //   id: elVideoId,
    //   adTagUrl: adTagUrl,
    // }));
  }
}