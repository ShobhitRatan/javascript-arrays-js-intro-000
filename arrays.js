var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, element) {
  var array = [1];
  array = ["foo",...array];
  return array;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift('foo');
  return array;
}

function addElementToEndOfArray(array, element) {
  var array = [1];
  array = [...array, 'foo'];
  return array;
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.pop('foo');
  return array;
}
