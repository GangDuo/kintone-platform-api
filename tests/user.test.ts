import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

const mockGetLoginUser = vi.fn();
const mockGetPermissions = vi.fn();

import { isLoginUser, isSystemAdmin } from '../src/user';

describe('isLoginUser', () => {
  beforeEach(() => {
    vi.stubGlobal('kintone', {
      getLoginUser: mockGetLoginUser,
      system: { getPermissions: mockGetPermissions },
    });
    mockGetLoginUser.mockReturnValue({ code: 'user001' });
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('entityがUSERタイプかつcodeが一致する場合、trueを返す', () => {
    expect(isLoginUser({ type: 'USER', code: 'user001' })).toBe(true);
  });

  it('entityがUSERタイプだがcodeが異なる場合、falseを返す', () => {
    expect(isLoginUser({ type: 'USER', code: 'other_user' })).toBe(false);
  });

  it('entityがUSER以外のタイプの場合、falseを返す', () => {
    expect(isLoginUser({ type: 'FIELD_ENTITY', code: 'user001' })).toBe(false);
  });
});

describe('isSystemAdmin', () => {
  beforeEach(() => {
    vi.stubGlobal('kintone', {
      getLoginUser: mockGetLoginUser,
      system: { getPermissions: mockGetPermissions },
    });
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('システム管理者の場合、trueを返す', async () => {
    mockGetPermissions.mockResolvedValue({ administration: true });
    expect(await isSystemAdmin()).toBe(true);
  });

  it('システム管理者でない場合、falseを返す', async () => {
    mockGetPermissions.mockResolvedValue({ administration: false });
    expect(await isSystemAdmin()).toBe(false);
  });
});
