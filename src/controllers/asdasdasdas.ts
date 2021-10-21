import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { QweqweMain, QweqweOutput, QweqweInput } from 'src/models/asdasdasdas';

const logger = createLogger('controllers/asdasdasdas');

export async function Qweqwe(inputs: JSONObject): Promise<QweqweOutput> {
    logger.debug('Calling qweqwe with args: ', inputs);
    const params: QweqweInput = {};
    return transport.execute(QweqweMain, params) as Promise<QweqweOutput>;
}
