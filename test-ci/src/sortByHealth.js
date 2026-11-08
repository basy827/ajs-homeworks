export function sortByHealth(characters) {
  return [...characters].sort((first, second) => second.health - first.health);
}

export default sortByHealth;
