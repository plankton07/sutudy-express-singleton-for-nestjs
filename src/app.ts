import * as express from 'express';
import catsRoute from './cats/cats.route';

const app: express.Express = express();
const port: number = 3000;


class Server {
    public app: express.Application;

    constructor() {
        const app: express.Application = express();
        this.app = app;
    }

    private setRoute() {
        this.app.use(catsRoute);
    }


    private setMiddleware() {
        // logging middleware
        this.app.use((req, res, next) => {
            console.log(req.rawHeaders);
            console.log('This is logging middleware');
            next();
        });

        // JSON middleware
        this.app.use(express.json());

        this.setRoute();

        // 404 error
        this.app.use((req, res, next) => {
            console.log('This is error middleware');
            res.send({error: '404 not found error'});
        });
    }

    public listen() {
        this.setRoute();

        this.setMiddleware();

        this.app.listen(port, () => {
            console.log(`Example app listening at http://localhost:${port}`);
        });
    }
}

function init() {
    const server = new Server();
    server.listen();
}

init();