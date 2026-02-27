import type { Entity } from "@kintone/rest-api-client/lib/src/client/types/entity";

export function isLoginUser(entity: Entity | {
  type: "FIELD_ENTITY";
  code: string;
}) {
  const { code } = kintone.getLoginUser();
  return entity.type === 'USER' && entity.code === code;
}

/**
 * 現在のログインユーザーがkintoneのシステム管理者であるかどうかを判定します。
 * @returns {Promise<boolean>} システム管理者である場合はtrue、そうでない場合はfalseを返します。
 */
export async function isSystemAdmin(): Promise<boolean> {
  const { administration } = await kintone.system.getPermissions();
  return administration;
}
