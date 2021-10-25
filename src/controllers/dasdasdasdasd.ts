import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { QweruidfofjMain, QweruidfofjOutput, QweruidfofjInput } from 'src/models/dasdasdasdasd';

const logger = createLogger('controllers/dasdasdasdasd');

export async function Qweruidfofj(inputs: JSONObject): Promise<QweruidfofjOutput> {
    logger.debug('Calling qweruidfofj with args: ', inputs);
    const params: QweruidfofjInput = {};
    return transport.execute(QweruidfofjMain, params) as Promise<QweruidfofjOutput>;
}
