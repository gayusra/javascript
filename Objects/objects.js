
let item ={
    name:'phone',
    price:25000,
    quantity:1

}
//accessing any one properties using dot notation
//console.log(item.price)

//using dot notation to change the value
item.price=27000

//adding a new objects
item.ram=2
//console.log(item)


//------------------------------

//another way of creating a object
let item2 = new Object()
item2.name='charger'
item2.price=700
item2.quantity = 1

//add object inside an one object
let products = {
    name:'laptop',
    price:50000,
    dimensions:{
        weight:1.5,
        color:'black',
        model:'new'

    },
    categories:['electronics','phones','laptops']

}
//print all
//console.log(products)

//how to get an value in array object
//console.log(products.categories[1])

//how to get an value of inside the objects
console.log(products.dimensions.color)
//---------------------------------------------------



