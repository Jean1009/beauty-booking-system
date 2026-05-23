# 系統架構（Architecture）

本系統採用：

- Frontend / Backend 分離
- API-first Architecture
- Stateless Backend
- Google Workspace Integration

架構設計。

---

# 高階架構（High-Level Architecture）

```text
LINE Rich Menu
        ↓
LINE LIFF Frontend
(frontend-liff)
        ↓
Cloud Run API
(backend-cloudrun)
        ↓
Google Sheet
        ↓
Google Calendar
        ↓
Google Apps Script
(backend-gas)
```

---

# 系統責任分層（Layer Responsibility）

---

# 1. Frontend Layer（LIFF）

資料夾：

```text
frontend-liff/
```

---

## 責任

LIFF 只負責：

- UI 顯示
- 使用者互動
- API 呼叫
- LIFF Login

---

## 不可負責

LIFF 不得：

- 直接存取 Google Sheet
- 存取 Google Calendar
- 處理預約邏輯
- 判斷可預約時段

---

# 2. Backend API Layer（Cloud Run）

資料夾：

```text
backend-cloudrun/
```

---

## 核心角色

Cloud Run 是：

```text
唯一 Business Logic Layer
```

---

## 責任

負責：

- 預約驗證
- 時段計算
- 防止重複預約
- Google Sheet 存取
- Google Calendar 寫入
- Authentication

---

# 3. Helper Layer（GAS）

資料夾：

```text
backend-gas/
```

---

## GAS 角色

GAS 是：

```text
Automation Helper Layer
```

不是主 API Server。

---

## GAS 負責

- Trigger
- Calendar Sync
- 報表
- 自動化任務

---

# API Architecture

所有 API：

```text
/api/*
```

---

# API List

## Health Check

```text
GET /api/health
```

---

## Services

```text
GET /api/services
```

---

## Slots

```text
GET /api/slots
```

---

## Bookings

```text
POST /api/bookings
```

---

# Booking Flow

```text
User opens LIFF
    ↓
Select Service
    ↓
Select Staff
    ↓
Select Date
    ↓
Fetch Slots
    ↓
Submit Booking
    ↓
Cloud Run Validation
    ↓
Write Google Sheet
    ↓
Create Calendar Event
    ↓
Return Response
```

---

# Database Architecture

目前使用：

```text
Google Sheet
```

作為 Lightweight Database。

---

# Main Sheets

## Sheet_Services

服務列表。

---

## Sheet_Staff

美容師資料。

---

## Sheet_Bookings

預約資料。

---

## Sheet_Holidays

公休日資料。

---

# Deployment Architecture

## Frontend

部署：

- Vercel

---

## Backend

部署：

- Google Cloud Run

---

# Future Scalability

目前：

```text
LIFF
 ↓
Cloud Run
 ↓
Google Sheet
```

未來：

```text
LIFF
 ↓
Cloud Run
 ↓
PostgreSQL
 ↓
Redis
 ↓
Queue System
```

