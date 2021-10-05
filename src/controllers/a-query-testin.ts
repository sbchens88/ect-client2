import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import {
    RoutingEndpoiutFuncMain,
    RoutingEndpoiutFuncOutput,
    RoutingEndpoiutFuncInput
} from 'src/models/a-query-testin';

const logger = createLogger('controllers/AQueryTestin');

export async function RoutingEndpoiutFunc(inputs: JSONObject): Promise<RoutingEndpoiutFuncOutput> {
    logger.debug('Calling routingEndpoiutFunc with args: ', inputs);
    const params: RoutingEndpoiutFuncInput = {};
    return transport.execute(RoutingEndpoiutFuncMain, params) as Promise<RoutingEndpoiutFuncOutput>;
}
