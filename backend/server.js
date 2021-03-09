//Entry Point for the server for the back-end
import express from 'express';
import linkRoutes from './routers/linkRoutes.js';

const app = express();
app.use(express.json());

app.use('/api/link', linkRoutes);

app.listen(4000, () => {
  console.log(`Server run on port 4000`);
});
