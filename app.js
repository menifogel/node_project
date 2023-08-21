import {router} from './routes/productsRouter.js' 
import express from 'express'

const app = express();
const port = 3100;
app.use(express.json());
app.use('/products', router);

app.listen(port, () => {
    console.log(`Server is up and running on port:${port}`);
});
