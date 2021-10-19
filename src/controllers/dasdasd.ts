import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { AsdasdasdasdMain, AsdasdasdasdOutput, AsdasdasdasdInput } from 'src/models/dasdasd';

const logger = createLogger('controllers/dasdasd');

export async function Asdasdasdasd(inputs: JSONObject): Promise<AsdasdasdasdOutput> {
    logger.debug('Calling asdasdasdasd with args: ', inputs);
    const params: AsdasdasdasdInput = {};
    return transport.execute(AsdasdasdasdMain, params) as Promise<AsdasdasdasdOutput>;
}
