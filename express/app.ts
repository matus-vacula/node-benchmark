import * as express from 'express';
import { Request, Response } from 'express';

const app = express();
const port = 5500; // you can use any port number

app.use(express.json());

app.post('/segment', (req: Request, res: Response) => {
    // console.log(new Date().toISOString(), "request");
    res.sendStatus(200);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
