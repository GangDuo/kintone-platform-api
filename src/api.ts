import { pcApi } from './pc';
import { mobileApi } from './mobile';
import * as shared from './shared';
import type { KintoneApi, KintonePlatformApi } from './types';

// URLのパスを見てモバイル環境かどうかを判定する簡易的なロジック
// より堅牢な方法は、webpackのDefinePluginなどでビルド時に環境変数を埋め込むことです
const isMobile = location.pathname.startsWith('/k/m/');

const platformApi: KintonePlatformApi = isMobile ? mobileApi : pcApi;

// プラットフォームごとのAPIと共通APIをマージして、一つのAPIオブジェクトとしてエクスポート
const api: KintoneApi = {
  ...shared,
  ...platformApi,
};

export default api;
