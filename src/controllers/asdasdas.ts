import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { QwdfghjbvccMain, QwdfghjbvccOutput, QwdfghjbvccInput } from 'src/models/asdasdas';

const logger = createLogger('controllers/asdasdas');

export async function Qwdfghjbvcc(inputs: JSONObject): Promise<QwdfghjbvccOutput> {
    logger.debug('Calling qwdfghjbvcc with args: ', inputs);
    const params: QwdfghjbvccInput = {};
    return transport.execute(QwdfghjbvccMain, params) as Promise<QwdfghjbvccOutput>;
}
