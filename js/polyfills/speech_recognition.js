;(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(function() {
            return (root.EventDispatcher = factory());
        });
    }
    else if (typeof exports === 'object') {
        module.exports = factory();
    }
    else {
        root.EventDispatcher = factory();
    }
}(this, function() {
    'use strict';

    function SpeechRecognition() {
        return  window.SpeechRecognition        ||
                window.webkitSpeechRecognition  ||
                window.mozSpeechRecognition     ||
                window.msSpeechRecognition      ||
                null;
    }

// Exports _____________________________________________________________________

    return SpeechRecognition;

}));
