import express from 'express';
import path from 'path';

const PORT = process.env.PORT || 3000;

const app = express();
const __dirname = path.resolve('./');
console.log(__dirname);

app.use(express.static(path.join(__dirname, './client/public')));

app.get('/', (req, res) => {
    try {
        console.log('GET /');
        res.status(200).sendFile('./client/public/index.html', { root: __dirname });
    } catch (error) {
        console.log(error);
    }
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});