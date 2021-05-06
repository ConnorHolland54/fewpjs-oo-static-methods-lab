class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace( /[^A-Za-z0-9 '-]/g, '' )
  }

  static titleize(string) {
    const exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ];
    let result = [];

    for(let word of string.split(" ")) {
      if (exceptions.includes(word) && word != string.split(" ")[0]) {
        result.push(word)
      } else {
        result.push(word.charAt(0).toUpperCase() + word.slice(1))
      }
    }
    return result.join(" ")
  }
}
