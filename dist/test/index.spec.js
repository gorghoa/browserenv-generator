/// <reference path="../typings/main.d.ts" />
"use strict";
/**
 * Module dependencies.
 */
var chai = require('chai');
var env_publisher_1 = require('../env-publisher');
/**
 * Globals
 */
var expect = chai.expect;
/**
 * Unit tests
 */
describe('EnvPublisher:', function () {
    describe('generateBrowserEnv', function () {
        var sut = new env_publisher_1.default({
            GERARD_LENORMAND: "chanteur",
            FILTEROUT_OKI: "doki",
            SYLVIE_VARTAN: "chanteuse",
            FILTEROUT_COCO: "beloeil"
        }, 'FILTEROUT_');
        it('should generate string with the env values', function () {
            var result = sut.generateBrowserEnv().split("\n").map(function (item) { return item.trim(); });
            expect(result).to.contain("window.__env.OKI = 'doki';");
            expect(result).to.contain("window.__env.COCO = 'beloeil';");
        });
        it('should generate valid code', function () {
            var result = sut.generateBrowserEnv();
            expect(function () {
                eval(sut.generateBrowserEnv());
            }).to.not.throw(SyntaxError);
        });
    });
    describe('filterEnvironmentVariables', function () {
        it('should filter the wanted environment variables', function (done) {
            var sut = new env_publisher_1.default({
                GERARD_LENORMAND: "chanteur",
                FILTEROUT_OKI: "doki",
                SYLVIE_VARTAN: "chanteuse",
                FILTEROUT_COCO: "beloeil"
            }, 'FILTEROUT_');
            expect(sut.filterEnvironmentVariables()).to.deep.equal({ COCO: 'beloeil', OKI: 'doki' });
            done();
        });
    });
});
