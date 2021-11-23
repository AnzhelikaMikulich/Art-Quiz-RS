export default function settings() {
  const volumeStop = document.querySelector(".volume-stop"),
  homeScreen = document.querySelector('#home'),
  settingsOff = document.querySelector('.settings-off'),
  settings = document.querySelector('#settings'),
    checkTime = document.querySelector("#check-time"),
    progressVolume = document.querySelector(".progress-volume"),
    timeValue = document.querySelector(".timer-number"),
    btnSave = document.querySelector(".btn-save"),
    btnDefault = document.querySelector(".btn-default");

  progressVolume.addEventListener("input", function () {
    const value = this.value;
    this.style.background = `linear-gradient( to right, #ffbca2 0%, #ffbca2 ${value}%, #fff ${value}%, #fff 100% )`;
  });

  let myStorage = window.localStorage;

  volumeStop.addEventListener("click", (event) => {
    if ((progressVolume.disabled = true)) {
      progressVolume.disabled = false;
      myStorage.setItem("volumeOn", "checked");
    } else {
      progressVolume.disabled = true;
      myStorage.setItem("volumeOn", "unchecked");
    }
  });

  checkTime.addEventListener("click", (event) => {
    if (event.target.checked) {
      myStorage.setItem("timeOn", "checked");
    } else {
      myStorage.setItem("timeOn", "unchecked");
    }
  });

  function setLocalStorage() {
    localStorage.setItem("volume", progressVolume.value);
    localStorage.setItem("time", timeValue.value);
  }
  window.addEventListener("beforeunload", setLocalStorage);

  function getLocalStorage() {
    if (localStorage.getItem("time")) {
      timeValue.value = localStorage.getItem("time");
    }

    if (localStorage.getItem("volume")) {
      progressVolume.value = localStorage.getItem("volume");
      progressVolume.style.background = `linear-gradient( to right, #ffbca2 0%, #ffbca2 ${progressVolume.value}%, #fff ${progressVolume.value}%, #fff 100% )`;
      myStorage.setItem("volumeOn", "checked");
    }

    if (localStorage.getItem("timeOn") === "checked") {
      checkTime.checked = true;
    } else {
      checkTime.checked = false;
    }
  }

  window.addEventListener("load", getLocalStorage);
  settingsOff.addEventListener("click", () => {
    settings.classList.toggle("hide");
    homeScreen.classList.toggle("hide");
  })
  
  btnSave.addEventListener("click", () => {
    settings.classList.toggle("hide");
    homeScreen.classList.toggle("hide");
  });

  btnDefault.addEventListener("click", () => {
    progressVolume.value = 0.3;
    progressVolume.style.background = `linear-gradient( to right, #ffbca2 0%, #ffbca2 ${progressVolume.value}%, #fff ${progressVolume.value}%, #fff 100% )`;
    
    volumeStop.checked = false;
    checkTime.checked = false;
    timeValue.value = "10";

    settings.classList.toggle("hide");
    homeScreen.classList.toggle("hide");
  });
}
