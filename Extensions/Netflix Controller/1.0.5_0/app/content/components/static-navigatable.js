class StaticNavigatable extends Navigatable {
    constructor() {
        super();
        this.position = -1;
    }

    get components() {
        if (!this._components) {
            this._components = this.getComponents();
        }
        return this._components;
    }

    getComponents() {
        throw new TypeError('must implement abstract StaticNavigatable#getComponents');
    }

    getSelectedComponent() {
        return this.components[this.position];
    }

    // can be overriden for custom style component
    getStyleComponent() {
        return this.getSelectedComponent();
    }

    // can be overriden for custom interaction component
    getInteractionComponent() {
        return this.getSelectedComponent();
    }

    // can be overriden for custom interaction
    interact(component) {
        component.click();
    }

    // can be overriden for custom styling, such as with pseudo-styler
    style(component, selected) {

    }

    // can be overriden to disable scrolling into view when selected
    shouldScrollIntoView() {
        return true;
    }

    left() {
        if (this.position > 0) {
            this.select(this.position - 1);
        }
    }

    right() {
        if (this.position < this.components.length - 1) {
            this.select(this.position + 1);
        }
    }

    enter(params) {
        this.select(0);
    }

    exit() {
        this.unselect();
        this.position = -1;
    }

    getActions() {
        return [
            {
                label: 'Select',
                index: StandardMapping.Button.BUTTON_BOTTOM,
                onPress: () => this.interact(this.getInteractionComponent())
            }
        ];
    }

    unselect() {
        if (this.position >= 0) {
            let component = this.getStyleComponent();
            this.style(component, false);
            component.style.outline = '0';
        }
    }

    select(position) {
        this.unselect();
        this.position = position;
        let component = this.getStyleComponent();
        this.style(component, true);
        component.style.outline = '3px solid ' + getTransparentNetflixRed(0.7);
        if (this.shouldScrollIntoView()) {
            Navigatable.scrollIntoView(this.getStyleComponent());
        }
    }
}