let express = require('express');
let bodyParser = require('body-parser')
const {sequelize} = require('./models');
let cors = require('cors')
const config = require('./config/config');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors())

require('./userPassport')

require('./routes')(app)


let port = process.env.PORT || config.port;
sequelize.sync({force: false}).then(() => {
    app.listen(port, function () {
        console.log('server running on ' + port)
    })
})
