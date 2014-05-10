/**
 * Video Search Action
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

    function VideoSearchAction() {
        // Empty constructor
    }

    VideoSearchAction.prototype = Object.create(SearchAction.prototype, {
        action_name: {
            value: 'video search'
        },
        action_phrase: {
            value: 'Searching for videos of {query}'
        },
        keywords: {
            value: ['video', 'videos', 'clip', 'clips', 'movie', 'movies']
        },
        query_url: {
            value: 'http://vimeo.com/search?q='
        }
    });

// Public Methods ______________________________________________________________

    VideoSearchAction.prototype.toString = function() {
        return 'VideoSearchAction';
    };

// Exports _____________________________________________________________________

    return VideoSearchAction;

}));
