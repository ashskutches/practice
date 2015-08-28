var test = require('kludjs');

reverse = function(input) {
  new_string = ""
  for (i = 0; i < input.length; i++) {
    new_string += input[input.length - (1+i)]
  }
  return new_string
}

test('Reversing strings', function() {
    ok(reverse, 'exists');
    ok(reverse('Jim Bob') != 'Jim Bob', 'does not return original value');
    ok(reverse('abc') == 'cba', 'reverses plain string');
    ok(reverse('abc def') == 'fed cba', 'handles spaces');
});


