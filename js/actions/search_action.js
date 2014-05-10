/**
 * Search Action Class
 *
 * Defines a keywords array and a query url parameter, which is used to perform
 * search actions from the run() method.
 */
;(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['DefaultAction'], function() {
            return (root.DefaultAction = factory(DefaultAction));
        });
    }
    else if (typeof exports === 'object') {
        module.exports = factory(require('DefaultAction'));
    }
    else {
        root.DefaultAction = factory(root.DefaultAction);
    }
}(this, function() {
    'use strict';

// Constructor _________________________________________________________________

    function SearchAction() {
        // Empty constructor
    }

    SearchAction.prototype = Object.create(DefaultAction.prototype, {
        action_name: {
            value: 'search'
        },
        action_phrase: {
            value: 'Searching for {query}'
        },
        keywords: {
            enumerable: true,
            writable: true,
            value: ['search', 'find', 'look']
        },
        query_url: {
            enumerable: true,
            writable: true,
            value: 'http://google.com/?q='
        }
});

// Public Methods ______________________________________________________________

    SearchAction.prototype.toString = function() {
        return 'SearchAction';
    };

    SearchAction.prototype.run = function(query) {
        window.location = this.query_url + query;
    };

// Exports _____________________________________________________________________

    return SearchAction;

}));
