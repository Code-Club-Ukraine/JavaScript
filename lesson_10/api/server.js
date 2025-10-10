const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

function isValidName(name) {
    if (!name || name.length < 2) return false;
    const nameRegex = /^[А-Яа-яA-Za-zЄєЁёЇїҐґ ]+$/u;
    return nameRegex.test(name);
}

function isValidEmail(email) {
    if (!email) return false;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhone(phone) {
    if (!phone) return false;
    const phoneRegex = /^[+]?[\(\)\-\s0-9]{8,20}$/;
    return phoneRegex.test(phone);
}

function isValidGender(gender) {
    return gender === 1 || gender === "1" || gender === 0 || gender === "0";
}

function isValidText(text) {
    const minTextLength = 10;
    if (!text || text.length === 0) return true;
    return text.length >= minTextLength;
}

app.post('/api/form/send', (req, res) => {
    const formData = req.body;
    
    if (!isValidName(formData.name)) {
        return res.status(400).json({
            code: "0",
            message: "Ім'я не коректне"
        });
    }
    
    if (!isValidEmail(formData.email)) {
        return res.status(400).json({
            code: "0",
            message: "Email не коректний"
        });
    }
    
    if (!isValidPhone(formData.phone)) {
        return res.status(400).json({
            code: "0",
            message: "Телефон не коректний"
        });
    }
    
    if (!isValidGender(formData.gender)) {
        return res.status(400).json({
            code: "0",
            message: "Стать не коректна"
        });
    }
    
    if (!isValidText(formData.text)) {
        return res.status(400).json({
            code: "0",
            message: "Текст не коректний"
        });
    }
    
    if (formData.is_accepted !== "1" && formData.is_accepted !== 1) {
        return res.status(400).json({
            code: "0",
            message: "Умови не прийняті"
        });
    }
    
    if (Math.floor(Math.random() * 4) === 0) {
        return res.status(500).json({
            code: "0",
            message: "Помилка сервера. Спробуйте пізніше"
        });
    }
    
    res.json({
        code: "1",
        message: `${formData.name}, форма успішно відправлена`
    });
});

app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
    console.log(`📮 Form API: http://localhost:${PORT}/api/form/send`);
});

