const product = {
    label : 'blue bottle',
    price : 5000,
    stock : 20,
    salePrice: undefined
}

// const label = product.label
// const stock = product.stock

// console.log(label)



// const {label:productLabel, price,rating} = product

// console.log(product)
// console.log(rating)

const transaction = (type, {label,stock}) => {

    console.log('order',label,stock)
  

}

transaction('order',product)