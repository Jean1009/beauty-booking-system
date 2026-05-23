# Beauty Booking System

美容工作室預約系統（LINE LIFF + Cloud Run + Google Workspace）

---

# 專案目標（Project Goal）

建立一套：

- LINE 預約系統
- LIFF 按鈕式預約流程
- Google Calendar 排程管理
- Google Sheet 資料管理

的輕量 SaaS 預約平台。

---

# 系統架構（Architecture）

```text
LINE Rich Menu
        ↓
LINE LIFF Frontend
(frontend-liff)
        ↓ HTTPS API
Cloud Run API
(backend-cloudrun)
        ↓
Google Sheet
        ↓
Google Calendar
        ↓
Google Apps Script
(backend-gas helper layer)
```

---

# 專案結構（Project Structure）

```text
beauty-booking-system/
│
├── frontend-liff/        LIFF 前端 UI
├── backend-cloudrun/     核心 API Server
├── backend-gas/          GAS 輔助系統
├── docs/                 系統文件
└── database/             Google Sheet schema
```

---

# 技術架構（Tech Stack）

## Frontend

- LIFF
- Vanilla JavaScript
- Vercel

## Backend

- Node.js
- Express
- Google Cloud Run

## Database

- Google Sheet

## Calendar

- Google Calendar

## Automation

- Google Apps Script

---

# 核心設計原則（Core Principles）

## 1. LIFF 只負責 UI

frontend-liff 只能：

- 顯示畫面
- 按鈕互動
- fetch API
- LIFF Login

不得：

- 直接存取 Google Sheet
- 處理預約邏輯
- 處理時段邏輯

---

## 2. Cloud Run 是唯一 Business Logic Layer

所有：

- 預約邏輯
- 防撞
- 時段計算
- Calendar 寫入

都必須經過：

```text
backend-cloudrun/
```

---

## 3. GAS 是 Helper Layer

backend-gas 只負責：

- Trigger
- 自動化
- Sync
- 排程任務

不是主 API Server。

---

# Git Flow

```text
main
 └── dev
      ├── feature/liff-ui
      ├── feature/booking-api
      └── feature/calendar-sync
```

---

# 未來功能（Future Features）

- 多美容師排班
- Queue 防搶時段
- JWT 驗證
- Admin Dashboard
- LINE 推播
- PostgreSQL Migration

