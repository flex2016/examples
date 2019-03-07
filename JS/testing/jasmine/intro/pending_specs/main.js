
describe("Pending specs", function(){

  xit("can start with an xit", function(){
    expect(true).toBe(true);
  });

  it("is a pending test if there is no callback function");

  it("is pending if the pending function is invoked inside the callback", function(){
    expect(2).toBe(2);
    pending();
  });

});
