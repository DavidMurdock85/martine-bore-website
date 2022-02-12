enum StorageKey {
  CookieConsent = "user.cookie.consent",
  OAuthToken = "oauth.token",
  OAuthTokenExp = "oauth.token.exp",
  OAuthRefreshToken = "oauth.token.refresh",
  OAuthRefreshTokenExp = "oauth.token.refresh.exp",
  UserId = "user.id",
  VendorId = "vendor.id",
  Event = "anonymous.event",
  User = "anonymous.user",
}

function getLocalStorageArray(key: StorageKey) {
  var result = getLocalStorage(key);
  return result ? result.split(",") : result;
}

function setLocalStorageArray(key: StorageKey, values: string[]) {
  setLocalStorage(key, values.join(","));
}

/*function getLocalStorageInt(key: StorageKey) {
  var page = parseInt(getLocalStorage(key));
  return isNaN(page) ? undefined : page;
}*/

function getLocalStorage(key: StorageKey) {
  if (typeof Storage !== "undefined") {
    return localStorage.getItem(key) || undefined;
  } else {
    return undefined;
  }
}

function setLocalStorage(key: StorageKey, value: string) {
  if (typeof Storage !== "undefined") {
    // if (getLocalStorage(StorageKey.CookieConsent)) {
    localStorage.setItem(key, value);
    // }
  }
}

function removeLocalStorage(key: StorageKey) {
  if (typeof Storage !== "undefined") {
    localStorage.removeItem(key);
  }
}

function clearLocalStorage() {
  if (typeof Storage !== "undefined") {
    localStorage.clear();
  }
}

function giveCookieConsent() {
  if (typeof Storage !== "undefined") {
    localStorage.setItem(StorageKey.CookieConsent, "true");
  }
}

export {
  StorageKey,
  getLocalStorageArray,
  setLocalStorageArray,
  // getLocalStorageInt,
  getLocalStorage,
  setLocalStorage,
  removeLocalStorage,
  clearLocalStorage,
  giveCookieConsent,
};
