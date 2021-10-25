import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { AendpoindaaMain, AendpoindaaOutput, AendpoindaaInput } from 'src/models/acontrollera';

const logger = createLogger('controllers/acontrollera');

export async function Aendpoindaa(inputs: JSONObject): Promise<AendpoindaaOutput> {
    logger.debug('Calling aendpoindaa with args: ', inputs);
    const params: AendpoindaaInput = {};
    return transport.execute(AendpoindaaMain, params) as Promise<AendpoindaaOutput>;
}
