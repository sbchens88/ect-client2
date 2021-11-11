import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { simplecalcModel, simplecalcOutput, simplecalcInput } from 'src/models/MyPgmMod';

const logger = createLogger('controllers/aramsT');

export async function SomeYamlPArTest(inputs: JSONObject): Promise<simplecalcOutput> {
    logger.debug('Calling someYamlPArTest');

    const p1Array = inputs.p1.map((i: any) => {
        i.agentId = i.agentId;
        return i;
    });

    const params: simplecalcInput = {
        Input: inputs.Input,
        Param1: p1Array,
        Output: inputs.Output
    };

    return transport.execute(simplecalcModel, params) as Promise<simplecalcOutput>;
}
