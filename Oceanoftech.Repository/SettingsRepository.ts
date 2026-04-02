import { ISettingsRepository } from "@/Oceanoftech.Repository/Contracts/ISettingsRepository";
import type { Setting } from "@/Oceanoftech.Data/Settings/Settings";

export class SettingsRepository implements ISettingsRepository {
  public GetSettingsByKey(key: Setting["key"]): Setting {
    let SettingsArr = [
      {
        key: "setting 1",
        description: "jsuuus",
        isActive: true,
        value: "This is a test value from  the Settings Repository, Setting 1",
      },
      {
        key: "setting 2",
        description: "jsuuus",
        isActive: true,
        value: "This is a test value from  the Settings Repository setting 2",
      },
    ];
    return <Setting>(
      SettingsArr.find((set: Setting): boolean => set.key === key)
    );
  }
}
