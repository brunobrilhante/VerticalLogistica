const app = require('./src/app');
const connectDatabase = require('./src/config/database')

connectDatabase()
  .then(() => app.listen(3000, () => console.log(`Server running on: http://localhost:3000`)))
  .catch((err) => console.log('Error: ', err));