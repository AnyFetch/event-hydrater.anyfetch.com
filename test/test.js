'use strict';

require('should');

var hydrater = require('../lib/');

describe('Test changes', function() {
  it('returns the correct information', function(done) {
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

  it('returns an empty changes without start date', function(done) {
    var document = {
      metadata: {}
    };

    var changes = {};

    hydrater(null, document, changes, function(err, changes) {
      changes.should.not.have.property('metadata');
      done();
    });
  });
});
