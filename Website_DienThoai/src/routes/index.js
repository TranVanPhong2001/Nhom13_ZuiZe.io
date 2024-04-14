
const homeRouter = require('./home');
const productRouter = require('./products');
const adminRouter = require('./admin');
const hangRouter = require('./hangs');
const cartRouter = require('./carts');


function route(app){
  app.use('/admin', adminRouter);
  app.use('/products',productRouter);
  app.use('/carts', cartRouter);
  app.use('/hangs',hangRouter);
  app.use('/',homeRouter);
}

module.exports = route;