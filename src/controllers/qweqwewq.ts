import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { simplecalcModel, simplecalcOutput, simplecalcInput } from 'src/models/MyPgmMod';

const logger = createLogger('controllers/qweqwewq');

export async function Asdafrbdsasaaa(inputs: JSONObject): Promise<simplecalcOutput> {
    logger.debug('Calling asdafrbdsasaaa');

    const params: simplecalcInput = {
        Input: inputs.Input,
        Param1: inputs.Param1,
        Output: inputs.Output
    };

    return transport.execute(simplecalcModel, params) as Promise<simplecalcOutput>;
}
