const express = require('express')
const app = express()

const orderItems = [
  {
    id: 1,
    user: 'Rahul',
    items: [
      { name: 'Laptop', qty: 1, price: 50000 },
      { name: 'Mouse', qty: 1, price: 700 },
    ],
  },
  {
    id: 2,
    user: 'Vijay',
    items: [
      { name: 'Phone', qty: 1, price: 20000 },
      { name: 'Case', qty: 2, price: 200 },
    ],
  },
  {
    id: 3,
    user: 'Meera',
    items: [
      { name: 'Tablet', qty: 1, price: 15000 },
      { name: 'Cover', qty: 1, price: 500 },
    ],
  },
  {
    id: 4,
    user: 'Anita',
    items: [
      { name: 'Headphones', qty: 1, price: 3000 },
      { name: 'Charger', qty: 1, price: 800 },
    ],
  },
  { id: 5, user: 'Karan', items: null },
];

app.get('/order', (req, res) =>{
    let id = req.query.id

    let order = orderItems.find(item=>item.id==id)

    if(!order){
        return res.status(404).send("Not found")
    }

    if(!order.items){
        return res.json({items: []})
    }

    let selected = order.items.map(item => item.name)
    res.json({items: selected})
})

app.listen(3002, () => console.log("Server connected"))