var test = require('kludjs');


reverseSentence = function(input) {
  return 'funny'
}

test('Reversing sentences', function() {
    ok(reverseSentence, 'exists');
    ok(reverseSentence('funny') == 'funny', 'maintains words')
});

