import "videojs-contrib-ads";
import * as ima from "videojs-ima";
const google = (window as any).google;

export default class VjsIma extends ima.ImaPlugin {
  constructor(player: any, options: any) {
    super(player, options);
  }
}
