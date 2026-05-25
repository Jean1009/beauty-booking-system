# Backend Cloud Run API

核心 API Server。

本系統唯一 Business Logic Layer。

---

# 主要責任（Responsibilities）

backend-cloudrun 負責：

- 預約邏輯
- 可預約時段計算
- 防止重複預約
- Google Sheet 存取
- Google Calendar 寫入
- Authentication
- API Response

---

# Tech Stack

- Node.js
- Express
- Google Cloud Run
- Google APIs

---

# API Structure

## Health：測試後端有沒有活著(https://你的cloudrun/api/health)

```text
GET /api/health
```

---

## Services：取得服務項目

```text
GET /api/services
```

---

## Slots：取得可預約時段

```text
GET /api/slots
```

---

## Bookings：真正建立預約

```text
POST /api/bookings
```

---

# Folder Structure

```text
src/
 ├── routes/            API 網址管理 ex:/api/bookings
 ├── controllers/       接收前端資料
 ├── services/          真正商業邏輯
 ├── repositories/      專門操作資料庫 / Google Sheet
 ├── middlewares/       API 守門員
 ├── utils/             小工具
 └── config/            環境設定
```

---

# Design Principles

## API-first

所有功能都應透過 API。

---

## Stateless

Server 不儲存 session state。

---

## Decoupled Architecture

Frontend 與 Backend 必須分離。

---

# Local Development

```bash
npm install
npm run dev
```

---

# Deployment

```bash
gcloud run deploy
```

---

# Future Improvements

- JWT
- Queue System
- Redis
- PostgreSQL
- Admin Dashboard

