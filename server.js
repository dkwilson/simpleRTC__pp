const express = require('express');

const app = express();
const port = 3000;

// set public folder as root
app.use(express.static('public'));

// provide acess to node_modules from the client-side
app.use('/scripts', express.static(`${__dirname}/node_modules/`));

// redirect all traffic to index
app.use((req, res) => res.sendFile(`${__dirname}/public/index.html`));

app.listen(port, () => {
    console.info('listening on %d', port);
});