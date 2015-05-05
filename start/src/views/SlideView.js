/*** SlideView ***/

define(function(require, exports, module) {
    var View = require('famous/core/View');
    var Surface = require('famous/core/Surface');
    var Transform = require('famous/core/Transform');
    var StateModifier = require('famous/modifiers/StateModifier');

    function SlideView() {
        View.apply(this, arguments);
                
        this.rootModifier = new StateModifier({
            size: [400, 450]
        });

        // saving a reference to the new node
        this.mainNode = this.add(this.rootModifier);
    }

    SlideView.prototype = Object.create(View.prototype);
    SlideView.prototype.constructor = SlideView;

    SlideView.DEFAULT_OPTIONS = {};

    module.exports = SlideView;
});
