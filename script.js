var popup;

WA.onEnterZone('welcomeZone', () => {
    popup = WA.openPopup("welcomePopup", 'Welcome to the PHP Community WorkAdventure map!', [{
        label: "Next",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
            step2();
        }
    }]);
})

function step2() {
    popup = WA.openPopup("welcomePopup", 'Feel free to invite any PHPriends here to discuss PHP related matters!', [{
        label: "Next",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
            step3();
        }
    }]);
}

function step3() {
    popup = WA.openPopup("welcomePopup", 'You can also organize meetups here!', [{
        label: "Next",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
            step4();
        }
    }]);
}

function step4() {
    popup = WA.openPopup("welcomePopup", "A question? Moderation issue? Contact the administrator: d.negrier\n@thecodingmachine.com", [{
        label: "Got it!",
        className: "success",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }]);
}

WA.onLeaveZone('welcomeZone', () => {
    if (popup) {
        popup.close();
    }
});
