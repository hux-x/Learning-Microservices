const express = require('express');
const app = express();
app.use(express.json());

const orders = [
  { user_id: 1, product: 'product 1', location: 'Location 1' },
  { user_id: 2, product: 'product 2', location: 'Location 2' }, { user_id: 1, product: 'product 56', location: 'Location 1' },
  { user_id: 2, product: 'product 3', location: 'Location 2'},
    
];

app.get('/store', (req, res) => {
  console.log('Using MySQL database (simulated)');
  res.json(orders);
});
app.get('/store/:user_id', (req, res) => {
  const userOrders = orders.filter(o => o.user_id === parseInt(req.params.user_id));
  res.json(userOrders.length ? userOrders : { error: 'Not found' });
});
app.post('/store', (req, res) => {
  const newOrder = { user_id: req.body.user_id, product: req.body.product, location: req.body.location };
  orders.push(newOrder);
  res.status(201).json(newOrder);
});

app.listen(3000, () => console.log('MySQL Store service running on port 3002'));