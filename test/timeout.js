var async = require('../lib');
var expect = require('chai').expect;

describe('timeout', function () {

    it('timeout with series', function(done){
        async.series([
            async.timeout(function asyncFn(callback) {
                setTimeout(function() {
                    callback(null, 'I didn\'t time out');
                }, 25);
            }, 50),
            async.timeout(function asyncFn(callback) {
                setTimeout(function() {
                    callback(null, 'I will time out');
                }, 75);
            }, 50)
        ]).catch((err) => {
          expect(err.message).to.equal('Callback function "asyncFn" timed out.');
          expect(err.code).to.equal('ETIMEDOUT');
          expect(err.info).to.equal(undefined);
          done();
        });
    });

    it('timeout with series and info', function (done) {
        var info = { custom: 'info about callback' };
        async.series([
            async.timeout(function asyncFn(callback) {
                setTimeout(function() {
                    callback(null, 'I didn\'t time out');
                }, 25);
            }, 50),
            async.timeout(function asyncFn(callback) {
                setTimeout(function() {
                    callback(null, 'I will time out');
                }, 75);
            }, 50, info)
        ]).catch((err) => {
          expect(err.message).to.equal('Callback function "asyncFn" timed out.');
          expect(err.code).to.equal('ETIMEDOUT');
          expect(err.info).to.equal(info);
          done();
        });
    });

    it('timeout with parallel', function(done){
        async.parallel([
            async.timeout(function asyncFn(callback) {
                setTimeout(function() {
                    callback(null, 'I didn\'t time out');
                }, 25);
            }, 50),
            async.timeout(function asyncFn(callback) {
                setTimeout(function() {
                    callback(null, 'I will time out');
                }, 75);
            }, 50)
        ]).catch((err) => {
          expect(err.message).to.equal('Callback function "asyncFn" timed out.');
          expect(err.code).to.equal('ETIMEDOUT');
          expect(err.info).to.equal(undefined);
          done();
        });
    });

    it('timeout with multiple calls (#1418)', function(done) {
        var timeout = async.timeout(function asyncFn(n, callback) {
            if (n < 1) {
                setTimeout(function() {
                    callback(null, 'I will time out');
                }, 75);
            } else {
                async.setImmediate(function() {
                    callback(null, 'I didn\'t time out');
                })
            }
        }, 50);

        async.series([
            function(cb) {
                timeout(0, function(err, result) {
                    expect(err.message).to.equal('Callback function "asyncFn" timed out.');
                    expect(err.code).to.equal('ETIMEDOUT');
                    expect(err.info).to.equal(undefined);
                    expect(result).to.equal(undefined);
                    cb();
                });
            },
            function(cb) {
                timeout(1, function(err, result) {
                    expect(err).to.equal(null);
                    expect(result).to.equal('I didn\'t time out');
                    cb();
                });
            }
        ]).then(() => done());
    })
});
