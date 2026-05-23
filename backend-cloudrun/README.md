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

## Health

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

# Folder Structure

```text
src/
 ├── routes/
 ├── controllers/
 ├── services/
 ├── repositories/
 ├── middlewares/
 ├── utils/
 └── config/
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

