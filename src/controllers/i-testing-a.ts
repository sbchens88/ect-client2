import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { QwertyukmnbMain, QwertyukmnbOutput, QwertyukmnbInput } from 'src/models/i-testing-a';

const logger = createLogger('controllers/iTestingA');

export async function Qwertyukmnb(inputs: JSONObject): Promise<QwertyukmnbOutput> {
    logger.debug('Calling qwertyukmnb with args: ', inputs);
    const params: QwertyukmnbInput = {
        appId: inputs.appId
    };
    return transport.execute(QwertyukmnbMain, params) as Promise<QwertyukmnbOutput>;
}
