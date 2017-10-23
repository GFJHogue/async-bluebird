var async = require('../lib');
var expect = require('chai').expect;
var assert = require('assert');

describe('times', function() {

    it('times', function(done) {
        async.times(5, function(n, next) {
            next(null, n);
        }).then((results) => {
          expect(results).to.eql([0,1,2,3,4]);
          done();
        });
    });

    it('times 3', function(done) {
        var args = [];
        async.times(3, function(n, callback){
            setTimeout(function(){
                args.push(n);
                callback();
            }, n * 25);
        }).then(() => {
          expect(args).to.eql([0,1,2]);
          done();
        });
    });

    it('times 0', function(done) {
        async.times(0, function(n, callback){
            assert(false, 'iteratee should not be called');
            callback();
        }).then(() => {
          assert(true, 'should call callback');
          done();
        });
    });

    it('times error', function(done) {
        async.times(3, function(n, callback){
            callback('error');
        }).catch((err) => {
          expect(err.message).to.equal('error');
          done();
        });
    });

    it('timesSeries', function(done) {
        var call_order = [];
        async.timesSeries(5, function(n, callback){
            setTimeout(function(){
                call_order.push(n);
                callback(null, n);
            }, 100 - n * 10);
        }).then((results) => {
          expect(call_order).to.eql([0,1,2,3,4]);
          expect(results).to.eql([0,1,2,3,4]);
          done();
        });
    });

    it('timesSeries error', function(done) {
        async.timesSeries(5, function(n, callback){
            callback('error');
        }).catch((err) => {
          expect(err.message).to.equal('error');
          done();
        });
    });

    it('timesLimit', function(done) {
        var limit = 2;
        var running = 0;
        async.timesLimit(5, limit, function (i, next) {
            running++;
            assert(running <= limit && running > 0, running);
            setTimeout(function () {
                running--;
                next(null, i * 2);
            }, (3 - i) * 10);
        }).then((results) => {
          expect(results).to.eql([0, 2, 4, 6, 8]);
          done();
        });
    });
});
