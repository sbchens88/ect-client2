import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { MncfunssMain, MncfunssOutput, MncfunssInput } from 'src/models/monaco-2';

const logger = createLogger('controllers/monaco_2');

export async function Mncfunss(inputs: JSONObject): Promise<MncfunssOutput> {
    logger.debug('Calling mncfunss with args: ', inputs);
    const params: MncfunssInput = {};
    return transport.execute(MncfunssMain, params) as Promise<MncfunssOutput>;
}
