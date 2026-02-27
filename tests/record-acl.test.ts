import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

const mockUrl = vi.fn().mockReturnValue('/k/v1/record/acl.json');
const mockKintoneApi = vi.fn() as ReturnType<typeof vi.fn> & { url: ReturnType<typeof vi.fn> };
mockKintoneApi.url = mockUrl;

import { getRecordPermissions, updateRecordPermissions } from '../src/record-acl';

describe('getRecordPermissions', () => {
  beforeEach(() => {
    vi.stubGlobal('kintone', { api: mockKintoneApi });
    mockKintoneApi.mockClear();
    mockKintoneApi.mockResolvedValue({ rights: [], revision: '1' });
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('GETメソッドでレコードACLを取得する', async () => {
    const result = await getRecordPermissions(1);
    expect(mockKintoneApi).toHaveBeenCalledWith('/k/v1/record/acl.json', 'GET', { app: 1, lang: 'ja' });
    expect(result).toEqual({ rights: [], revision: '1' });
  });
});

describe('updateRecordPermissions', () => {
  beforeEach(() => {
    vi.stubGlobal('kintone', { api: mockKintoneApi });
    mockKintoneApi.mockClear();
    mockKintoneApi.mockResolvedValue({ revision: '2' });
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('PUTメソッドでレコードACLを更新する', async () => {
    const params = { app: 1, rights: [] };
    const result = await updateRecordPermissions(params);
    expect(mockKintoneApi).toHaveBeenCalledWith('/k/v1/record/acl.json', 'PUT', params);
    expect(result).toEqual({ revision: '2' });
  });
});
