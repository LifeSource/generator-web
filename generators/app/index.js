var generators = require("yeoman-generator");


module.exports = generators.Base.extend({

  constructor: function() {
    generators.Base.apply(this, arguments);
  },

  writing: function() {
    this.directory("app", ".");
  },

  install: function() {
    console.log("\nInstalling packages with yarn please wait a moment...");
    this.spawnCommand("yarn");
    });
  }
});
