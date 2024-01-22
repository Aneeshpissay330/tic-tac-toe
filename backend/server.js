const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send("Tic-Tac-Toe API");
});

app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
})