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
            <div class="reset">
                <button id="reset" class="hidden">Clear</button>
            </div>
            <div>
                <h1>Word counter</h1>
            </div>
            <textarea name="input" id="input" placeholder="Enter your text here..."></textarea>
            <div class="counter one">
                <div>
                    <label>characters</label>
                    <p id="characters"></p>
                </div>
                <div>
                    <label>words</label>
                    <p id="words">Word count: 0</p>
                </div>
            </div>
        </form>
    </div>
</body>
```
Part 2 CSS:
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
2. 

### Part 3 JavaScript:
## Demo
Click [here](https://sazie101.github.io/word-counter/) to try