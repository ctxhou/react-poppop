const extractCamelCase = s => {
  return s.split(/(?=[A-Z])/).map(function(p) {
      return p.charAt(0).toUpperCase() + p.slice(1);
  });
};

export {
  extractCamelCase
};