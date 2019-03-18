import * as Express from 'express';

export interface Users {
    getUsers(req: Express.Request, res: Express.Response, next: Express.NextFunction): void
}

//クラス
export class UsersImpl implements Users {
    getUsers(req: Express.Request, res: Express.Response, next: Express.NextFunction) {
        console.dir(req.body)
        res.status(501).json({ message: 'User Not Implemented.' });
    }
}