import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { GettingSomeApDIngoMain, GettingSomeApDIngoOutput, GettingSomeApDIngoInput } from 'src/models/delte-method-fun';

const logger = createLogger('controllers/delteMethodFun');

export async function GettingSomeApDIngo(inputs: JSONObject): Promise<GettingSomeApDIngoOutput> {
    logger.debug('Calling gettingSomeApDIngo with args: ', inputs);
    const params: GettingSomeApDIngoInput = {};
    return transport.execute(GettingSomeApDIngoMain, params) as Promise<GettingSomeApDIngoOutput>;
}
