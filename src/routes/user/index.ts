import * as Express from 'express';
import noImpl from '../../noImpl';
import { UsersImpl } from '../../controller/user';
import article from './article';

const router = Express.Router();

let users = new UsersImpl();

// ユーザの新規作成
router.post('/', users.getUsers);

// ユーザ情報の取得
router.get('/:user', noImpl);
// ユーザ一覧の取得
router.get('/', users.getUsers);

// ユーザの情報更新
router.put('/:user', noImpl);

// ユーザの削除
router.delete('/:user', noImpl);

// ユーザ毎の記事表示用ルーティング
router.use('/:user/article', article);

export default router;