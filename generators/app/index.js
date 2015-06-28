'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
    prompting: function () {

    },

    writing: {
        app: function () {
            this.fs.copy(
                this.templatePath('gulp-basic-nw/'),
                this.destinationPath('./')
            );
            this.fs.copy(
                this.templatePath('gitignore'),
                this.destinationPath('.gitignore')
            );
            this.fs.copy(
                this.templatePath('gulp-basic-nw/**/.*'),
                this.destinationPath('./')
            );
        }
    },

    install: function () {
        this.installDependencies();
    }
});
