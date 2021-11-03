import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { PsnaidoMain, PsnaidoOutput, PsnaidoInput } from 'src/models/xtension';

const logger = createLogger('controllers/xtension');

export async function Psnaido(inputs: JSONObject): Promise<PsnaidoOutput> {
    logger.debug('Calling psnaido with args: ', inputs);
    const params: PsnaidoInput = {};
    return transport.execute(PsnaidoMain, params) as Promise<PsnaidoOutput>;
}
