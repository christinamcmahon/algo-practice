// Given a singly linked list, determine if it is a palindrome.

var isPalindrome = function (head) {
    if (!head || !head.next) return true
    let copy = [], prev = null, next
    while (head) {
        copy.push(head.val)
        next = head.next
        head.next = prev
        prev = head
        head = next
    }

    let i = 0
    head = prev

    while (head) {
        if (head.val !== copy[i]) return false
        head = head.next
        i++
    }
    return true
};