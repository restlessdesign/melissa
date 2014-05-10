/**
 * Action Map
 *
 * Maintains a map of keywords and action classes.
 */
;(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(function() {
            return (root.ActionMap = factory());
        });
    }
    else if (typeof exports === 'object') {
        module.exports = factory();
    }
    else {
        root.ActionMap = factory();
    }
}(this, function() {
    'use strict';

// Constructor _________________________________________________________________

    function ActionMap() {
        this.map = {};
    }

// Public Methods ______________________________________________________________

    ActionMap.prototype.add = function(keyword, action_class) {
        var mapped_keyword = this.map[keyword];

        if (typeof mapped_keyword !== 'undefined') {
            throw new Error('Keyword collision encountered between ' + action_class.toString() + ' and ' + mapped_keyword.toString() + '!');
        }

        this.map[keyword] = action_class;
    };

    ActionMap.prototype.contains = function(keyword) {
        console.log('contains ' + keyword + '?', typeof this.map[keyword] !== 'undefined');
        return typeof this.map[keyword] !== 'undefined';
    };

// Exports _____________________________________________________________________

    return ActionMap;

}));
