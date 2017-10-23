var async = require('../lib');
var assert = require('assert');

describe('race', function () {
    it('should call each function in parallel and callback with first result', function raceTest10(done) {
        var finished = 0;
        var tasks = [];
        function eachTest(i) {
            var index = i;
            return function (next) {
                finished++;
                next(null, index);
            };
        }
        for (var i = 0; i < 10; i++) {
            tasks[i] = eachTest(i);
        }
        async.race(tasks).then((result) => {
          assert.strictEqual(result, 0);
          assert.strictEqual(finished, 10);
          done();
        });
    });
    it('should callback with the first error', function raceTest20(done) {
        var tasks = [];
        function eachTest(i) {
            var index = i;
            return function (next) {
                setTimeout(function () {
                    next(new Error('ERR' + index));
                }, 50 - index * 2);
            };
        }
        for (var i = 0; i <= 5; i++) {
            tasks[i] = eachTest(i);
        }
        async.race(tasks).catch((err) => {
          assert.ok(err);
          assert.ok(err instanceof Error);
          assert.strictEqual(err.message, 'ERR5');
          done();
        });
    });
    it('should callback when task is empty', function raceTest30(done) {
        async.race([]).then((result) => {
          assert.strictEqual(typeof result, 'undefined');
          done();
        });
    });
    it('should callback in error the task arg is not an Array', function raceTest40() {
        var errors = [];
        async.race(null).catch((err) => {
          errors.push(err);
          if (errors.length == 2) {
            assert.strictEqual(errors.length, 2);
            assert.ok(errors[0] instanceof TypeError);
            assert.ok(errors[1] instanceof TypeError);
          }
        });
        async.race({}).catch((err) => {
          errors.push(err);
          if (errors.length == 2) {
            assert.strictEqual(errors.length, 2);
            assert.ok(errors[0] instanceof TypeError);
            assert.ok(errors[1] instanceof TypeError);
          }
        });

    });
});
