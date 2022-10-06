const app = require('app');
const { listen } = require('./app');

app.get('/', (req, res) => { res.send('hello world') })

app.listen(port, () => { console.log('ejemplo app listen') })