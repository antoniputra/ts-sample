import video from './video';
import VjsIma from "./VjsIma";
import "videojs-contrib-quality-levels";

// [Info] All Plugin should successfully registered at this point (has be done in ./src/video.ts)
console.log('Hi, List of registered Plugins: ', video.getPlugins());

export default class Ivs extends video.getComponent("player") {
  /**
   * Element of Video
   * 
   * @return HTMLElement
   */
  public elVideo: HTMLElement;

  /**
   * Ima Plugin
   * 
   * @return ima.ImaPlugin
   */
  private ima: any;

  /**
   * ExamplePlugin (Our custom Plugin)
   * 
   * @return VjsExamplePlugin
   */
  private examplePlugin: any;
  // private examplePlugin: VjsExamplePlugin; // we hope can define like this later.

  private qualityLevels: any;

  constructor(elem: HTMLElement) {
    super(elem as any);
    this.elVideo = elem;

    // Configure Hls Plugin
    this.on("loadstart", function (e) {

      console.log('hello prend');
      this.hlsQualitySelector();
      this.qualityLevels = this.qualityLevels();
      this.qualityLevels.on("addqualitylevel", function (event) {
        let qL = event.qualityLevel;

        qL.enabled = true;
        console.log('Hi', qL.height);
      });
    });
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
    player.muted(true);
    player.autoplay(true);

    // Configure Ima Plugin
    player.ima = new VjsIma(player, {
      id: this.elVideo,
      adTagUrl: adTagUrl,
    });

    // [Trigger the Custom Plugin]
    // There are two way to call registered Plugin
    // Consider using "object-dot" (points number 2) is more preferrable.
    // Because by default tslint rules disallow "string-literal"
    // See more: https://palantir.github.io/tslint/rules/no-string-literal

    // 1. Using "string-literal"
    // player['examplePlugin']();

    // 2. Using "object-dot" (preferrable)
    // With this approach you must register property as "any" in your typescript class first
    player.examplePlugin();

    return player;
  }
}