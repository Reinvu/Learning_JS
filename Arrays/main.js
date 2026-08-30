// №1
// const arr1 = [1, 2, 5, 7, 9]
// const arr2 = [1, 3, 7, 5, 4]


// const getRepeat = (a, b) => {
//     const arrRepeat = a.filter((number) => b.includes(number))
//     return [...new Set(arrRepeat)]
// }

// const getDifference = (a, b) => {
//     const arrNotRepeat = a.filter((number) => !b.includes(number))
//     return [...new Set(arrNotRepeat)]
// }

// console.log("Общие элементы:", getRepeat(arr1, arr2))
// console.log("Уникальные элементы:", getDifference(arr1, arr2))


// №2
// const arr = [12, 4, 50, 1, 0, 18, 40]
// console.log(arr.includes(0))


// №3
// const arrWords = ["yes", "hello", "no", "easycode", "what"]
// console.log(arrWords.every((word) => word.length > 3))


// №4
// const arrLine = ['I', 'am', 'a', 'fornt-end', 'developer']
// console.log(arrLine.sort((a, b) => a.length - b.length))
// console.log(arrLine.sort((a, b) => b.length - a.length))


// №5
// const arr = []
// while(true){
//     let i = Number(prompt("Введите число (если хотите прекратить введите 0): "))
//     if(i == 0){
//         break
//     }
//     arr.push(i)
// }
// const evenNumbers = arr.filter((number) => number % 2 == 0)
// alert(evenNumbers)


// №6
// const arr = [1, 2, 3, 4, 5]
// arr.splice(1, 2)
// console.log(arr)


// №7
// const arr = [1, 2, 3, 4, 5]
// const newArr = arr.slice(1, 4)
// console.log(newArr)


// №8
// const arr = [1, 2, 3, 4, 5]
// arr.splice(3, 0, 'a', 'b', 'c')
// console.log(arr)


// №9
// const arr = [1, 2, 3, 4, 5]

// arr.splice(1, 0, 'a', 'b')
// arr.splice(6, 0, 'c')
// arr.push('e')

// console.log(arr)


// №10
let strNumber = '123456'
let number = strNumber.split('').reverse().join('')
console.log(number)
