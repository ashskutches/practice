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
    ok(reverse('1234567891011121314151617181920212223242526272829303132333435363738394041424344454647484950') == '0594847464544434241404938373635343332313039282726252423222120291817161514131211101987654321', 'handles big string');
});


