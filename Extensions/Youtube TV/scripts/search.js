window.addEventListener("keydown", (e) => {
    const href = document.location.href
    if (!href.includes("search?")) return
    // R3 Button
    if (e.key === 'Control') {
        const clearElement = document.getElementsByClassName("yt-keyboard-key--action-key-text")[2]
        clickElement(clearElement)
    }

    // LB Button
    if (e.key === 'Tab') {
        const deleteElement = document.getElementsByClassName("yt-keyboard-key--backspace yt-keyboard-key")[0]
        clickElement(deleteElement)
    }

    // Start Button
    if (e.key === "Insert") {
        const searchElement = document.getElementsByClassName("yt-keyboard-key--action-key-text")[3]
        clickElement(searchElement)
    }

}, true)


const triggerMouseEvent = (node, eventType) => {
    const clickEvent = document.createEvent('MouseEvents');
    clickEvent.initEvent(eventType, true, true);
    node.dispatchEvent(clickEvent);
}

const clickElement = (element) => {
    triggerMouseEvent(element, "mouseover");
    triggerMouseEvent(element, "mousedown");
    triggerMouseEvent(element, "mouseup");
    triggerMouseEvent(element, "click");
}