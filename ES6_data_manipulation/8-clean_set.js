export default function cleanSet(set, startString) {
  if (typeof startString !== 'string' || !startString) {
    return '';
  }

  const setArray = Array.from(set);
  const filteredSet = setArray
    .filter((item) => item.startsWith(startString))
    .map((item) => item.slice(startString.length));
  return filteredSet.join('-');
}
