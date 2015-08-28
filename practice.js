var test = require('kludjs');


reverseSentence = function(input) {
  var input_array = input.split(" ");
  return input_array.reverse().join(" ")
}

test('Reversing sentences', function() {
    ok(reverseSentence, 'exists')
    ok(reverseSentence('funny') == 'funny', 'Maintains words');
    ok(reverseSentence('Funny') == 'Funny', 'Maintains capitals');
    ok(reverseSentence('Funny Stuff') == 'Stuff Funny', 'Reverses sentences');
});

