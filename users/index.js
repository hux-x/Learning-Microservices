const express = require('express');

const app = express();

const users = [
  { id: 1, name: 'MySQL User 1', email: 'mysql1@example.com' },
  { id: 2, name: 'MySQL User 2', email: 'mysql2@example.com' }
];


app.get('/users', (req, res) => {
  console.log('Using MySQL database (simulated)');
  res.json(users);
});

app.get('/users/:id', async (req, res) => {
  const user = users.find(u => u.id == parseInt(req.params.id));
  const orders = await fetch(`http://store:3000/store/${user.id}`)
    .then(response => response.json())
    .catch(error => console.error('Error fetching orders:', error));
  if (orders) {
    user.orders = orders;
  }else{
    user.orders = [];
  }
  res.json(user || { error: 'Not found' });
});
app.get('/users', (req, res) => {

  res.status(201).send("User created successfully");
});

app.use(express.json());

app.listen(3000, () => console.log('MySQL User service running on port 3001'));