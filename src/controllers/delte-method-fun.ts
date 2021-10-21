import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import {
    GettingSomeApDIngoMain,
    GettingSomeApDIngoOutput,
    GettingSomeApDIngoInput,
    GettingSomeApDIngoffMain
} from 'src/models/delte-method-fun';

const logger = createLogger('controllers/delteMethodFun');

export async function GettingSomeApDIngo(inputs: JSONObject): Promise<GettingSomeApDIngoOutput> {
    logger.debug('Calling gettingSomeApDIngo with args: ', inputs);
    const params: GettingSomeApDIngoInput = {};
    return transport.execute(GettingSomeApDIngoMain, params) as Promise<GettingSomeApDIngoOutput>;
}

export async function GettingSomeApDIngo(inputs: JSONObject): Promise<GettingSomeApDIngoOutput> {
    logger.debug('Calling gettingSomeApDIngo with args: ', inputs);
    const params: GettingSomeApDIngoInput = {};
    return transport.execute(GettingSomeApDIngoMain, params) as Promise<GettingSomeApDIngoOutput>;
}

export async function GettingSomeApDIngoff(inputs: JSONObject): Promise<GettingSomeApDIngoffOutput> {
    logger.debug('Calling gettingSomeApDIngoff with args: ', inputs);
    const params: GettingSomeApDIngoffInput = {};
    return transport.execute(GettingSomeApDIngoffMain, params) as Promise<GettingSomeApDIngoffOutput>;
}
