const express = require('express')
// const methodOverride = require("method-override")
const methodOverride = require('method-override')
const app = express()

const port = 3000
const systemConfig = require("./config/system");

const bodyParser = require('body-parser');

const flash = require('express-flash');

const cookieParser = require('cookie-parser');
const session = require('express-session');

require('dotenv').config();


const route = require("./routes/client/index.route")
const adminroute = require("./routes/admin/index.route")

const database = require("./config/database")
database.connect();

app.set("views", "./views");
app.set("view engine", "pug");
app.use(express.static("public"));
// app.use(methodOverride("_method"))
app.use(methodOverride('_method'));

app.use(bodyParser.urlencoded({ extended: false }))

app.use(cookieParser('bkkjjkhgghfh'));
app.use(session({ cookie: { maxAge: 60000 }}));
app.use(flash());

app.locals.prefixAdmin=systemConfig.prefixAdmin;


route(app)
adminroute(app)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
