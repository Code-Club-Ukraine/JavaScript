# 📝 Lesson 01 - Homework

##  📌 Goal
Learn how to manage Browser's DOM with JavaScript

## 📋 Instructions

The materials include another page with a homework template (index.html).

### 1. Save Button

- Declare a variable for `div#textarea` and usingt the [Document](https://developer.mozilla.org/en-US/docs/Web/API/Document) method [querySelector()](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector) assign it to the value which references to the same div element in the DOM.
- Declare a variable for the **"Save"** button and (similar to the `div#textarea` above) assign it to the corresponding HTMLElement in the DOM. 
- Add event listener for click event on the **"Save"** button and implement its functionality as follows: 
  - When user clicks Save button set the [inner text](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/innerText) in `div#textarea` \
    to the value in the **"Text"** input field (use appropriate query selector to get the value).\
    Example of code for adding event listener:
    ```javascript
    let htmlElement = document.querySelector('....');
    
    // adding event listener for htmlElement:
    htmlElement.addEventListener('click', function() {
      // here starts your event listener's code for htmlElement
      
      let anotherHtmlElement = document.querySelector('....');
      
      // here you can do something with anotherHtmlElement 
      // whenever you click on htmlElement
    });
    ```

### 2. Hover Color
- Declare a variable for `div#display-text` element and assign it to the value which references to the same HTMLElement in the DOM.
- Add event listener on this element for [mouseenter event](https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseenter_event) and implement it as follows: 
  - set the background color for this element to the value in the **"Hover color"** field (you need to read it from the input field).

### 3. Default Color
- Similar to the p.2 above (with variable and event listener), \
  but read color from the the **"Default color"** field.


## Stretching tasks (optional)

### 1. Append text instead of setting innerText:

Change click event on **Save** button:
- inside "click" event handling function:
  - first: create a `<p>` HTML Element with [Document createElement()](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement) method. 
  - then append that `<p>` element to the `div#textarea`

### 2. Add color picker for text.

- Use color picker for the text to style it each time you add a new `<p>` element \
  (you'd need to add once more label and input field for that).
- If you need some hint about what property is responsible for setting font color, \
  you can find it here: [HTMLElement: style property](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) \
  also, use Dev Tools in your browser to expore possible style properties for a html element.
