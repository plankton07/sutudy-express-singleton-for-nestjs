import { Request, Response } from 'express';
import { Cat } from './cats.model';


export const readAllcat = (req: Request, res: Response) => {
    try {
        const cats = Cat;
        // throw new Error('db connect error');
        res.status(200).send({
            success: true,
            data: {
                cats,
            }
        });
    } catch (error) {
        res.status(400).send({
            success: false,
            error: error.message
        });
    }
}

export const readCat = (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const cats = Cat.find((cat) => {
            return cat.id === id;
        })
        // throw new Error('db connect error');
        res.status(200).send({
            success: true,
            data: {
                cats,
            }
        });
    } catch (error) {
        res.status(400).send({
            success: false,
            error: error.message
        });
    }
}

export const addCat = (req: Request, res: Response) => {
    try {
        const data = req.body
        console.log(data);
        Cat.push(data);
        res.status(200).send({
            success: true,
            data: {data}
        });
    } catch (error) {
        res.status(400).send({
            success: false,
            error: error.message
        });
    }
}