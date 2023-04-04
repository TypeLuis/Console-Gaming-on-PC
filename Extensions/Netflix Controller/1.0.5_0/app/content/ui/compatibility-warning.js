class CompatibilityWarningBar extends NoticeBar {
    constructor() {
        let notice = (`
            No gamepad with a <a href='https://www.w3.org/TR/gamepad/#remapping' alt='Standard mapping' target='_blank'>
            standard mapping</a> found. Gamepad interface may not work as expected.
        `);
        super(notice, 'gamepad-interface-warning-bar', 'showCompatibilityWarning');
    }

    getPriority() {
        return 10;
    }
}