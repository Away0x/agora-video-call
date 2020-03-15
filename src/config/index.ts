import { genUid } from '@/tools/utils';

export * from './env';
export * from './mainConfig';


// 该 id 建议由服务端生成
export const currentUserID = genUid();
