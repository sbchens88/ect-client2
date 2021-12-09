import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { FuncMain, FuncOutput, FuncInput } from 'src/models/monaco-2';

const logger = createLogger('controllers/monaco2');

export async function Func(inputs: JSONObject): Promise<FuncOutput> {
    logger.debug('Calling func with args: ', inputs);
    const params: FuncInput = {};
    return transport.execute(FuncMain, params) as Promise<FuncOutput>;
}
