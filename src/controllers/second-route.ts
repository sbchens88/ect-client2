import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { SomeFuncMain, SomeFuncOutput, SomeFuncInput } from 'src/models/second-route';

const logger = createLogger('controllers/secondRoute');

export async function SomeFunc(inputs: JSONObject): Promise<SomeFuncOutput> {
    logger.debug('Calling someFunc with args: ', inputs);
    const params: SomeFuncInput = {};
    return transport.execute(SomeFuncMain, params) as Promise<SomeFuncOutput>;
}
