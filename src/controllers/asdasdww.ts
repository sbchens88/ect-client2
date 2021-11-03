import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { PokjhbvcghMain, PokjhbvcghOutput, PokjhbvcghInput } from 'src/models/asdasdww';

const logger = createLogger('controllers/asdasdww');

export async function Pokjhbvcgh(inputs: JSONObject): Promise<PokjhbvcghOutput> {
    logger.debug('Calling pokjhbvcgh with args: ', inputs);
    const params: PokjhbvcghInput = {};
    return transport.execute(PokjhbvcghMain, params) as Promise<PokjhbvcghOutput>;
}
