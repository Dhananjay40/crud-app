const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.use(express.json());

//connecting to mongodb

mongoose.connect('mongodb+srv://masejeh784:TxROlU0mll7oDw3O@cluster0.fbnfczo.mongodb.net/?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
    
);

//defining Schema

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
});

//Define Model
const User = mongoose.model('User', userSchema);

//API Routes

app.get('/', (req, res) => {
    res.send('Hello, this is the root of the server!');
});

app.get('/api/users', async(req, res)=>{
    const users = await User.find();
    res.json(users);
});

app.post('/api/users', async (req, res)=>{
    const {name, email} = req.body;
    const newUser = new User({ name, email});
    await newUser.save();
    res.json(newUser);
})

app.delete('/api/users/:id', async (req,res)=>{
    const {id} = req.params;
    await User.findByIdAndDelete(id);
    res.json({ success: true});
});

app.put('/api/users/:id', async (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
  
    try {
      const updatedUser = await User.findByIdAndUpdate(id,{ name, email });
      console.log(updatedUser)
  
      if (!updatedUser) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json({ success: true, updatedUser });
    } catch (error) {
      console.error('Error updating user:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(PORT, ()=>{
    console.log(`Backend server is running on port ${PORT}`);
})