import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { RuntestsqltestMain, RuntestsqltestOutput, RuntestsqltestInput } from 'src/models/aarontest-3';

const logger = createLogger('controllers/aarontest3');

export async function Runtestsqltest(inputs: JSONObject): Promise<RuntestsqltestOutput> {
    logger.debug('Calling runtestsqltest with args: ', inputs);
    const params: RuntestsqltestInput = {};
    return transport.execute(RuntestsqltestMain, params) as Promise<RuntestsqltestOutput>;
}
