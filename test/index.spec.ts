/// <reference path="../typings/main.d.ts" />


/**
 * Module dependencies.
 */
import chai = require('chai');

import EnvPublisher from '../env-publisher';

/**
 * Globals
 */

var expect = chai.expect;

/**
 * Unit tests
 */
describe('EnvPublisher:', () => {


    describe('generateBrowserEnv', () => {
          var sut = new EnvPublisher({
                  GERARD_LENORMAND: "chanteur",
                  FILTEROUT_OKI: "doki",
                  SYLVIE_VARTAN: "chanteuse",
                  FILTEROUT_COCO: "beloeil"
          }, 'FILTEROUT_');


          it('should generate string with the env values', () => {

            var result = sut.generateBrowserEnv().split("\n").map( (item) => item.trim() ) ;
            expect(result).to.contain("window.__env.OKI = 'doki';");
            expect(result).to.contain("window.__env.COCO = 'beloeil';");

          });

          it('should generate valid code', () => {
            var result = sut.generateBrowserEnv();
            expect(() => {
              eval(sut.generateBrowserEnv())
            }).to.not.throw(SyntaxError);
          });

    });

    describe('filterEnvironmentVariables', () => {
        it('should filter the wanted environment variables', (done) => {

          var sut = new EnvPublisher({
                  GERARD_LENORMAND: "chanteur",
                  FILTEROUT_OKI: "doki",
                  SYLVIE_VARTAN: "chanteuse",
                  FILTEROUT_COCO: "beloeil"
            }, 'FILTEROUT_');


            expect(sut.filterEnvironmentVariables()).to.deep.equal({COCO: 'beloeil', OKI: 'doki'});
            done();
      });
    });
});
