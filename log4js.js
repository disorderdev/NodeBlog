
    require('date-utils');
    var formatString = require('util').format;
    var log4js = function(obj) {};

    log4js.TRACE = "TRACE";
    log4js.DEBUG = "DEBUG";
    log4js.INFO = "INFO";
    log4js.WARN = "WARN";
    log4js.ERROR = "ERROR";

    log4js.console = console.log;

    log4js.log = function(msg, level) {
        var d = Date.today();
        d.setTimeToNow();
        var str = d.toFormat('YYYY-MM-DD HH24:MI:SS');
        var message = formatString('%s %s %s\n', str, level, msg);
        if (this.console) {
            this.console(message);
        }
    };

    log4js.trace = function(msg) {
        this.log(msg, this.TRACE);
    }

    log4js.debug = function(msg) {
        this.log(msg, this.DEBUG);
    }

    log4js.info = function(msg) {
        this.log(msg, this.INFO);
    }

    log4js.warn = function(msg) {
        this.log(msg, this.WARN);
    }

    log4js.error = function(msg) {
        this.log(msg, this.ERROR);
    }