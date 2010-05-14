describe('confirmation messages', function () {
  afterEach(function(){ teardownFixtures() });

  describe("for links", function(){
    describe("when there is no custom 'confirm' event behavior", function(){
      beforeEach(function(){
        fixture('<a id="target" href="http://www.rubyonrails.org/" data-confirm="Are you sure?">Visit Other Site</a>');
      });

      it('it asks the user to acknowledge a confirmation message', function(){
        spyOn(window, 'confirm');
        $("#target").click();
        expect(window.confirm).wasCalledWith('Are you sure?');
      });

      it('the default target behavior occurs if the user clicks "confirm"', function(){
        spyOn(window, 'confirm').andReturn(true);
        expect("#target").toPreventDefaultOn("click");
      });

      it('the default target behavior does NOT occur if the user clicks "cancel"', function(){
        spyOn(window, 'confirm').andReturn(false);
        expect("#target").toNotPreventDefaultOn("click");
      });
    });
  });
  
});
