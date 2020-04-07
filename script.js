
let CapsLockFlag = false;
let ctrFlag = false;
let altFlag = false;
let resultString = "";

// e.key, e.code, e.keyCode, e.charCode 
let objLines = {
    "line_1": ["Backquote", "Digit1", "Digit2", "Digit3", "Digit4", "Digit5", "Digit6", "Digit7", "Digit8", "Digit9", "Digit0", "Minus", "Equal", "Backspace"],

    "line_2": ["Tab", "KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "BracketLeft", "BracketRight", "Backslash", "Delete"],

    "line_3": ["CapsLock", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "Semicolon", "Quote", "Enter"],

    "line_4": ["ShiftLeft", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Comma", "Period", "Slash", "ArrowUp", "ShiftRight"],

    "line_5": ["ControlLeft", "MetaLeft", "AltLeft", "Space", "ControlRight", "ArrowLeft", "ArrowDown", "ArrowRight", "Alt"]
}

let metaSymb = {
    "Control": "Ctrl",
    "Meta": "Win",
    "Alt": "Alt",
    " ": " ",
    "ArrowLeft": "◄",
    "ArrowDown": "▼",
    "ArrowRight": "►",
    "Delete": "Del",
    "ArrowUp": '▲',
};

let obj = {
    "eng": {
        "unshift": {
            "line_1": [
                ["`", "Backquote", 96, 96],
                ["1", "Digit1", 49, 49],
                ["2", "Digit2", 50, 50],
                ["3", "Digit3", 51, 51],
                ["4", "Digit4", 52, 52],
                ["5", "Digit5", 53, 53],
                ["6", "Digit6", 54, 54],
                ["7", "Digit7", 55, 55],
                ["8", "Digit8", 56, 56],
                ["9", "Digit9", 57, 57],
                ["0", "Digit0", 48, 48],
                ["-", "Minus", 45, 45],
                ["=", "Equal", 61, 61],
                ["Backspace", "Backspace", 8, 0]
            ],

            "line_2": [
                ["Tab", "Tab", 9, 0],
                ["q", "KeyQ", 113, 113],
                ["w", "KeyW", 119, 119],
                ["e", "KeyE", 101, 101],
                ["r", "KeyR", 114, 114],
                ["t", "KeyT", 116, 116],
                ["y", "KeyY", 121, 121],
                ["u", "KeyU", 117, 117],
                ["i", "KeyI", 105, 105],
                ["o", "KeyO", 111, 111],
                ["p", "KeyP", 112, 112],
                ["[", "BracketLeft", 91, 91],
                ["]", "BracketRight", 93, 93],
                ["\\", "Backslash", 92, 92],
                ["Delete", "Delete", 46, 0]
            ],

            "line_3": [
                ["CapsLock", "CapsLock", 20, 0],
                ["a", "KeyA", 97, 97],
                ["s", "KeyS", 115, 115],
                ["d", "KeyD", 100, 100],
                ["f", "KeyF", 102, 102],
                ["g", "KeyG", 103, 103],
                ["h", "KeyH", 104, 104],
                ["j", "KeyJ", 106, 106],
                ["k", "KeyK", 107, 107],
                ["l", "KeyL", 108, 108],
                [";", "Semicolon", 59, 59],
                ["'", "Quote", 39, 39],
                ["Enter", "Enter", 13, 13]
            ],
            "line_4": [
                ["Shift", "ShiftLeft", 16, 0],
                ["z", "KeyZ", 122, 122],
                ["x", "KeyX", 120, 120],
                ["c", "KeyC", 99, 99],
                ["v", "KeyV", 118, 118],
                ["b", "KeyB", 98, 98],
                ["n", "KeyN", 110, 110],
                ["m", "KeyM", 109, 109],
                [",", "Comma", 44, 44],
                [".", "Period", 46, 46],
                ["/", "Slash", 47, 47],
                ["ArrowUp", "ArrowUp", 38, 0],
                ["Shift", "ShiftRight", 16, 0]
            ],
            "line_5": [
                ["Control", "ControlLeft", 17, 0],
                ["Meta", "MetaLeft", 91, 0],
                ["Alt", "AltLeft", 18, 0],
                [" ", "Space", 32, 32],
                ["Control", "ControlRight", 17, 0],
                ["ArrowLeft", "ArrowLeft", 37, 0],
                ["ArrowDown", "ArrowDown", 40, 0],
                ["ArrowRight", "ArrowRight", 39, 0],
                ["Alt", "AltRight", 18, 0]
            ],
        },
        "shift": {
            "line_1": [
                ["~", "Backquote", 126, 126],
                ["!", "Digit1", 33, 33],
                ["@", "Digit2", 64, 64],
                ["#", "Digit3", 35, 35],
                ["$", "Digit4", 36, 36],
                ["%", "Digit5", 37, 37],
                ["^", "Digit6", 94, 94],
                ["&", "Digit7", 38, 38],
                ["*", "Digit8", 42, 42],
                ["(", "Digit9", 40, 40],
                [")", "Digit0", 41, 41],
                ["_", "Minus", 95, 95],
                ["+", "Equal", 43, 43],
                ["Backspace", "Backspace", 8, 0]
            ],
            "line_2": [
                ["Tab", "Tab", 9, 0],
                ["Q", "KeyQ", 81, 81],
                ["W", "KeyW", 87, 87],
                ["E", "KeyE", 69, 69],
                ["R", "KeyR", 82, 82],
                ["T", "KeyT", 84, 84],
                ["Y", "KeyY", 89, 89],
                ["U", "KeyU", 85, 85],
                ["I", "KeyI", 73, 73],
                ["O", "KeyO", 79, 79],
                ["P", "KeyP", 80, 80],
                ["{", "BracketLeft", 123, 123],
                ["}", "BracketRight", 125, 125],
                ["|", "Backslash", 124, 124],
                ["Delete", "Delete", 46, 0]
            ],
            "line_3": [
                ["CapsLock", "CapsLock", 20, 0],
                ["A", "KeyA", 65, 65],
                ["S", "KeyS", 83, 83],
                ["D", "KeyD", 68, 68],
                ["F", "KeyF", 70, 70],
                ["G", "KeyG", 71, 71],
                ["H", "KeyH", 72, 72],
                ["J", "KeyJ", 74, 74],
                ["K", "KeyK", 75, 75],
                ["L", "KeyL", 76, 76],
                [":", "Semicolon", 58, 58],
                ["\"", "Quote", 34, 34],
                ["Enter", "Enter", 13, 13]
            ],
            "line_4": [
                ["Shift", "ShiftLeft", 16, 0],
                ["Z", "KeyZ", 90, 90],
                ["X", "KeyX", 88, 88],
                ["C", "KeyC", 67, 67],
                ["V", "KeyV", 86, 86],
                ["B", "KeyB", 66, 66],
                ["N", "KeyN", 78, 78],
                ["M", "KeyM", 77, 77],
                ["<", "Comma", 60, 60],
                [">", "Period", 62, 62],
                ["?", "Slash", 63, 63],
                ["ArrowUp", "ArrowUp", 38, 0],
                ["Shift", "ShiftRight", 16, 0]
            ],
            "line_5": [
                ["Control", "ControlLeft", 17, 0],
                ["Meta", "MetaLeft", 91, 0],
                ["Alt", "AltLeft", 18, 0],
                [" ", "Space", 32, 32],
                ["Control", "ControlRight", 17, 0],
                ["ArrowLeft", "ArrowLeft", 37, 0],
                ["ArrowDown", "ArrowDown", 40, 0],
                ["ArrowRight", "ArrowRight", 39, 0],
                ["Alt", "AltRight", 18, 0]
            ],
        },
    },
    "rus": {
        "unshift": {
            "line_1": [
                ["ё", "Backquote", 1105, 1105],
                ["1", "Digit1", 49, 49],
                ["2", "Digit2", 50, 50],
                ["3", "Digit3", 51, 51],
                ["4", "Digit4", 52, 52],
                ["5", "Digit5", 53, 53],
                ["6", "Digit6", 54, 54],
                ["7", "Digit7", 55, 55],
                ["8", "Digit8", 56, 56],
                ["9", "Digit9", 57, 57],
                ["0", "Digit0", 48, 48],
                ["-", "Minus", 45, 45],
                ["=", "Equal", 61, 61],
                ["Backspace", "Backspace", 8, 0]
            ],

            "line_2": [
                ["Tab", "Tab", 9, 0],
                ["й", "KeyQ", 1081, 1081],
                ["ц", "KeyW", 1094, 1094],
                ["у", "KeyE", 1091, 1091],
                ["к", "KeyR", 1082, 1082],
                ["е", "KeyT", 1077, 1077],
                ["н", "KeyY", 1085, 1085],
                ["г", "KeyU", 1075, 1075],
                ["ш", "KeyI", 1096, 1096],
                ["щ", "KeyO", 1097, 1097],
                ["з", "KeyP", 1079, 1079],
                ["х", "BracketLeft", 1093, 1093],
                ["ъ", "BracketRight", 1098, 1098],
                ["\\", "Backslash", 92, 92],
                ["Delete", "Delete", 46, 0]
            ],

            "line_3": [
                ["CapsLock", "CapsLock", 20, 0],
                ["ф", "KeyA", 1092, 1092],
                ["ы", "KeyS", 1099, 1099],
                ["в", "KeyD", 1074, 1074],
                ["а", "KeyF", 1072, 1072],
                ["п", "KeyG", 1087, 1087],
                ["р", "KeyH", 1088, 1088],
                ["о", "KeyJ", 1086, 1086],
                ["л", "KeyK", 1083, 1083],
                ["д", "KeyL", 1076, 1076],
                ["ж", "Semicolon", 1078, 1078],
                ["э", "Quote", 1101, 1101],
                ["Enter", "Enter", 13, 13]
            ],
            "line_4": [
                ["Shift", "ShiftLeft", 16, 0],
                ["я", "KeyZ", 1103, 1103],
                ["ч", "KeyX", 1095, 1095],
                ["с", "KeyC", 1089, 1089],
                ["м", "KeyV", 1084, 1084],
                ["и", "KeyB", 1080, 1080],
                ["т", "KeyN", 1090, 1090],
                ["ь", "KeyM", 1100, 1100],
                ["б", "Comma", 1073, 1073],
                ["ю", "Period", 1102, 1102],
                [".", "Slash", 46, 46],
                ["ArrowUp", "ArrowUp", 38, 0],
                ["Shift", "ShiftRight", 16, 0]
            ],
            "line_5": [
                ["Control", "ControlLeft", 17, 0],
                ["Meta", "MetaLeft", 91, 0],
                ["Alt", "AltLeft", 18, 0],
                [" ", "Space", 32, 32],
                ["Control", "ControlRight", 17, 0],
                ["ArrowLeft", "ArrowLeft", 37, 0],
                ["ArrowDown", "ArrowDown", 40, 0],
                ["ArrowRight", "ArrowRight", 39, 0],
                ["Alt", "AltRight", 18, 0]
            ],
        },
        "shift": {
            "line_1": [
                ["Ё", "Backquote", 1025, 1025],
                ["!", "Digit1", 33, 33],
                ["@", "Digit2", 64, 64],
                ["#", "Digit3", 35, 35],
                ["$", "Digit4", 36, 36],
                ["%", "Digit5", 37, 37],
                ["^", "Digit6", 94, 94],
                ["&", "Digit7", 38, 38],
                ["*", "Digit8", 42, 42],
                ["(", "Digit9", 40, 40],
                [")", "Digit0", 41, 41],
                ["_", "Minus", 95, 95],
                ["+", "Equal", 43, 43],
                ["Backspace", "Backspace", 8, 0]
            ],
            "line_2": [
                ["Tab", "Tab", 9, 0],
                ["Й", "KeyQ", 1049, 1049],
                ["Ц", "KeyW", 1062, 1062],
                ["У", "KeyE", 1059, 1059],
                ["К", "KeyR", 1050, 1050],
                ["Е", "KeyT", 1045, 1045],
                ["Н", "KeyY", 1053, 1053],
                ["Г", "KeyU", 1043, 1043],
                ["Ш", "KeyI", 1064, 1064],
                ["Щ", "KeyO", 1065, 1065],
                ["З", "KeyP", 1047, 1047],
                ["Х", "BracketLeft", 1061, 1061],
                ["Ъ", "BracketRight", 1066, 1066],
                ["/", "Backslash", 47, 47],
                ["Delete", "Delete", 46, 0]
            ],
            "line_3": [
                ["CapsLock", "CapsLock", 20, 0],
                ["Ф", "KeyA", 1060, 1060],
                ["Ы", "KeyS", 1067, 1067],
                ["В", "KeyD", 1042, 1042],
                ["А", "KeyF", 1040, 1040],
                ["П", "KeyG", 1055, 1055],
                ["Р", "KeyH", 1056, 1056],
                ["О", "KeyJ", 1054, 1054],
                ["Л", "KeyK", 1051, 1051],
                ["Д", "KeyL", 1044, 1044],
                ["Ж", "Semicolon", 1046, 1046],
                ["Э", "Quote", 1069, 1069],
                ["Enter", "Enter", 13, 13]
            ],
            "line_4": [
                ["Shift", "ShiftLeft", 16, 0],
                ["Я", "KeyZ", 1071, 1071],
                ["Ч", "KeyX", 1063, 1063],
                ["С", "KeyC", 1057, 1057],
                ["М", "KeyV", 1052, 1052],
                ["И", "KeyB", 1048, 1048],
                ["Т", "KeyN", 1058, 1058],
                ["Ь", "KeyM", 1068, 1068],
                ["Б", "Comma", 1041, 1041],
                ["Ю", "Period", 1070, 1070],
                [",", "Slash", 44, 44],
                ["ArrowUp", "ArrowUp", 38, 0],
                ["Shift", "ShiftRight", 16, 0]
            ],
            "line_5": [
                ["Control", "ControlLeft", 17, 0],
                ["Meta", "MetaLeft", 91, 0],
                ["Alt", "AltLeft", 18, 0],
                [" ", "Space", 32, 32],
                ["Control", "ControlRight", 17, 0],
                ["ArrowLeft", "ArrowLeft", 37, 0],
                ["ArrowDown", "ArrowDown", 40, 0],
                ["ArrowRight", "ArrowRight", 39, 0],
                ["Alt", "AltRight", 18, 0]
            ],
        },
    },
};

document.addEventListener("DOMContentLoaded", (event) => {
    localStorage.setItem("Lang", "en");

    var centeredDiv = document.createElement("div");
    centeredDiv.classList.add("centered");
    centeredDiv.innerHTML = '<p class="title">Denis\' keyboard</p><textarea class="body--textarea textarea" id="textarea" rows="5" cols="50"></textarea><div class="body--keyboard keyboard" id="keyboard"></div>';
    document.body.appendChild(centeredDiv);

    centeredDiv = document.querySelector(".centered");

    for (let i = 0; i < 5; i++) {
        let lineBox = document.createElement("div");
        lineBox.classList.add("keyboard--row", "row");
        keyboard.append(lineBox);
    }

    let OSInfo = document.createElement("p");
    let switchLangInfo = document.createElement("p");

    OSInfo.classList.add("description");
    switchLangInfo.classList.add("language");

    OSInfo.innerText = "Клавиатура создана в операционной системе Windows";
    switchLangInfo.innerText = "Для переключения языка комбинация: левыe ctrl + alt";

    document.body.append(OSInfo);
    document.body.append(switchLangInfo);

    let btnLines = keyboard.querySelectorAll(".row");

    for (let element in objLines) {
        objLines[element].forEach((item, ind) => {
            let divBtn = document.createElement("div");
            let engLang = document.createElement("div");
            let rusLang = document.createElement("div");

            engLang.classList.add("eng", "hidden");
            rusLang.classList.add("rus", "hidden")

            divBtn.classList.add("keyboard--key", "key", `${item}`);
            divBtn.append(engLang, rusLang);
            btnLines[parseInt(element.split("_")[element.split("_").length - 1]) - 1].append(divBtn);

        });
    }

    fillBtns(obj, objLines, btnLines);

    if (localStorage.getItem("Lang") == "en") {
        let arr = document.querySelectorAll(".eng");
        arr.forEach(element => {
            element.classList.remove("hidden");
            element.querySelector(".caseDown").classList.remove("hidden");
        });
    } else if (localStorage.getItem("Lang") == "ru") {
        let arr = document.querySelectorAll(".rus");
        arr.forEach(element => {
            element.classList.remove("hidden");
            element.querySelector(".caseDown").classList.remove("hidden");
        });
    } else {
        alert("You language is not defined");
    }

    document.onkeydown = event => {
        document.querySelector("." + event.code).classList.toggle("active");
        switch (event.key) {
            case "Control": ctrFlag = true;
                break;
            case "Alt": altFlag = true;
                break;
            case "CapsLock": CapsLockFlag = true;
                break;
        }
        if (ctrFlag && altFlag) {
            if(localStorage.getItem("Lang") == "en")
                localStorage.setItem("Lang", "ru");
            else
                localStorage.setItem("Lang", "en");

            changeLang(event);
        }
    }

    document.onkeyup = event => {
        document.querySelector("." + event.code).classList.toggle("active");
        switch (event.key) {
            case "Control": ctrFlag = false;
                break;
            case "Alt": altFlag = false;
                break;
        }        
        resultString += String.fromCharCode(event.keyCode);
        textarea.innerText = textarea.innerText + resultString;
    }   

    window.onstorage = changeLang(event);

});

function changeLang(event) {
    if (localStorage.getItem("Lang") == "en") {

        let arrEng = document.querySelectorAll(".eng");
        arrEng.forEach(element => {
            element.classList.remove("hidden");
            element.querySelector(".caseDown").classList.remove("hidden");
        });

        let arrRus = document.querySelectorAll(".rus");
        arrRus.forEach(element => {
            element.classList.add("hidden");
            element.querySelector(".caseDown").classList.add("hidden");
        });

    } else if (localStorage.getItem("Lang") == "ru") {

        let arrEng = document.querySelectorAll(".eng");
        arrEng.forEach(element => {
            element.classList.add("hidden");
            element.querySelector(".caseDown").classList.add("hidden");
        });

        let arrRus = document.querySelectorAll(".rus");
        arrRus.forEach(element => {
            element.classList.remove("hidden");
            element.querySelector(".caseDown").classList.remove("hidden");
        });
    } else {
        alert("You language is not defined");
    }
};

function fillBtns(obj, objLines, btnLines) {

    let engUnshift = obj.eng.unshift;
    let engShift = obj.eng.shift;
    let rusUnshift = obj.rus.unshift;
    let rusShift = obj.rus.shift;


    btnLines.forEach((element, index) => {
        let i = index + 1;
        let line = "line_" + i;

        objLines[line].forEach((btn, ind) => {

            let button = element.querySelector("." + btn);

            button.addEventListener("mousedown", (event) => {
                event.target.parentNode.parentNode.classList.add("active");
                //resultString += String.fromCharCode(event.charCode);
            });

            button.addEventListener("mouseup", (event) => {
                event.target.parentNode.parentNode.classList.remove("active");

                switch (event.key) {
                    case "Control": ctrFlag = true;
                        break;
                    case "Alt": altFlag = true;
                        break;
                    case "CapsLock": CapsLockFlag = true;
                        break;
                }
                if (ctrFlag && altFlag) {
                    if(localStorage.getItem("Lang") == "en")
                        localStorage.setItem("Lang", "ru");
                    else
                        localStorage.setItem("Lang", "en");
        
                    changeLang(event);
                }
            });

            let eng = button.querySelector(".eng");
            let rus = button.querySelector(".rus");
            eng.innerHTML = `<span class="caseDown hidden">${engUnshift[line][ind][0] in metaSymb ? metaSymb[engUnshift[line][ind][0]] : engUnshift[line][ind][0]}</span><span class="caseUp hidden">${engShift[line][ind][0] in metaSymb ? metaSymb[engUnshift[line][ind][0]] : engUnshift[line][ind][0]}</span>`;
            rus.innerHTML = `<span class="caseDown hidden">${rusUnshift[line][ind][0] in metaSymb ? metaSymb[rusShift[line][ind][0]] : rusUnshift[line][ind][0]}</span><span class="caseUp hidden">${rusShift[line][ind][0] in metaSymb ? metaSymb[rusShift[line][ind][0]] : rusShift[line][ind][0]}</span>`;

        });

    });
}
