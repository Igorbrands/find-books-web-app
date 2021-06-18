function formatAuthors(authors: [string]) {
  authors.join();
}

function removeTags(str: string | undefined) {
  if (str === null || str === '') return false;
  else str = str?.toString();

  return str?.replace(/(<([^>]+)>)/gi, '');
}

export { formatAuthors, removeTags };
