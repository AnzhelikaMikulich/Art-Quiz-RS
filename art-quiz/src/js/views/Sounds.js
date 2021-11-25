const audio = document.querySelectorAll('audio');
export default class Sound {
  win() {
      audio[ 4 ].volume = setting.volumeOn ? setting.volume / 100 : 0;
      audio[ 4 ].play();
  }
  lose() {
      audio[ 3 ].volume = setting.volumeOn ? setting.volume / 100 : 0;
      audio[ 3 ].play();
  }
  bonk() {
      audio[ 0 ].volume = setting.volumeOn ? setting.volume / 100 : 0;
      audio[ 0 ].play();
  }
  bonk2() {
      audio[ 1 ].volume = setting.volumeOn ? setting.volume / 100 : 0;
      audio[ 1 ].play();
  }
}

const sound = new Sound();