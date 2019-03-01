import video from 'video.js';

const Plugin = video.getPlugin('plugin');

export default class VjsExamplePlugin extends Plugin {

  constructor(player: any) {
    super(player);

    player.on('playing', function () {
      video.log('Hi Plugin: I am triggered when video PLAYING');
    });

    player.on('pause', function () {
      video.log('Hi Plugin: I am triggered when video PAUSE');
    });

    const overlay = document.createElement('p');
    overlay.className = 'vjs-overlay';
    overlay.innerHTML = "Hi I am plugin developer now";
    overlay.setAttribute('style', 'position: relative; text-align: center;');
    player.el().appendChild(overlay);
  }
}