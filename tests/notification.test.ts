import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

const mockShowNotification = vi.fn();

import { Notification } from '../src/notification';

describe('Notification', () => {
  beforeEach(() => {
    vi.stubGlobal('kintone', { showNotification: mockShowNotification });
    mockShowNotification.mockClear();
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('error() はERRORタイプで通知を表示する', () => {
    Notification.error('エラーメッセージ');
    expect(mockShowNotification).toHaveBeenCalledWith('ERROR', 'エラーメッセージ');
  });

  it('success() はSUCCESSタイプで通知を表示する', () => {
    Notification.success('成功メッセージ');
    expect(mockShowNotification).toHaveBeenCalledWith('SUCCESS', '成功メッセージ');
  });

  it('info() はINFOタイプで通知を表示する', () => {
    Notification.info('情報メッセージ');
    expect(mockShowNotification).toHaveBeenCalledWith('INFO', '情報メッセージ');
  });
});
