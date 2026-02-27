import type {
  Notification as NotificationClass,
  isLoginUser as isLoginUserFunc,
  getRecordPermissions as getRecordPermissionsFunc,
  updateRecordPermissions as updateRecordPermissionsFunc,
  isSystemAdmin as isSystemAdminFunc,
} from './shared';

// Interface for platform-specific implementations
export interface KintonePlatformApi {
  hideOptionsButton(): Promise<void>;
  showOptionsButton(): Promise<void>;
  hideFilterButton(): Promise<void>;
  showFilterButton(): Promise<void>;
  hideAddRecordButton(): Promise<void>;
  showAddRecordButton(): Promise<void>;
  hideEditRecordButton(): Promise<void>;
  showEditRecordButton(): Promise<void>;
  getLoginUser(): kintone.LoginUser;
  hideDescription?(): Promise<void>;
  showDescription?(): Promise<void>;
  hideReportButton?(): Promise<void>;
  showReportButton?(): Promise<void>;
  hideAppSettingsButton?(): Promise<void>;
  showAppSettingsButton?(): Promise<void>;
  hideViewAndReportSelector(): Promise<void>;
  showViewAndReportSelector(): Promise<void>;
  getCurrentAppId(): number | null;
  showLoading(): Promise<void>;
  hideLoading(): Promise<void>;
  setFieldShown(fieldCode: string, isShow: boolean): void;
}

// The complete API interface exposed to the application
export interface KintoneApi extends KintonePlatformApi {
  // Shared properties
  Notification: typeof NotificationClass;
  isLoginUser: typeof isLoginUserFunc;
  getRecordPermissions: typeof getRecordPermissionsFunc;
  updateRecordPermissions: typeof updateRecordPermissionsFunc;
  isSystemAdmin: typeof isSystemAdminFunc;
}
