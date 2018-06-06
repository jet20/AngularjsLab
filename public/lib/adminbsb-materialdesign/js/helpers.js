(function(w) {
    'use strict';

    w.hexToRgb = function(hexCode) {
        var patt = /^#([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})$/;
        var matches = patt.exec(hexCode);
        var rgb = "rgb(" + parseInt(matches[1], 16) + "," + parseInt(matches[2], 16) + "," + parseInt(matches[3], 16) + ")";
        return rgb;
    };

    w.hexToRgba = function(hexCode, opacity) {
        var patt = /^#([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})$/;
        var matches = patt.exec(hexCode);
        var rgb = "rgba(" + parseInt(matches[1], 16) + "," + parseInt(matches[2], 16) + "," + parseInt(matches[3], 16) + "," + opacity + ")";
        return rgb;
    };
})(window);