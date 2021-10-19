import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { SomeDMain, SomeDOutput, SomeDInput } from 'src/models/ast-contrlr';

const logger = createLogger('controllers/astContrlr');

export async function SomeD(inputs: JSONObject): Promise<SomeDOutput> {
    logger.debug('Calling someD with args: ', inputs);
    const params: SomeDInput = {};
    return transport.execute(SomeDMain, params) as Promise<SomeDOutput>;
}
