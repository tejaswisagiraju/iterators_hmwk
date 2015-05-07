// THIS IS YOUR CUSTOM JAVASCRIPT UTILITY LIBRARY
// This file is already included in you project!
// Make use of your utility functions, and create some new ones!

(function(){

    this.myUtils = {}

    myUtils = {}

    myUtils.myEach = function myEach(arr, cb){
        var len = arr.length;
        for(var i=0; i<len; i++){
            cb(arr[i], i, arr);
        }
    }

/* function myMap(arr, cb){
  var len = arr.length;
  var newArr = [];
  for(var i=0; i<len; i++){
     newArr[i] = cb(arr[i], i, arr);
  }
  return newArr;
}

*/
    // myUtils.myMap
    myUtils.myMap = function myMap(arr, cb) {
        var len = arr.length;
        var newArr = [];
        
        for(var i = 0; i < len; i++) {
            newArr[i] = cb(ar[i],1,arr);
        }
        return newArr
    }
    
    // myUtils.myReduce
    myUtils.myReduce = function myReduce(arr,cb,val) {
        var len = arr.length;
        val = val || 0;
        for(var i =0; i <len; i++) {
            val  = cb(val, arr[i],i,arr)
        }
        
        return val;

    }

    // myUtils.buildElement
   myUtils.buildElement = function buildElement(htmlTag, htmlString) {
        return "<" + htmlTag + ">" + htmlString+"</"+htmlTag + ">";
    }

  myUtils.toDollarAmount = function toDollarAmount(amount) {
        return parseFloat(Math.round(amount * 100) / 100).toFixed(2);
    }
    // myUtils.toCurrencyString;

myUtils.toCurrencyString = function toCurrencyString( num, currencySign) {
        roundedNum = toDollarAmount(num);
        return currencySign + roundedNum; 
    }
    
}.call(this))
