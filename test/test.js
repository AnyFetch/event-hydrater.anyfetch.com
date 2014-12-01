'use strict';

require('should');

var hydrater = require('../lib/');

describe('Test changes', function() {
  it('returns the correct informations', function(done) {
    var document = {
      metadata: {
        startDate: new Date()
      }
    };

    var changes = {};

    hydrater(null, document, changes, function(err, changes) {
      changes.should.have.property('modification_date', document.metadata.startDate);
      done();
    });
  });

  it('returns null without start date', function(done) {
    var document = {
      metadata: {}
    };

    var changes = {};

    hydrater(null, document, changes, function(err, changes) {
      if(changes !== null) {
        return done(new Error('Changes should be null'));
      }

      done();
    });
  });
});
