var async = require('../lib');
var expect = require('chai').expect;
var assert = require('assert');

describe('sortBy', function(){
    it('sortBy', function(done) {
        async.sortBy([{a:1},{a:15},{a:6}], function(x, callback){
            setTimeout(function(){callback(null, x.a);}, 0);
        }).then((result) => {
          expect(result).to.eql([{a:1},{a:6},{a:15}]);
          done();
        });
    });

    it('sortBy inverted', function(done) {
        async.sortBy([{a:1},{a:15},{a:6}], function(x, callback){
            setTimeout(function(){callback(null, x.a*-1);}, 0);
        }).then((result) => {
          expect(result).to.eql([{a:15},{a:6},{a:1}]);
          done();
        });
    });

    it('sortBy error', function(done) {
        var error = new Error('asdas');
        async.sortBy([{a:1},{a:15},{a:6}], function(x, callback){
            async.setImmediate(function(){
                callback(error);
            });
        }).catch((err) => {
          expect(err.message).to.equal('asdas');
          done();
        });
    });
});
