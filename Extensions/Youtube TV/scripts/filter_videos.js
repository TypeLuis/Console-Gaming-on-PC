// Implementing a virtual keyboard {Keyboard created @ https://codepen.io/typeluis/pen/ZEqdrZd}

const keyboardContainer = document.createElement("div");
keyboardContainer.classList.add("keyboardContainer");
keyboardContainer.tabIndex = -1;
document.body.appendChild(keyboardContainer);

const container = document.createElement("div");
container.classList.add("container");
keyboardContainer.appendChild(container);

const textarea = document.createElement("textarea");

const heading = document.createElement("h2");
heading.textContent = `What words would you like to mute? (To seperate words, use a comma ','). Press ENTER key to confirm and ESC to Cancel.${localStorage.getItem('muted') === null ? "" : ` Current muted (${localStorage.getItem('muted').split(",").join(", ")})`}`;
heading.classList.add('heading')
container.appendChild(heading);

const textDiv = document.createElement("div");
textDiv.classList.add("textarea");
container.appendChild(textDiv);

textDiv.appendChild(textarea);

const keyboard = document.createElement("div");
keyboard.classList.add("keyboard");
container.appendChild(keyboard);

const rowList = [
    ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "Delete"],
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
    ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
    ["z", "x", "c", "v", "b", "n", "m", "Shift"],
    [",", "Space"]
];

rowList.map((array, i) => {
    const row = document.createElement("div");
    row.classList.add("row");
    array.map((item, index) => {
        const button = document.createElement("button");
        button.classList.add("key");
        button.textContent += item;
        if (item.length > 1) button.classList.add(item.toLowerCase());
        else if (item.length === 1) button.classList.add("btn");
        row.appendChild(button);
    });
    keyboard.appendChild(row);
});

const buttons = keyboardContainer.querySelectorAll(".btn");

const delete_btn = keyboardContainer.querySelector(".delete");
const shift_btn = keyboardContainer.querySelector(".shift");
const space_btn = keyboardContainer.querySelector(".space");

let chars = [];

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        textarea.value += btn.innerText;
        chars = textarea.value.split("");
    });
});

delete_btn.addEventListener("click", () => {
    chars.pop();
    textarea.value = chars.join("");
});

space_btn.addEventListener("click", () => {
    chars.push(" ");
    textarea.value = chars.join("");
});

shift_btn.addEventListener("click", () => {
    buttons.forEach((btn) => {
        btn.classList.toggle("upper");
    });
});

const keys = keyboardContainer.getElementsByClassName("key");
let index = 0;
const scaleUp = "scale(1.2)"
const scaleDown = "scale(1)"

keys[index].style.transform = scaleUp;

// https://stackoverflow.com/questions/3149362/how-do-i-capture-a-key-press-or-keydown-event-on-a-div-element
keyboardContainer.addEventListener(
    "keydown",
    (e) => {
        switch (e.key) {
            case "ArrowRight":
                // code block
                keys[index].style.transform = scaleDown;
                index === keys.length - 1 ? (index = 0) : (index += 1);
                keys[index].style.transform = scaleUp;
                break;

            case "ArrowLeft":
                keys[index].style.transform = scaleDown;
                index === 0 ? (index = keys.length - 1) : (index -= 1);
                keys[index].style.transform = scaleUp;
                // code block
                break;

            case "ArrowDown":
                keys[index].style.transform = scaleDown;
                if (index <= 9) index += 11;
                else if (index === 10 || index <= 19) index += 10;
                else if (index === 20 || index <= 28) index += 9;
                else if (index === 29) index += 8;
                else if (index < keys.length - 2) index = keys.length - 1;
                else if (index === keys.length - 1 || index === keys.length - 2) index = 0;
                keys[index].style.transform = scaleUp;
                // code block
                break;

            case "ArrowUp":
                keys[index].style.transform = scaleDown;
                if (index <= 10) index = keys.length - 1;
                else if (index === keys.length - 1 || index === keys.length - 2) index = 30;
                else if (index >= 30) index -= 9;
                else if (index >= 21) index -= 10;
                else if (index >= 11) index -= 11;


                keys[index].style.transform = scaleUp;
                break;

            case "ArrowUp":
                keys[index].style.transform = scaleDown;
                if (index <= 10) index = keys.length - 1;
                else if (index === keys.length - 1 || index === keys.length - 2) index = 30;
                else if (index >= 30) index -= 9;
                else if (index >= 21) index -= 10;
                else if (index >= 11) index -= 11;


                keys[index].style.transform = scaleUp;
                break;

            case "Backspace":
                keys[10].click()
                break;

            // A Button
            case "Enter":
                keys[index].click();
                break;

            // Start Button
            case "Insert":
                keys[index].style.transform = scaleDown;
                index = 0
                keys[index].style.transform = scaleUp;

                if (keyboardContainer.classList.contains('active')) {
                    localStorage.setItem('muted', textarea.value)

                    alert(localStorage.getItem('muted'))
                }
                textarea.value = ''
                keyboardContainer.classList.toggle("active");
                removeOnTV()
                break;

        }
    },
    true
);


// Creates muted words that blocks out videos containing said word
const removeOnTV = () => {
    const title = document.getElementsByClassName('yt-formatted-string ytlr-tile-metadata-renderer__title ytlr-tile-metadata-renderer--dark')
    const mutedWords = localStorage.getItem('muted')

    for (let i = 0; i <= title.length; i++) {
        if (i <= 7) {
            try {
                // returns a list (truthy) if words match, returns null (false) if no words match
                const checkWords = title[i].textContent.toLowerCase().match(new RegExp("\\b(" + mutedWords.split(",").join('|') + ")\\b", "ig"));
                const parentElement = title[i].parentNode.parentNode.parentNode
                if (checkWords) {
                    parentElement.style.display = "none";
                }
                else {
                    parentElement.style.display = "inline-block";
                }
            } catch (error) {
                continue
            }
        }
    }
}

window.addEventListener("keydown", (e) => {
    const href = document.location.href
    if (href.includes("watch?") || href.includes("search?")) return
    // x button
    if (e.key === 'Control') {

        keys[index].style.transform = scaleDown;
        index = 0
        keys[index].style.transform = scaleUp;

        textarea.value = ''
        heading.textContent = `What words would you like to mute? (To seperate words, use a comma ','). Press ENTER key to confirm and ESC to Cancel.${localStorage.getItem('muted') === null ? "" : ` Current muted (${localStorage.getItem('muted').split(",").join(", ")})`}`;
        keyboardContainer.classList.toggle("active");
        keyboardContainer.focus()

        removeOnTV()
    }
    // LB Button
    else if (e.key === 'Tab') alert(localStorage.getItem('muted'))
    // R3 Button
    else if (e.key === 'Delete') {
        alert(`Removed ${localStorage.getItem('muted')}`);
        localStorage.removeItem('muted');
    }
    removeOnTV()
}, true)


removeOnTV();