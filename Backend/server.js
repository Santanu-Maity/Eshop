const express = require('express');
const { dbUserMiddleware } = require('./middlewares/dbMiddleware');
const cors = require('cors');
const userRoutes = require('./routes/userRoute');
const productRoutes = require('./routes/productRoute');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(dbUserMiddleware);

app.use('/api/users', userRoutes);
app.use('/api/product', productRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});