import type { Setting } from "@/Oceanoftech.Data/Settings/Settings";
import { SettingsRepository } from "@/Oceanoftech.Repository/SettingsRepository";

export class SettingsBusiness {
  public GetSettingsByKey(key: Setting["value"]): Setting | null {
    const entity = <Setting>new SettingsRepository().GetSettingsByKey(key);
    if (!entity || !entity.isActive) return null;
    return entity;
  }
}
