/**
 * Melissa.js
 *
 * Listens to voice input and makes available the ability to respond.
 */
;(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['EventDispatcher, SpeechRecognition'], function() {
            return (root.DefaultAction = factory(EventDispatcher));
        });
    }
    else if (typeof exports === 'object') {
        module.exports = factory(require('EventDispatcher, SpeechRecognition'));
    }
    else {
        root.DefaultAction = factory(root.EventDispatcher, root.SpeechRecognition);
    }
}(this, function() {
    'use strict';

// Constructor _________________________________________________________________

    function Melissa() {
        // Call EventDispatcher superconstructor
        EventDispatcher.call(this);

        this.is_listening = false;

        this.recognition = new SpeechRecognition();
        this.recognition.continuous = true;
        this.recognition.lang = 'en-US';

        this.recognition.addEventListener('result', this.onRecognitionResult.bind(this), false);
    }

    Melissa.prototype = Object.create(EventDispatcher.prototype);

// Public Methods ______________________________________________________________

    Melissa.prototype.listen = function() {
        this.recognition.start();
        this.is_listening = true;
    };

    Melissa.prototype.ignore = function() {
        this.recognition.stop();
        this.is_listening = false;
    };

    Melissa.prototype.speak = function(message) {
        console.log('>> ' + message);
        window.speechSynthesis.speak(new SpeechSynthesisUtterance(message));
    };

    Melissa.prototype.onRecognitionResult = function(e) {
        var result = e.results[0][0];

        this.dispatchEvent(new CustomEvent('result', {
            'detail': {
                'result': result
            }
        }));
    };

// Exports _____________________________________________________________________

    return Melissa;

}));
