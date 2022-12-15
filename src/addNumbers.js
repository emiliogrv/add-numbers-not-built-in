const isValidNumberInput = /^\d+(\.\d+)?(\s\d+(\.\d+)?)*$/

module.exports = function addNumbers (str1 = '', str2 = '') {
  // check if the input strings are valid numbers
  if (!isValidNumberInput.test(str1) || !isValidNumberInput.test(str2)) {
    throw new Error('Input strings must be a valid integer or decimal number')
  }

  // split the input strings into arrays of numbers
  const nums1 = str1.split(' ')
  const nums2 = str2.split(' ')

  // check if the input strings have the same number of numbers
  if (nums1.length !== nums2.length) {
    throw new Error('Input strings must have the same quantity of numbers')
  }

  // add the numbers in pairs and store the results in an array
  const result = []

  for (let index = 0; index < nums1.length; index++) {
    result.push(sumNumbers(nums1[index], nums2[index]))
  }

  // return the result as a string
  return result.join(' ')
}

function sumNumbers (nums1 = '', nums2 = '') {
  // Add integers
  if (!nums1.includes('.') && !nums2.includes('.')) {
    const [sum, carry] = sumIntegers(nums1, nums2)

    return carry ? `${carry}${sum}` : sum
  }

  if (nums1.includes('.') && nums1.includes('.')) {

    const [int1, decimals1] = nums1.split('.')
    const [int2, decimals2] = nums2.split('.')

    const [sumDecimal, carryDecimals] = sumDecimals(decimals1, decimals2)
    const [sumInt, carryInt] = sumIntegers(int1, int2, carryDecimals)

    return carryInt ? `${carryInt}${sumInt}.${sumDecimal}` : `${sumInt}.${sumDecimal}`
  }

  // Add integer with float
  const decimals = (nums1.includes('.') ? nums1.split('.') : nums2.split('.'))[1]

  const [sum, carry] = sumIntegers(nums1.split('.')[0], nums2.split('.')[0])

  return carry ? `${carry}${sum}.${decimals}` : `${sum}.${decimals}`

}

function sumAndCarry (num1 = '0', num2 = '0', carry = 0) {
  let result = Number(num1) + Number(num2) + carry // cast could be done using num1 * 1 instead of Number

  return result > 9 ? [`${result - 10}`, 1] : [`${result}`, 0]
}

function sumIntegers (nums1 = '', nums2 = '', carryDecimals = 0) {
  const isOneGteTwo = nums1.length >= nums2.length
  const maxLength = isOneGteTwo ? nums1.length : nums2.length
  const minLength = !isOneGteTwo ? nums1.length : nums2.length
  let carry = carryDecimals
  let sum = ''

  for (let index = 1; index <= maxLength; index++) {
    const num1 = nums1[nums1.length - index] || '0'
    const num2 = nums2[nums2.length - index] || '0'

    const [_sum, _carry] = sumAndCarry(num1, num2, carry)

    sum = `${_sum}${sum}`
    carry = _carry

    if (!carry && index > minLength) {
      sum = `${(isOneGteTwo ? nums1 : nums2).slice(0, maxLength - index)}${sum}`

      break
    }
  }

  return [sum, carry]
}

function sumDecimals (nums1 = '', nums2 = '') {
  const isOneGteTwo = nums1.length >= nums2.length
  const minLength = !isOneGteTwo ? nums1.length : nums2.length
  let carry = 0
  let sum = isOneGteTwo ? nums1.slice(minLength) : nums2.slice(minLength)

  for (let index = minLength - 1; index >= 0; index--) {
    const num1 = nums1[index] || '0'
    const num2 = nums2[index] || '0'

    const [_sum, _carry] = sumAndCarry(num1, num2, carry)

    sum = `${_sum}${sum}`
    carry = _carry
  }

  return [sum, carry]
}
