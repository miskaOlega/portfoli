"use strict";
window.onload = () => {
    const gitReact = document.getElementById("gitReact");
    const gitJS = document.getElementById("gitJS");
    gitReact.onmouseover = gitReactFunctionOnn;
    gitReact.onmouseout = gitReactFunctionOff;
    gitJS.onmouseover = gitJSFunctionOnn;
    gitJS.onmouseout = gitJSFunctionOff;
};
class construktor {
    functionOnn(ids, nameIds, textFotInner) {
        let proc = 0;
        const e = document.getElementById(ids);
        const div = document.createElement('div');
        div.id = nameIds;
        div.innerHTML = textFotInner;
        div.style.opacity = `${proc}%`;
        e.appendChild(div);
        const int = setInterval(() => {
            if (proc < 100) {
                proc += 10;
                div.style.opacity = `${proc}%`;
            }
            else {
                clearInterval(int);
            }
        }, 50);
    }
    ;
    functionOff(ids) {
        const div = document.querySelector(ids);
        div.remove();
    }
}
const gitFunction = new construktor;
function gitJSFunctionOnn() {
    return gitFunction.functionOnn("gitJS", "git2", "Проект, написанный при помощи JS, в котором при помощи нажатия на столбики, вы сможете развернуть данный столбик");
}
function gitJSFunctionOff() {
    return gitFunction.functionOff("#git2");
}
function gitReactFunctionOnn() {
    return gitFunction.functionOnn("gitReact", "git1", "Проект, написанный при помощи React, однако до конца он не закончен");
}
function gitReactFunctionOff() {
    return gitFunction.functionOff("#git1");
}
