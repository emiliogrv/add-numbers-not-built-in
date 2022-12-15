# Add numbers without using built in BigInt

Implement a function that adds any two strings that each represent N arbitrarily large non- negative numbers.

Please write and document some unit test cases for your addNumbers function. We are
looking for test cases that cover different aspects of your algorithm logic, e.g. cases you
would have in production to cover regressions.

**Requirements:**

1. The function should be called addNumbers.
2. The function should accept 2 string params.
3. Each string param contains M numbers, separated by spaces.
4. The function must add the numbers in pairs:
    1. Add the 1st number from the first string with the 1st number from the second string.
    2. Add the 2nd number from the first string with the 2nd number from the second
       string.
    3. etc.
5. The output should be the sums of the pairs, separated by spaces.
6. The strings have the same count of numbers.
7. The numbers may include decimal places.
8. **The numbers can can be arbitrarily long, e.g. 1000+ digits.**

**Note: This exercise is intended to implement an algorithm, so please refrain from using
built-in high precision types such as Java's BigInt or python's long integer.**

**Examples:**

```js
addNumbers("123 456 789", "11 22 33")
// return "134 478 822"

addNumbers("123456789012345678901 23456789", "12345678 234567890123456789012")
// return "123456789012358024579 234567890123480245801"

addNumbers("1234567.8901 2.345", "12.34 2345678901.2")
// return "1234580.2301 2345678903.545"
```
