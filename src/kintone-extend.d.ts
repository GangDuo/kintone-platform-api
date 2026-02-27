// @kintone/dts-gen の kintone.d.ts に不足している型を補完する宣言マージ
declare namespace kintone {
  // kintone.Promise に finally と [Symbol.toStringTag] がないため拡張する
  interface Promise<T> {
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
    readonly [Symbol.toStringTag]: string;
  }

  function showLoading(state: 'VISIBLE' | 'HIDDEN'): Promise<void>;
  function showNotification(type: 'ERROR' | 'SUCCESS' | 'INFO', message: string): Promise<void>;

  type ShowOptionsButton = (state: 'VISIBLE' | 'HIDDEN') => Promise<void>;
  type ShowFilterButton = (state: 'VISIBLE' | 'HIDDEN') => Promise<void>;
  type ShowAddRecordButton = (state: 'VISIBLE' | 'HIDDEN') => Promise<void>;
  type ShowEditRecordButton = (state: 'VISIBLE' | 'HIDDEN') => Promise<void>;

  namespace app {
    function showDescription(state: 'OPEN' | 'CLOSED'): Promise<void>;
    function showReportButton(state: 'VISIBLE' | 'HIDDEN'): Promise<void>;
    function showViewAndReportSelector(state: 'VISIBLE' | 'HIDDEN'): Promise<void>;
    function showAppSettingsButton(state: 'VISIBLE' | 'HIDDEN'): Promise<void>;
    const showOptionsButton: ShowOptionsButton;
    const showFilterButton: ShowFilterButton;
    const showAddRecordButton: ShowAddRecordButton;

    namespace record {
      const showEditRecordButton: ShowEditRecordButton;
    }
  }

  namespace mobile {
    namespace app {
      function showViewSelector(state: 'VISIBLE' | 'HIDDEN'): Promise<void>;
      function showReportSelector(state: 'VISIBLE' | 'HIDDEN'): Promise<void>;
      const showOptionsButton: ShowOptionsButton;
      const showFilterButton: ShowFilterButton;
      const showAddRecordButton: ShowAddRecordButton;

      namespace record {
        const showEditRecordButton: ShowEditRecordButton;
      }
    }
  }

  namespace system {
    function getPermissions(): Promise<{ administration: boolean }>;
  }
}
