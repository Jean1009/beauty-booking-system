# Frontend LIFF

LINE LIFF 前端系統。

---

# 主要責任（Responsibilities）

frontend-liff 負責：

- UI 顯示
- 預約流程
- API 呼叫
- LIFF Login

---

# 不可負責

frontend-liff 不得：

- 直接存取 Google Sheet
- 處理預約邏輯
- 處理時段計算
- 直接操作 Google Calendar

---

# 技術架構（Tech Stack）

- LIFF
- Vanilla JavaScript
- HTML/CSS
- Vercel

---

# UI Flow

```text
Service
 ↓
Staff
 ↓
Date
 ↓
Slot
 ↓
Confirm Booking
```

---

# API Integration

所有 API：

```text
Cloud Run API
```

不得直接呼叫 GAS。

---

# Folder Structure

```text
index.html
app.js
api.js
config.js
style.css
```

---

# API Example

```javascript
fetch("/api/services")
```

---

# Deployment

部署：

- Vercel

---

# Future Improvements

- UI Animation
- Loading State
- Error Handling
- Multi-step Booking Flow
- Responsive Design