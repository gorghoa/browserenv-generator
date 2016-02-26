"use strict";
var EnvPublisher = (function () {
    function EnvPublisher(env, prefix) {
        this.env = env;
        this.prefix = prefix;
    }
    EnvPublisher.prototype.filterEnvironmentVariables = function () {
        var re = new RegExp("^" + this.prefix + "([a-zA-Z0-9_]+)$");
        var keys = Object.keys(this.env).filter(function (key) {
            return re.test(key);
        }).map(function (key) {
            return [key, key.match(re)[1]];
        });
        var results = {};
        for (var i = 0; i < keys.length; i++) {
            results[keys[i][1]] = this.env[keys[i][0]];
        }
        return results;
    };
    EnvPublisher.prototype.generateBrowserEnv = function () {
        var envs = this.filterEnvironmentVariables();
        var init = "(function (window) {\n                window.__env = window.__env || {};\n                ";
        var end = " }(this));";
        var middle = "";
        for (var i in envs) {
            middle += " window.__env." + i + " = '" + envs[i] + "';\n";
        }
        return init + middle + end;
    };
    return EnvPublisher;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = EnvPublisher;
