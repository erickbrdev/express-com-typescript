import dotenv from 'dotenv';
import app from './app'

dotenv.config();

const APP_PORT = process.env.APP_PORT || 3000;

app.listen(APP_PORT, () => {
  console.log(`Server is running at http://localhost:${APP_PORT}`)
})