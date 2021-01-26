export class LJGuard {
  static checkHostName() {
    const location = window.location;
    return !location.hostname.includes("livejournal");
  }
}
