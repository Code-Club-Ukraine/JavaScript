# 🎮 Lesson 05 - Homework

## Hangman Game Improvements

---

## ✅ Tasks

### 1. More words
Add new words to the `words` array. Remember that all letters must be **lowercase**.

### 2. Capital letters
If the player enters an uppercase letter, it will not match the same lowercase letter in the intended word. This possibility can be accounted for by converting the entered letter to lowercase.

> **Hint:** the `toLowerCase` method works well for this.

### 3. Limitations on movement
Now our Hangman allows you to guess the letters as many times as you want, until the winning end. Add a variable to the program to keep track of attempts and end the game if the player has used up all attempts. 

> **Hint:** check the value of this variable in the same `while` loop where the condition `remainingLetters > 0` is checked, and using the `&&` operation you can make sure that two logical conditions are true at once.

### 4. Fix the error
There is a bug in the game: if you enter the same letter that is in the intended word over and over again, `remainingLetters` will decrease over and over again. Try to fix this! 

> **Hint:** you can add another condition check - that the corresponding element of `answerArray` still contains an underscore. If there is another character, then this letter has already been guessed.
