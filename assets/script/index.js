'use strict';

function onEvent(event, selector, callback) {
    return selector.addEventListener(event, callback);
}

function selectById(selector, parent = document) {
    return parent.getElementById(selector);
}

function select(selector, parent = document) {
    return parent.querySelector(selector);
}

function create(element, parent = document) {
    return parent.createElement(element);
}

function print(...args) {
    console.log(args.join(', '));
}

const text = selectById('input');
const characterCounter = selectById('characters');
const wordCounter = selectById('words');
const sentenceCounter = selectById('sentences');
const reset = selectById('reset');

function checkCharacters() {
    let characterCount = text.value.length;
    let sentencesArr = text.value.split('. ');
    let sentences = sentencesArr.filter(word => word !== '');
    let sentenceCount = sentences.length;
    let textArr = text.value.trim().split(' ');
    let wordArr = textArr.filter(word => word !== '');
    let wordCount = wordArr.length;
    return {characterCount, wordCount, sentenceCount};
};

onEvent('keyup', text, () => {
    if (text.value === '') {
        reset.classList.remove('visible');
    } else {
        reset.classList.add('visible');
    }
    const {characterCount, wordCount, sentenceCount} = checkCharacters();
    characterCounter.innerText = characterCount;
    wordCounter.innerText = wordCount;
    sentenceCounter.innerText = sentenceCount;
});

onEvent('load', window, () => {
    text.value = '';
    const {characterCount, wordCount, sentenceCount} = checkCharacters();
    characterCounter.innerText = characterCount;
    wordCounter.innerText = wordCount;
    sentenceCounter.innerText = sentenceCount;
});

onEvent('click', reset, (event) => {
    event.preventDefault();
    reset.classList.remove('visible');
    text.value = '';
    const {characterCount, wordCount, sentenceCount} = checkCharacters();
    characterCounter.innerText = characterCount;
    wordCounter.innerText = wordCount;
    sentenceCounter.innerText = sentenceCount;
});