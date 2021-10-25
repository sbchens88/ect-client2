import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { PkmnhytFuncMain, PkmnhytFuncOutput, PkmnhytFuncInput, PkmnhytFuncsssMain } from 'src/models/lkjhgfds';

const logger = createLogger('controllers/lkjhgfds');

export async function PkmnhytFunc(inputs: JSONObject): Promise<PkmnhytFuncOutput> {
    logger.debug('Calling pkmnhytFunc with args: ', inputs);
    const params: PkmnhytFuncInput = {};
    return transport.execute(PkmnhytFuncMain, params) as Promise<PkmnhytFuncOutput>;
}

export async function PkmnhytFuncsss(inputs: JSONObject): Promise<PkmnhytFuncsssOutput> {
    logger.debug('Calling pkmnhytFuncsss with args: ', inputs);
    const params: PkmnhytFuncsssInput = {};
    return transport.execute(PkmnhytFuncsssMain, params) as Promise<PkmnhytFuncsssOutput>;
}
