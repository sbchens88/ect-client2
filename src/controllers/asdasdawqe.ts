import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { QweffssMain, QweffssOutput, QweffssInput, QweffssddMain } from 'src/models/asdasdawqe';

const logger = createLogger('controllers/asdasdawqe');

export async function Qweffss(inputs: JSONObject): Promise<QweffssOutput> {
    logger.debug('Calling qweffss with args: ', inputs);
    const params: QweffssInput = {};
    return transport.execute(QweffssMain, params) as Promise<QweffssOutput>;
}

export async function Qweffssdd(inputs: JSONObject): Promise<QweffssddOutput> {
    logger.debug('Calling qweffssdd with args: ', inputs);
    const params: QweffssddInput = {};
    return transport.execute(QweffssddMain, params) as Promise<QweffssddOutput>;
}
