# 🎪 Lesson 03 - Homework

## Goal

Create web application "Random Tease Generator"

## 📋 Task Description

In `generateRandomTaunt()` finction create **three arrays** of words as strings:

```javascript
let bodyParts = [some body parts];  // look here: https://bambinos.live/blog/body-parts-and-their-functions
var adjectives = [some adjectives]; // ask ChatGPT: generate me a list of adjectives words to use for teasing someone
var nouns = [some nouns];           // ask ChatGPT: generate me a list of random nouns
```

Declare and assign a random word from each array:

```javascript
let randomBodyPart = ...;
let randomAdjectives = ...;
let randomNoun = ...;
```

Then glue them together, placing the result in the `randomTease` variable, and that's you have you tease done:

```javascript
let randomTease = `You have ${randomBodyPart} as ${randomAdjective} ${randomNoun}!!!`;
```

__Note__: your function generateRandomTaunt() should return `randomTease` when it's called.