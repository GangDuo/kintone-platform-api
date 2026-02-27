export class Notification {
  static error(message: string) { return kintone.showNotification('ERROR', message); }
  static success(message: string) { return kintone.showNotification('SUCCESS', message); }
  static info(message: string) { return kintone.showNotification('INFO', message); }
}
