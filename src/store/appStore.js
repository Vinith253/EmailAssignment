import { makeAutoObservable } from "mobx";

class AppStore {
  email = "";
  otp = "";
  selectedSettings = "";
  selectedValues = {}

  constructor() {
    makeAutoObservable(this);
  }

  setEmail(email) {
    this.email = email;
  }

  setOTP(otp) {
    this.otp = otp;
  }

  setSettings(settingsValue) {
    this.selectedSettings = settingsValue;
  }

  setValues(value) {
    this.selectedValues = value;
  }
}

const appStore = new AppStore();
export default appStore;