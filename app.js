(function(){
  'use strict';

  /**
  * Variable to store the loaded data
  **/
  var obj = null;

  /**
  * Extends the _item object with one property and method
  **/
  function extendItem(_item){
    Object.defineProperties(_item,{
        id: {
          configurable: true,
          enumerable: false,
          get: function(){
            console.log(this);
            return this.data.id;
          }
        },
        getId: {
          configurable: true,
          enumerable: false,
          value: function(){
            console.log(this);
            return this.data.id;
          }
        }
    });
  };

  window.loadData = function(){
    $.ajax({
      url: 'resource.json?nocache=' + new Date().getTime().toString(),
      contentType: 'application/json'
    }).done(function(_response){
      obj = _response;
      obj.items.forEach(extendItem);
    });
  };

  window.extensionCheck = function(){
    var item = obj.items[0],
        test1 = item.getId(),
        test2 = item.id;
  };

})();
