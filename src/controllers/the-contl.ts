import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { AsdsdswwwMain, AsdsdswwwOutput, AsdsdswwwInput } from 'src/models/the-contl';

const logger = createLogger('controllers/theContl');

export async function Asdsdswww(inputs: JSONObject): Promise<AsdsdswwwOutput> {
    logger.debug('Calling asdsdswww with args: ', inputs);
    const params: AsdsdswwwInput = {};
    return transport.execute(AsdsdswwwMain, params) as Promise<AsdsdswwwOutput>;
}
