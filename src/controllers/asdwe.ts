import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { RegffdssagMain, RegffdssagOutput, RegffdssagInput } from 'src/models/asdwe';

const logger = createLogger('controllers/asdwe');

export async function Regffdssag(inputs: JSONObject): Promise<RegffdssagOutput> {
    logger.debug('Calling regffdssag with args: ', inputs);
    const params: RegffdssagInput = {};
    return transport.execute(RegffdssagMain, params) as Promise<RegffdssagOutput>;
}
