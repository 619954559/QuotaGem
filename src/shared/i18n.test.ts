import { describe, expect, it } from "vitest";

import { t } from "./i18n";

describe("i18n", () => {
  it("returns the QuotaGem brand name in both languages", () => {
    expect(t("en", "trayUsageWidget")).toBe("QuotaGem");
    expect(t("zh-TW", "trayUsageWidget")).toBe("QuotaGem");
    expect(t("zh-CN", "trayUsageWidget")).toBe("QuotaGem");
  });

  it("localizes settings and interpolated usage notifications in Simplified Chinese", () => {
    expect(t("zh-CN", "settings")).toBe("设置");
    expect(t("zh-CN", "savePreferences")).toBe("保存设置");
    expect(t("zh-CN", "usageAlertBody", { provider: "Claude", metric: "每周", percent: 80 }))
      .toBe("Claude 的 每周 用量已达 80%。");
  });

  it("keeps key usage labels available", () => {
    expect(t("en", "settings")).toBeTruthy();
    expect(t("en", "openSettings")).toBeTruthy();
    expect(t("en", "panelScale")).toBeTruthy();
    expect(t("en", "dateFormat")).toBeTruthy();
  });
});
