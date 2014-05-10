/**
 * EventDispatcher
 *
 * Establishes an interface for adding, removing, and dispatching events.
 * Other, non-DOM objects can extend from this prototype to gain this
 * functionality.
 */
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

// Constructor _________________________________________________________________

    function EventDispatcher() {
        this.listeners = {};
    }

// Public Methods ______________________________________________________________

    EventDispatcher.prototype.addEventListener = function(event_name, event_handler) {
        if (typeof this.listeners[event_name] === 'undefined') {
            this.listeners[event_name] = [];
        }

        this.listeners[event_name].push(event_handler);

        return true;
    };

    EventDispatcher.prototype.removeEventListener = function(event_name, event_handler) {
        var event_handler_index;
        if (!this.hasEventListener(event_name)) {
            return false;
        }

        event_handler_index = this.listeners[event_name].indexOf(event_handler);
        if (event_handler_index > -1) {
            this.listeners[event_name].splice(event_handler_index, 1);
            return true;
        }

        return false;
    };

    EventDispatcher.prototype.hasEventListener = function(event_name) {
        var event_bucket = this.listeners[event_name],
            event_bucket_exists = typeof event_key !== 'undefined';

        return event_bucket_exists;
    };

    EventDispatcher.prototype.dispatchEvent = function(event_obj) {
        var event_name = event_obj.type;

        this.listeners[event_name].forEach(function(event_handler) {
            event_handler.call(this, event_obj);
        });
    };

// Exports _____________________________________________________________________

    return EventDispatcher;

}));
