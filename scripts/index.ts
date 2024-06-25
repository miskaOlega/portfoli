window.onload = () => {
    const gitReact = <HTMLScriptElement>document.getElementById("gitReact");
    const gitJS = <HTMLScriptElement>document.getElementById("gitJS");
    gitReact.onmouseover = gitReactFunctionOnn;
    gitReact.onmouseout = gitReactFunctionOff;
    gitJS.onmouseover = gitJSFunctionOnn;
    gitJS.onmouseout = gitJSFunctionOff;
}

class construktor<S extends string> {
    functionOnn (ids:S , nameIds:S , textFotInner:S) {
        let proc: number = 0;
    const e =<HTMLScriptElement> document.getElementById(ids)
    const div =<HTMLDivElement>document.createElement('div');
    div.id = nameIds;
    div.innerHTML = textFotInner;
    div.style.opacity = `${proc}%`;
    e.appendChild(div)
    const int = setInterval(() => {
        if (proc < 100) {
            proc+= 10;
            div.style.opacity = `${proc}%`;
        } else {
            clearInterval(int)
        }
    } , 50)
    };

    functionOff (ids: S) {
        const div = document.querySelector(ids);
        div!.remove();
    }
}

const gitFunction = new construktor<string>;

function gitJSFunctionOnn (): void { 
    return gitFunction.functionOnn("gitJS" , "git2" , "Проект, написанный при помощи JS, в котором при помощи нажатия на столбики, вы сможете развернуть данный столбик");
  }

  function gitJSFunctionOff ():void {
    return gitFunction.functionOff("#git2");
  }


function gitReactFunctionOnn ():void { 
  return gitFunction.functionOnn("gitReact" , "git1" , "Проект, написанный при помощи React, однако до конца он не закончен");
}

function gitReactFunctionOff ():void {
    return gitFunction.functionOff("#git1")
}
