/**
 * Default Action Class
 *
 * Defines an action name property and provides a run() method, which should be
 * extended by subclasses.
 */
;(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['EventDispatcher'], function() {
            return (root.DefaultAction = factory(EventDispatcher));
        });
    }
    else if (typeof exports === 'object') {
        module.exports = factory(require('EventDispatcher'));
    }
    else {
        root.DefaultAction = factory(root.EventDispatcher);
    }
}(this, function() {
    'use strict';

// Constructor _________________________________________________________________

    function DefaultAction() {
        // Empty constructor
    }

// Public Methods ______________________________________________________________

    DefaultAction.prototype = Object.create(Object.prototype, {
        action_name: {
            enumerable: true,
            writable: false,
            value: null
        },
        action_phrase: {
            enumerable: true,
            writable: false,
            value: null
        }
    });

    DefaultAction.prototype.run = function(query) {
        console.log(query);
    };

// Exports _____________________________________________________________________

    return DefaultAction;

}));
