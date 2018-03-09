var array_one = ["apple", "dog", "cat", "food","kite","elephant","lunch","book","laptop"];
var array_two = ["dog","goose","kite","meal","laptop"];

function compareArray(arrayOne, arrayTwo){
    var sortedOne = arrayOne;
    var sortedTwo = arrayTwo;
    sortedOne.forEach(function(value,i){
        var firstComp = value.toLowerCase();

        sortedTwo.forEach(function(value2,k){
            var secondComp = value2.toLowerCase();

            if(firstComp === secondComp){
                console.log("It is a match! Both arrays contained " + firstComp)
                console.log("The first array had " + firstComp + " at index " + i);
                console.log("The second array had " + secondComp + " at index " + k);
                console.log("==================================================");
            } 
        })
    })
}

compareArray(array_one, array_two);