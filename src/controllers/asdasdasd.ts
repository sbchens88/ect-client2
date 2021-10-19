import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { AsdytuyguhuycvbyMain, AsdytuyguhuycvbyOutput, AsdytuyguhuycvbyInput } from 'src/models/asdasdasd';

const logger = createLogger('controllers/asdasdasd');

export async function Asdytuyguhuycvby(inputs: JSONObject): Promise<AsdytuyguhuycvbyOutput> {
    logger.debug('Calling asdytuyguhuycvby with args: ', inputs);
    const params: AsdytuyguhuycvbyInput = {};
    return transport.execute(AsdytuyguhuycvbyMain, params) as Promise<AsdytuyguhuycvbyOutput>;
}
