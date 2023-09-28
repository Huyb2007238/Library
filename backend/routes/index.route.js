
const siteRouter = require('./site.route');
const booksRouter = require('./books.route');
// const adminRouter = require('./admin.route');
const authRouter = require('./auth.route');

function route(app) {
    // app.use('/admin', adminRouter);

    app.use('/auth', authRouter);

    app.use('/books', booksRouter);

    app.use('/', siteRouter);
}

module.exports = route;
