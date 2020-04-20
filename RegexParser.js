function isMatch(text, pattern) {
    // edge cases: empty text or pattern, pattern is just "*"
    // if text is empty but pattern is not empty, return false
    // if both are empty, return true
    // if pattern is empty, return false (?) 
    // track indexes of text and pattern 
    let textIndex = 0
    // if pattern[i] is a ".", then skip an index in text and move on
    let len = pattern.length > text.length ? pattern.length : text.length
    for (let i = 0; i < len; i++) {
        if (pattern[i] === text[textIndex] || pattern[i] === ".") {
            textIndex++
        } else if (pattern[i] === "*") {
            while (text[textIndex] === pattern[i - 1]) {
                textIndex++
            }
        } else if (pattern[i + 1] === "*") {
            break
        } else if (pattern[i] !== text[textIndex]) {
            return false
        }
    }
    return true
    // if pattern[i] is a "*", then check pattern[i-1] and go through text until you reach something that does not match that
    // if pattern[i] isn't one of the above, just compare with text[j]
    // if you ever get through all of those without a match, return false
    // if you reach the end of both, return true
}