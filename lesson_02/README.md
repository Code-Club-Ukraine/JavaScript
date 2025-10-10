# 🎲 Lesson 02 - Homework

## Game "Guess the number"

---

## 📋 Task Description

You have **2 fields** in which you need to enter the upper and lower boundaries. That is, within which numbers the number will be guessed. 

After clicking the **"Start"** button, a confirm message with the text **"Ready to start?"** should appear.

### If the answer is "true":
- Generate a random number within the specified limits
- Show a prompt with the text: `"What number from " + minNumber + " to " + maxNumber + " did I guess?"`
  - Where `minNumber` and `maxNumber` are numbers from our fields
- Then they need to enter a number in the prompt window
- Our program should compare the random number with what we entered in the prompt:
  - If our number is **greater** than the random number → show the message **"A little more"**
  - If **less** → **"A little less"**
  - If **correct** → **"Correct"**

### If the answer is "false":
- Show the message **"See you next time!"**
