import express, { type Express, type Request, type Response } from 'express';
import { moviesRouter } from './routes/movies.ts';

const app: Express = express();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.use('/movies', moviesRouter);

app.listen(3000);