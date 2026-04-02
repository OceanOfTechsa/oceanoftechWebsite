import type { Setting } from "@/Oceanoftech.Data/Settings/Settings";

export interface ISettingsRepository {
  GetSettingsByKey(id: Setting["key"]): Setting;
}
