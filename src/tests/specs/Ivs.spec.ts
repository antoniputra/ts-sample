import Ivs from '../../Ivs';
import * as chai from 'chai';
import * as sinon from 'sinon';
import videojs from 'video.js';

chai.use(require('chai-dom'));
// let should = chai.should();
// let assert = chai.assert;
let expect = chai.expect;


describe('Ivs class', () => {

  let ivs: Ivs;

  beforeEach(() => {
    const elem = document.createElement("video");
    elem.id = 'video1';
    ivs = new Ivs(elem);

    this.spy_myConsole = sinon.spy(ivs, 'myConsole');
    this.spy_src = sinon.spy(ivs, 'src');
    this.spy_addRemoteTextTrack = sinon.spy(ivs, 'addRemoteTextTrack');
    this.spy_muted = sinon.spy(ivs, 'muted');
  });

  // afterEach(() => {
    
  // })

  it('Test createPlayer method', () => {
    // 2. Act
    const videoUrl = 'https://lamberta.github.io/html5-animation/examples/ch04/assets/movieclip.webm';
    const videoSub = 'https://assets-ivstream.ivideosmart.com/3000348/211872/3000348-211872.en.vtt';
    const videoAd = 'http://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/ad_rule_samples&ciu_szs=300x250&ad_rule=1&impl=s&gdfp_req=1&env=vp&output=xml_vmap1&unviewed_position_start=1&cust_params=sample_ar%3Dpremidpostpod%26deployment%3Dgmf-js&cmsid=496&vid=short_onecue&correlator=';
    const player = ivs.createPlayer(
      videoUrl,
      videoSub,
      videoAd
    );
      
    // 3. Assert
    const textTracks = player.remoteTextTracks();
    expect(player instanceof videojs.getComponent('player')).to.equal(true);
    expect(player.elVideo instanceof HTMLElement).to.be.true;
    expect(this.spy_myConsole.calledOnce).to.be.true; // remove later
    expect(this.spy_src.calledOnce).to.be.true;
    expect(this.spy_addRemoteTextTrack.calledOnce).to.be.true;
    expect(this.spy_muted.calledOnce).to.be.true;

    expect(player.src()).to.equal(videoUrl);
    expect(textTracks[0].src).to.equal(videoSub);
    expect(textTracks[0].src).to.equal(videoSub);
    expect(textTracks[0].label).to.equal('Indonesia');
  });
});