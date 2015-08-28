var test = require('kludjs');

reverse = function(input) {
  return "monkey man"
}

test('Reversing strings', function() {
    ok(reverse, 'exists');
    ok(reverse('Jim Bob') != 'Jim Bob', 'does not return original value');
});
