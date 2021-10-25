import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { QweruidfofjMain, QweruidfofjOutput, QweruidfofjInput, QweruidfofjasdMain } from 'src/models/dasdasdasdasd';

const logger = createLogger('controllers/dasdasdasdasd');

export async function Qweruidfofj(inputs: JSONObject): Promise<QweruidfofjOutput> {
    logger.debug('Calling qweruidfofj with args: ', inputs);
    const params: QweruidfofjInput = {};
    return transport.execute(QweruidfofjMain, params) as Promise<QweruidfofjOutput>;
}

export async function Qweruidfofjasd(inputs: JSONObject): Promise<QweruidfofjasdOutput> {
    logger.debug('Calling qweruidfofjasd with args: ', inputs);
    const params: QweruidfofjasdInput = {
        first: inputs.first
    };
    return transport.execute(QweruidfofjasdMain, params) as Promise<QweruidfofjasdOutput>;
}
