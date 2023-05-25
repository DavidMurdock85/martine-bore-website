// Define an enum for storage keys to ensure consistent usage
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

// Function to get an array stored in local storage by key
function getLocalStorageArray(key: StorageKey) {
  var result = getLocalStorage(key);
  return result ? result.split(",") : result;
}

// Function to set an array in local storage by key
function setLocalStorageArray(key: StorageKey, values: string[]) {
  setLocalStorage(key, values.join(","));
}

// Function to get a value stored in local storage by key
function getLocalStorage(key: StorageKey) {
  // Check if local storage is available
  if (typeof Storage !== "undefined") {
    return localStorage.getItem(key) || undefined;
  } else {
    return undefined;
  }
}

// Function to set a value in local storage by key
function setLocalStorage(key: StorageKey, value: string) {
  // Check if local storage is available
  if (typeof Storage !== "undefined") {
    localStorage.setItem(key, value);
  }
}

// Function to remove a value from local storage by key
function removeLocalStorage(key: StorageKey) {
  // Check if local storage is available
  if (typeof Storage !== "undefined") {
    localStorage.removeItem(key);
  }
}

// Function to clear all values from local storage
function clearLocalStorage() {
  // Check if local storage is available
  if (typeof Storage !== "undefined") {
    localStorage.clear();
  }
}

// Function to set the cookie consent value in local storage
function giveCookieConsent() {
  // Check if local storage is available
  if (typeof Storage !== "undefined") {
    localStorage.setItem(StorageKey.CookieConsent, "true");
  }
}

// Export all functions and the storage key enum for external use
export {
  StorageKey,
  getLocalStorageArray,
  setLocalStorageArray,
  getLocalStorage,
  setLocalStorage,
  removeLocalStorage,
  clearLocalStorage,
  giveCookieConsent,
};
