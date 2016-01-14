var generators = require("yeoman-generator");


module.exports = generators.Base.extend({

    constructor: function() {
        generators.Base.apply(this, arguments);
    },

    writing: function() {
        this.directory("app", ".");
    },

    install: function() {
        this.npmInstall();
    }
});
