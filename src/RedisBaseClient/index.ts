import { RedisClient } from './redisClient/client';
import { redisConfig } from '@exam-cell-config';

// eslint-disable-next-line @typescript-eslint/naming-convention
const Publisher = new RedisClient(redisConfig);
// eslint-disable-next-line @typescript-eslint/naming-convention
const SubScriber = new RedisClient(redisConfig);

export { Publisher, SubScriber };
