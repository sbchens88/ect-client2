import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { PkmnhytFuncMain, PkmnhytFuncOutput, PkmnhytFuncInput, PkmnhytFuncsssaaMain } from 'src/models/lkjhgfds';

const logger = createLogger('controllers/lkjhgfds');

export async function PkmnhytFunc(inputs: JSONObject): Promise<PkmnhytFuncOutput> {
    logger.debug('Calling pkmnhytFunc with args: ', inputs);
    const params: PkmnhytFuncInput = {};
    return transport.execute(PkmnhytFuncMain, params) as Promise<PkmnhytFuncOutput>;
}

export async function PkmnhytFuncsssaa(inputs: JSONObject): Promise<PkmnhytFuncsssaaOutput> {
    logger.debug('Calling pkmnhytFuncsssaa with args: ', inputs);
    const params: PkmnhytFuncsssaaInput = {};
    return transport.execute(PkmnhytFuncsssaaMain, params) as Promise<PkmnhytFuncsssaaOutput>;
}
