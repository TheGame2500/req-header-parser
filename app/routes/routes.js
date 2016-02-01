'use strict';

var root=require("./root.js");
var whoami=require("./whoami.js");

module.exports = function (app){
    root(app);
    whoami(app);
}
