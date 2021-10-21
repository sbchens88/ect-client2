import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { OjihugyvhMain, OjihugyvhOutput, OjihugyvhInput } from 'src/models/dssadsd';

const logger = createLogger('controllers/dssadsd');

export async function Ojihugyvh(inputs: JSONObject): Promise<OjihugyvhOutput> {
    logger.debug('Calling ojihugyvh with args: ', inputs);
    const params: OjihugyvhInput = {};
    return transport.execute(OjihugyvhMain, params) as Promise<OjihugyvhOutput>;
}

export async function Ojihugyvh(inputs: JSONObject): Promise<OjihugyvhOutput> {
    logger.debug('Calling ojihugyvh with args: ', inputs);
    const params: OjihugyvhInput = {};
    return transport.execute(OjihugyvhMain, params) as Promise<OjihugyvhOutput>;
}

export async function Ojihugyvh(inputs: JSONObject): Promise<OjihugyvhOutput> {
    logger.debug('Calling ojihugyvh with args: ', inputs);
    const params: OjihugyvhInput = {};
    return transport.execute(OjihugyvhMain, params) as Promise<OjihugyvhOutput>;
}

export async function Ojihugyvh(inputs: JSONObject): Promise<OjihugyvhOutput> {
    logger.debug('Calling ojihugyvh with args: ', inputs);
    const params: OjihugyvhInput = {};
    return transport.execute(OjihugyvhMain, params) as Promise<OjihugyvhOutput>;
}

export async function Ojihugyvh(inputs: JSONObject): Promise<OjihugyvhOutput> {
    logger.debug('Calling ojihugyvh with args: ', inputs);
    const params: OjihugyvhInput = {};
    return transport.execute(OjihugyvhMain, params) as Promise<OjihugyvhOutput>;
}

export async function Ojihugyvh(inputs: JSONObject): Promise<OjihugyvhOutput> {
    logger.debug('Calling ojihugyvh with args: ', inputs);
    const params: OjihugyvhInput = {};
    return transport.execute(OjihugyvhMain, params) as Promise<OjihugyvhOutput>;
}
