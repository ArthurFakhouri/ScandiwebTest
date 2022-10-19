import React from "react";

function top(list) {
    if (!list.length)
        return -1;
    return list.length - 1;
}

function isCompatible(string) {
    let openTags = string.match(/<\w*>/gi);
    let closeTags = string.match(/<\/\w*>/gi);

    if(!openTags && !closeTags)
        return true;

    return openTags.length === closeTags.length;
}

function makeCompatible(string) {
    let openTags = string.match(/<\w*>/gi);
    let closeTags = string.match(/<\/\w*>/gi);
    let size = openTags.length;
    let index = 0;

    //creating a pattern to replace new changes
    for (; index < size; index++) {
        string = string.replace(openTags[index], `##${index}`);
    }

    //removing slash from close tags to compare and adjust it
    closeTags = closeTags.map(tag => tag.replace("/", ""));

    //adjusting
    for (let i = 0, j = 0; i < size;) {
        if (openTags[i].includes(closeTags[j])) {
            i++;
            j++;
        } else {
            let content = openTags[i].replace("<", "</");
            if (i + 1 < size)
                openTags[i + 1] = content + openTags[i + 1];
            else
                openTags.push(content);
            i++;
        }
    }

    for(let i = 0;i < index;i++){
        string = string.replace(`##${i}`, openTags[i]);
    }
    
    return string;
}

function adjustEqualityTags(string) {
    let ans = "";
    if (isCompatible(string))
        ans = string;
    else {
        ans = makeCompatible(string);
    }

    return ans;
}

function adjustHtmlEntities(string) {
    const entities = [
        { name: '&nbsp;', value: ' ' },
        { name: '&lt;', value: '<' },
        { name: '&gt;', value: '>' },
        { name: '&amp;', value: '&' },
        { name: '&quot;', value: '"' },
        { name: '&apos;', value: '\'' },
        { name: '&cent;', value: '¢' },
        { name: '&pound;', value: '£' },
        { name: '&yen;', value: '¥' },
        { name: '&euro;', value: '€' },
        { name: '&copy;', value: '©' },
        { name: '&reg;', value: '®' }
    ]
    let size = entities.length;
    for (let i = 0; i < size; i++)
        string = string.replaceAll(entities[i].name, entities[i].value)
    return string;
}

function getElement(string, index) {
    let size = string.length;
    let element = "";

    while (index < size && string.charAt(index) !== '>') {
        element += string.charAt(index);
        index++;
    }
    index++;

    return { element, currentIndex: index };
}

function insertContent(stack, content) {
    if (content)
        stack[top(stack)].push(content);
    return stack;
}

export function stringToComponent(string) {
    string = adjustEqualityTags(string);
    string = adjustHtmlEntities(string);
    let stackComponent = [];
    let size = string.length;
    let content = "";
    let stackChildren = [];
    let child, ans = [];

    for (let index = 0; index < size;) {
        if (string.charAt(index) === '<') {
            index++;
            const { element, currentIndex } = getElement(string, index);
            index = currentIndex;
            if (stackComponent.length && ("/" + stackComponent[top(stackComponent)]) === element) {
                stackChildren = insertContent(stackChildren, content);
                content = "";
                child = React.createElement(stackComponent[top(stackComponent)], { key: index }, stackChildren[top(stackChildren)]);

                if (stackChildren.length === 1)
                    ans.push(child);

                stackComponent.pop();
                stackChildren.pop();
                if (stackChildren.length) {
                    stackChildren[top(stackChildren)].push(child);
                }
            }
            else {
                stackComponent.push(element);
                stackChildren.push([]);
                stackChildren = insertContent(stackChildren, content);
                content = "";
            }
        } else {
            content += string.charAt(index);
            index++;
        }
    }
    if (!ans.length && content)
        ans = content;

    return ans;
}