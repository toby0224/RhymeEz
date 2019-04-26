const API_KEY = "aaf56b7a72b7a246ca00d0197c80a2a5bfb3faebf0d44020d";
// getRhymes
export const getRhymes = word => {
  const URL = `https://api.wordnik.com/v4/word.json/${word}/relatedWords?useCanonical=false&relationshipTypes=rhyme&limitPerRelationshipType=499&api_key=${API_KEY}`;
  return fetch(URL).then(res => res.json()); // return a json to client
};

// getEquivalents
export const getEquivalents = word => {
  const URL = `https://api.wordnik.com/v4/word.json/${word}/relatedWords?useCanonical=false&relationshipTypes=equivalent&limitPerRelationshipType=499&api_key=${API_KEY}`;

  return fetch(URL).then(res => res.json()); // return a json to client
};

// getAntonyms
export const getAntonyms = word => {
  const URL = `https://api.wordnik.com/v4/word.json/${word}/relatedWords?useCanonical=false&relationshipTypes=antonym&limitPerRelationshipType=499&api_key=${API_KEY}`;
  return fetch(URL).then(res => res.json()); // return a json to client
};

// getSynonyms
export const getSynonyms = word => {
  const URL = `https://api.wordnik.com/v4/word.json/${word}/relatedWords?useCanonical=false&relationshipTypes=synonym&limitPerRelationshipType=499&api_key=${API_KEY}`;
  return fetch(URL).then(res => res.json()); // return a json to client
};

export const getDefinition = word => {
  const URL = `https://api.wordnik.com/v4/word.json/${word}/definitions?limit=50&includeRelated=false&sourceDictionaries=all&useCanonical=false&includeTags=false&api_key=${API_KEY}`;
  return fetch(URL).then(res => res.json()); // return a json to client
};
