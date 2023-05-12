const ItemModel = {
    id:0,
    description:"",
    price:0,
    image:"",
    category:"",
    title:"",
}

const OrderModel = {
    date:"",
    id:0,
    items:[{amount:0,item:ItemModel}],
}

const collectionOrdersModel = {
    orders:[OrderModel],
}