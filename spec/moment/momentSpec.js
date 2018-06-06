describe("moment", function() {
  var moment = require('../../lib/moment/moment');
  var olympic;

  beforeEach(function() {
    olympic = moment('2008-08-08');
  });

  it("format dates", function() {
    expect(olympic.format()).toEqual('2008-08-08T00:00:00+08:00');
  });

});
