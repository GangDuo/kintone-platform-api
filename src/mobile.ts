import type { KintonePlatformApi } from './types';

export const mobileApi: KintonePlatformApi = {
  hideOptionsButton: () => kintone.mobile.app.showOptionsButton('HIDDEN'),
  showOptionsButton: () => kintone.mobile.app.showOptionsButton('VISIBLE'),
  hideFilterButton: () => kintone.mobile.app.showFilterButton('HIDDEN'),
  showFilterButton: () => kintone.mobile.app.showFilterButton('VISIBLE'),
  hideAddRecordButton: () => kintone.mobile.app.showAddRecordButton('HIDDEN'),
  showAddRecordButton: () => kintone.mobile.app.showAddRecordButton('VISIBLE'),
  hideEditRecordButton: () => kintone.mobile.app.record.showEditRecordButton('HIDDEN'),
  showEditRecordButton: () => kintone.mobile.app.record.showEditRecordButton('VISIBLE'),
  getLoginUser: () => kintone.getLoginUser(),
  hideViewAndReportSelector: async () => {
    await Promise.allSettled([
      kintone.mobile.app.showViewSelector('HIDDEN'),
      kintone.mobile.app.showReportSelector('HIDDEN')
    ])
  },
  showViewAndReportSelector: async () => {
    await Promise.allSettled([
      kintone.mobile.app.showViewSelector('VISIBLE'),
      kintone.mobile.app.showReportSelector('VISIBLE')
    ])
  },
  getCurrentAppId: () => kintone.mobile.app.getId(),
  showLoading: () => kintone.showLoading('VISIBLE'),
  hideLoading: () => kintone.showLoading('HIDDEN'),
  setFieldShown: (fieldCode, isShow) => kintone.mobile.app.record.setFieldShown(fieldCode, isShow),
  // show/hideDescription はモバイル版APIに存在しないため、ここでは実装しません。(インターフェースでオプショナルになっています)
  // show/hideReportButton はモバイル版APIに存在しないため、ここでは実装しません。(インターフェースでオプショナルになっています)
  // show/hideAppSettingsButton はモバイル版APIに存在しないため、ここでは実装しません。(インターフェースでオプショナルになっています)
};
