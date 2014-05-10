/**
 * Image Search Action
 *
 * Forwards search queries to Flickr.
 */
;(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['SearchAction'], function() {
            return (root.SearchAction = factory(SearchAction));
        });
    }
    else if (typeof exports === 'object') {
        module.exports = factory(require('SearchAction'));
    }
    else {
        root.SearchAction = factory(root.SearchAction);
    }
}(this, function() {
    'use strict';

// Constructor _________________________________________________________________

    function ImageSearchAction() {
        // Empty constructor
    }

    ImageSearchAction.prototype = Object.create(SearchAction.prototype, {
        action_name: {
            value: 'image search'
        },
        action_phrase: {
            value: 'Searching for images of {query}'
        },
        keywords: {
            value: ['picture', 'pics', 'image', 'photo']
        },
        query_url: {
            value: 'http://flickr.com/?q='
        }
    });

// Public Methods ______________________________________________________________

    ImageSearchAction.prototype.toString = function() {
        return 'ImageSearchAction';
    };

// Exports _____________________________________________________________________

    return ImageSearchAction;

}));
