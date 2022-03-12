export function makeNode(ch) {
  this.ch = ch;
  this.isTerminal = false;
  this.map = {};
  this.words = [];
}

export function add(str, i, root) {
  const newStr = str.toLowerCase();
  if (i === newStr.length) {
    root.isTerminal = true;
    return;
  }

  if (!root.map[newStr[i]]) root.map[newStr[i]] = new makeNode(newStr[i]);

  root.words.push(newStr);
  add(newStr, i + 1, root.map[newStr[i]]);
}

export function search(str, i, root) {
  if (i === str.length) return root.words;

  if (!root.map[str[i]]) return [];
  return search(str, i + 1, root.map[str[i]]);
}
