import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { simplecalcModel, simplecalcOutput, simplecalcInput } from 'src/models/MyPgmMod';

const logger = createLogger('controllers/tstin');

export async function ValidatopnTesting1(inputs: JSONObject): Promise<simplecalcOutput> {
    logger.debug('Calling validatopnTesting1');

    const params: simplecalcInput = {
        Input: inputs.in,
        Param1: inputs.Param1,
        Output: inputs.Output
    };

    return transport.execute(simplecalcModel, params) as Promise<simplecalcOutput>;
}
