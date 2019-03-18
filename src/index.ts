import * as Express from 'express';
import * as bodyParser from 'body-parser';
import article from './routes/article';
import auth from './routes/auth';
import user from './routes/user';

const app = Express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use('/article', article);
app.use('/auth', auth);
app.use('/user', user);

app.listen(3000, () => {
    console.log('Listen started at port 3000.');
});

export default app;