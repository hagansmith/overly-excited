var sentence = 'Jules had really outdone himself this time. He had spray-painted the words “Welcome aliens! Land here!” on the black pavement of the schoolyard. But the principal didn’t like to call home to talk to Jules’s dad. The man was vulgar and would yell on the phone.'

// Create an array that contains the words in the sentence
var sentence_array = sentence.split(' ');


// The addExcitement function should accept the array as the sole argument
function addExcitement (theWordArray) {
    /*
      Write a `for` loop that iterates over the array argument and
      outputs the words.
     */

     for (i = 0; i < sentence_array.length; i++ ) {
     		var workingSentence
     		var counter = 1+i;
     		if (counter%3 === 0) {
     			console.log(sentence_array[i] + '!');
     		} else {

     	console.log(sentence_array[i]);
     }
   } 
}

// Invoke the function and pass in the array
addExcitement(sentence_array);