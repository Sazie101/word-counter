# word-counter
A program that takes an input and tells you the charcter and word count of your input.

## Instructions

### Part 1 HTML:
1. Create a basic form
2. Add the title
3. Add the reset button, give it an ID and add a class called hidden to it
3. Add a text area and give it an ID
4. Under the text area add the label and paragraph tag and add ID's to them 
```html
<body>
        <div class="content">
            <form>
                <div>
                    <h1>Word counter</h1>
                </div>
                <textarea name="input" id="input" placeholder="Enter your text here..."></textarea>
                <div class="counters">
                    <div class="counter one">
                        <div>
                            <label>characters</label>
                            <p id="characters"></p>
                        </div>
                        <div>
                            <label>words</label>
                            <p id="words">Word count: 0</p>
                        </div>
                        <div>
                            <label>sentences</label>
                            <p id="sentences"></p>
                        </div>
                    </div>
                    <div class="reset">
                        <button id="reset" class="hidden">Clear</button>
                    </div>
                </div>
            </form>
        </div>
    </body>
```
### Part 2 CSS:
1. Make sure everything is centered on the page
```css 
body {
  width: 100%;
  height: 100dvh;
  display: grid;
  place-items: center;
  background-color: #ebebeb;
}
```
2. Git rid of the resize property to stop from resizing the text area
```css
textarea {
    resize: none;
}
```
3. under the hidden class make the button invisible
```css
.hidden {
    visibility: hidden;
}
```
4. Add a visible part
```css
.visible {
    visibility: visible;
}
```
### Part 3 JavaScript:
1. Connect the textarea, pargraph tags and reset button to javascript using `document.querryselector()`;
```javascript
const text = document.querySelector('#input');
const characterCounter = document.querySelector('#characters');
const wordCounter = document.querySelector('#words');
const reset = document.querySelector('#reset');
```
2. Create a function that gets the number of characters and gets the number of words by slicing the input at the spaces and only adding to an array if it is not an empty space. Then you return
```javascript
function checkCharacters() {
    let characterCount = text.value.length;
    let textArr = text.value.trim().split(' ');
    let wordArr = textArr.filter(word => word !== '');
    let wordCount = wordArr.length;
    return {characterCount, wordCount};
};
```
3. Add an event listener that listens to when you type on the keyboard.
4. Whenever a key is pressed it will call the function `checkCharacters()` which returns the number of characters and words in the input. It will also add or remove 'visible' from the button depending on whether there is anything in the input
```javascript
text.addEventListener('keyup', () => {
    if (text.value === '') {
        reset.classList.remove('visible');
    } else {
        reset.classList.add('visible');
    }
    const { characterCount, wordCount } = checkCharacters();
    characterCounter.innerText = characterCount;
    wordCounter.innerText = wordCount;
});
```
5. Add an event listener so that when the page is reloaded the input is cleared and it resets the counter for characters and words
```javascript
window.addEventListener('load', () => {
    text.value = '';
    const { characterCount, wordCount } = checkCharacters();
    characterCounter.innerText = characterCount;
    wordCounter.innerText = wordCount;
});
```
6. Add an eventListener to the button and add the event in the brackets and add it `event.preventDefault` to stop the button from reloading the page
```javascript
reset.addEventListener('click', (event) => {
    event.preventDefault();
    text.value = '';
    const { characterCount, wordCount } = checkCharacters();
    characterCounter.innerText = characterCount;
    wordCounter.innerText = wordCount;
});
```
## Demo
Click [here](https://sazie101.github.io/word-counter/) to try