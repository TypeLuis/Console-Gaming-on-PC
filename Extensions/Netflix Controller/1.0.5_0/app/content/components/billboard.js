class Billboard extends TitlePanel {
    constructor(row) {
        super(row);
    }

    getPanelComponent() {
        let selector = this.row !== undefined ? `#row-${this.row}` : '.billboard-row';
        let billboard = document.querySelector(selector);
        return billboard;
    }

    getButtonSelector() {
        return '.billboard-links';
    }
}