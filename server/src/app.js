let express = require('express')
let cors = require('cors')
const {sequelize} = require('./models')

const config = require('./config/config')

const app = express()

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors())

require('./routes')(app)

app.get('/status', function (req, res ){
  res.send('Hello nodejs server')
})

app.get('/hello/:person', function (req,res) {
  console.log('hello - ' + req.params.person)
  res.send('sey hello with ' + req.params.person)
})

let port = process.env.PORT || config.port

sequelize.sync({force: false}).then(() => {
  app.listen(port, function() {
      console.log('Server running on ' + port)
  })
})