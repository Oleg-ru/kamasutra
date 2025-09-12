import {tasks} from "./data.js";

const rootEl = document.getElementById('root');
const headerEl = document.createElement('h1');
const unorderedListEl = document.createElement('ul');

tasks.forEach(task => {
    const listEl = document.createElement('li');
    const titleTaskEl = document.createElement('div');
    const checkBoxEl = document.createElement('input');

    titleTaskEl.append(task.title);
    checkBoxEl.type = 'checkbox';
    checkBoxEl.checked = task.isDone;

    listEl.append(titleTaskEl);
    listEl.append(checkBoxEl);
    unorderedListEl.append(listEl);
})

rootEl.append(headerEl);
rootEl.append(unorderedListEl);