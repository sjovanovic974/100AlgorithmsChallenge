// First solution
function htmlEndTagByStartTag(startTag: string): string {
  const endTag = startTag.match(/\w+/);
  return `</${endTag}>`;
}

console.log(htmlEndTagByStartTag("<button type='button' disabled>"));
console.log(htmlEndTagByStartTag('<i>'));
