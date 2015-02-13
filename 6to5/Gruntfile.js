'use strict'

module.exports = function (grunt) {
    require("load-grunt-tasks")(grunt); // npm install --save-dev load-grunt-tasks

    grunt.initConfig({
        "6to5": {
            options: {
                         sourceMap: true
                     },
            dist: {
                      files: {
                                 "dist/es6_spec.js": "es6_spec.js"
                             }
                  }
            }
    });

    grunt.registerTask("default", ["6to5"]);
}
