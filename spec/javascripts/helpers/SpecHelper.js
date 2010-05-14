function fixture(element) {
  $('<div id="fixtures"/>').append(element).appendTo("body");
}

function teardownFixtures() {
  $("#fixtures").remove();
}

function triggerAndReturnEvent(element, name, data) {
  var event = new $.Event(name);
  $(element).trigger(event, data);
  return event;
}

var CustomMatchers = {
  toPreventDefaultOn: function() { 
    var event = triggerAndReturnEvent(this.actual, "click");
    return !event.isDefaultPrevented();
  },
  
  toNotPreventDefaultOn: function() { 
    var event = triggerAndReturnEvent(this.actual, "click");
    return event.isDefaultPrevented();
  }
};

beforeEach(function(){ this.addMatchers(CustomMatchers); });
