import type {
  AppID,
  Revision,
  RecordRightForResponse,
  RecordRightForParameter,
} from "@kintone/rest-api-client/lib/src/client/types";

export function getRecordPermissions(app: AppID): Promise<{ rights: RecordRightForResponse[]; revision: string }> {
  return kintone.api(kintone.api.url('/k/v1/record/acl.json', true), 'GET', {
    app,
    lang: 'ja'
  });
}

export function updateRecordPermissions(params: {
    app: AppID;
    rights: RecordRightForParameter[];
    revision?: Revision;
}): Promise<{ revision: string }> {
  return kintone.api(kintone.api.url('/k/v1/record/acl.json', true), 'PUT', params);
}
