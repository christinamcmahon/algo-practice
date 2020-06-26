// implement a regex expression function that supports the '.' and '*' symbols
// return true if the text matches the pattern as a regular expression

function isMatch(text, pattern) {
    // edge cases: empty text or pattern, pattern is just "*"
    // if text is empty but pattern is not empty, return false
    // if both are empty, return true
    // if pattern is empty, return false (?) 
    if (!pattern.includes(".") && !pattern.includes("*")) {
        return text === pattern
    }
    let textIndex = 0
    let len = pattern.length > text.length ? pattern.length : text.length
    for (let patternIndex = 0; patternIndex <= len && textIndex < text.length; patternIndex++) {
        if (pattern[patternIndex] === text[textIndex] || pattern[patternIndex] === ".") {
            textIndex++
        } else if (pattern[patternIndex] === "*") {
            while (text[textIndex] === pattern[patternIndex - 1]) {
                textIndex++
            }
        } else if (pattern[patternIndex + 1] === "*") {
            break
        } else if (pattern[patternIndex] !== text[textIndex]) {
            return false
        }
    }
    return textIndex >= text.length - 1
    // track indexes of text and pattern 
    // if pattern[i] is a ".", then skip an index in text and move on
    // if pattern[i] is a "*", then check pattern[i-1] and go through text until you reach something that does not match that
    // if pattern[i] isn't one of the above, just compare with text[j]
    // if you ever get through all of those without a match, return false
    // if you reach the end of both, return true
}

// function isMatch(text, pattern) {
//     if (!pattern.includes(".") && !pattern.includes("*")) {
//         return text === pattern
//     }
//     let textIndex = 0
//     let len = pattern.length > text.length ? pattern.length : text.length
//     for (let patternIndex = 0; patternIndex <= len && textIndex < text.length; patternIndex++) {
//       console.log(`pattern[${patternIndex}]: ${pattern[patternIndex]} text[${textIndex}]: ${text[textIndex]}`)
//         if (pattern[patternIndex] === text[textIndex] || pattern[patternIndex] === ".") {
//             textIndex++
//         } else if (pattern[patternIndex] === "*") {
//             while (text[textIndex] === pattern[patternIndex - 1]) {
//                 textIndex++
//             }
//         } else if (pattern[patternIndex + 1] === "*") {
//             console.log("breaking")
//             break
//         } else if (pattern[patternIndex] !== text[textIndex]) {
//             return false
//         }
//     }
//     console.log("left loop")
//     return textIndex >= text.length - 1
// };

// console.log(isMatch("acd", "ab*c."))
