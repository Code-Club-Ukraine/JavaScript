# 📮 Form API Server - Lesson 10

Node.js Express server for form validation and submission.

---

## 📦 Installation

```bash
cd lesson_10/api
npm install
```

---

## ▶️ Run Server

```bash
npm start
```

Or for development mode with auto-reload:

```bash
npm run dev
```

Server will start on `http://localhost:3001`

---

## 📋 API Endpoint

### POST `/api/form/send`

Accepts form data and validates it.

**Required fields:**
- `name` (string) - minimum 2 characters, letters and spaces only
- `email` (string) - valid email format
- `phone` (string) - 8-20 characters, can include +, (), -, spaces and digits
- `gender` (string or number) - must be "0", "1", 0, or 1
- `text` (string) - optional, but if provided must be at least 10 characters
- `is_accepted` (string or number) - must be "1" or 1

**Success response (200):**
```json
{
  "code": "1",
  "message": "John Doe, форма успішно відправлена"
}
```

**Validation error (400):**
```json
{
  "code": "0",
  "message": "Email не коректний"
}
```

**Server error (500):**
```json
{
  "code": "0",
  "message": "Помилка сервера. Спробуйте пізніше"
}
```

---

## ⚠️ Troubleshooting

1. **CORS Error** - make sure the server is running
2. **Connection refused** - port 3001 is busy, change PORT in `server.js`
3. **400 Bad Request** - check validation errors in response message
4. **500 Server Error** - random error (25% chance), try again

---

## 💡 Useful Commands

```bash
# Start server
npm start

# Stop server
Ctrl + C

# Restart server
Ctrl + C, then npm start
```

