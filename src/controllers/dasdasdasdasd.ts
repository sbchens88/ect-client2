import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { QweruidfofjasdMain, QweruidfofjasdOutput, QweruidfofjasdInput } from 'src/models/dasdasdasdasd';

const logger = createLogger('controllers/dasdasdasdasd');

export async function Qweruidfofjasd(inputs: JSONObject): Promise<QweruidfofjasdOutput> {
    logger.debug('Calling qweruidfofjasd with args: ', inputs);
    const params: QweruidfofjasdInput = {
        first: inputs.first
    };
    return transport.execute(QweruidfofjasdMain, params) as Promise<QweruidfofjasdOutput>;
}
