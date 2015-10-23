'use strict';


describe('test env', function(){

  it('jasmine is ready', function() {
    expect(jasmine).toBeDefined();
  });

  it('Polymer is ready', function() {
    expect(Polymer).toBeDefined();
  });

});


xdescribe('<flip-card>', function(){

  var el;

  beforeEach(function() {
    el = document.createElement('flip-card')
  });

  it('flip function adds flipped class', function() {
  	expect(el.classList).not.toContain('flipped');
  	el.flip();
  	expect(el.classList).toContain('flipped');
  });

});