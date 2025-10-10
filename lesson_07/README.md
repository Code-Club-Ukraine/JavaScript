# 🔧 Lesson 07 - Homework

## Functions and Arrays

---

## ✅ Tasks

### 1. Mathematical calculations and functions
Create two functions, `add` and `multiply`; each one takes two arguments. The `add` function should add the arguments and return the result, and the `multiply` function should multiply the arguments. 

Using **only these two functions**, evaluate the following simple expression:

```javascript
36325 * 9824 + 777
```

### 2. Do the arrays match?
Write a function called `areArraysSame` that takes two arrays of numbers as arguments. It should return `true` if the arrays are the same (i.e., contain the same numbers in the same order), or `false` if the arrays are different. 

Verify that your function works correctly by running the following code:

```javascript
areArraysSame ([1, 2, 3], [4, 5, 6]); //false
areArraysSame ([1, 2, 3], [1, 2, 3]); //true
areArraysSame ([1, 2, 3], [1, 2, 3, 4]); //false
```

> **Hint 1:** You will need to loop through all the values from the first array in the `for` loop and make sure they match the values from the second array. You can return `false` directly from the `for` body if you find any mismatches.

> **Hint 2:** You can exit the function immediately, skipping the `for` loop, if the arrays have different lengths.
