# 🎬 Films API Server - Lesson 9

Node.js Express server for working with films data.

---

## 📦 Installation

```bash
cd lesson_09/api
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

Server will start on `http://localhost:3000`

---

## 📋 API Endpoint

### GET `/api/films`

Returns a list of films.

**Response example:**
```json
{
  "data": [
    {
      "name": "How to Train Your Dragon",
      "year": 2010,
      "score": 8.1
    },
    {
      "name": "Shrek",
      "year": 2001,
      "score": 7.8
    }
  ],
  "total": 15
}
```

---

## 📝 Data Structure

Each film object contains:
- `name` (string) - film title
- `year` (number) - release year
- `score` (number) - rating

---

## ⚠️ Troubleshooting

1. **CORS Error** - make sure the server is running
2. **Connection refused** - port 3000 is busy, change PORT in `server.js`
3. **404 Not Found** - check the URL (should be `/api/films`)

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
