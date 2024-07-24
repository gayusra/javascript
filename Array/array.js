
let cities = ['chennai','madurai','trichy']
let marks = [99,89,76,47]

//length -total element in the array
console.log(marks.length)
//accessing particular element

console.log(cities[1])

//important one --- accessing last element
let fruits = ['apple','grapes','kiwi','guva','banana']
console.log(fruits[fruits.length -1]) // why give -1 means length start form 1 and index start from 0 so

//mix of int and string
let arr = [5,6,8,7,'a','gayu']

//2d array -- 2 dimensional array
let matrix = [[1,2,3],[4.5,6],[7,8,9]]
console.log(matrix[0][2])

//array methods
let  array = ['a','b','c','d']
//push - add elements to the end
array.push('e')
console.log(array)

//pop - removes element from the end and 
//returns removed value
console.log(array.pop())
console.log(array)

//shift - remove element from start of the array
//returns removed value
console.log(array.shift())
console.log(array)

//unshift - adds element to the start of the array
//returns new length
console.log(array.unshift('a'))
console.log(array)

//delete -- using delete means its space for empty so its not use for better use 
delete array[2]
console.log(array)

//alternative solution for use -- splice
//splice 
array.splice(2,1) // deleting 2 elements starting at index 


