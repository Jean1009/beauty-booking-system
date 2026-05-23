# Backend GAS

Google Apps Script 輔助系統。

---

# GAS 定位（Role）

backend-gas 是：

```text
Automation Helper Layer
```

不是：

```text
Main Backend API
```

---

# GAS 負責功能

- Trigger
- Sheet Automation
- Calendar Sync
- Daily Reports
- Backup Jobs

---

# 為什麼 GAS 不是主 API？

因為 GAS 有：

- 302 redirect 問題
- CORS 限制
- REST API 能力弱
- 不適合高併發

---

# 正確架構

```text
LIFF
 ↓
Cloud Run API
 ↓
Google Sheet / Calendar
 ↓
GAS Automation
```

---

# Existing Scripts

```text
SheetTrigger.gs
CalendarSync.gs
LineWebhook.gs
Utils.gs
```

---

# Future Usage

- 自動報表
- 排程同步
- 後台整理
- Trigger 任務

