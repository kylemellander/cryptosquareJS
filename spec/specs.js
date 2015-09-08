describe('cryptosquareEncoder', function() {

  it("encodes a 4 letter string", function() {
    expect(cryptosquareEncoder("word")).to.equal("wrod");
  });

  it("encodes a 8 length string", function() {
    expect(cryptosquareEncoder("no way jos")).to.equal("naooy swj")
  })

  it("encodes a sentence string", function(){
    expect(cryptosquareEncoder("dont compare yourself to others, compare yourself to the person you were yesterday")).to.equal("drfcu hotoe toreu enyom spwrt oopee edcut alrra orhrf seyms eetoy peryo neals otys");
  });

  it("encodes another sentence string", function() {
    expect(cryptosquareEncoder("If man was meant to stay on the ground god would have given us roots")).to.equal("imtgd vsfea rwerm ayoog oanou uiont nnlvt wttdd esaoh ghnss eoau")
  });

});
