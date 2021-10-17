import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import {
    FunctionNamesssMain,
    FunctionNamesssOutput,
    FunctionNamesssInput,
    JustGetTheAppMain,
    JustGetTheAppOutput,
    JustGetTheAppInput
} from 'src/models/chen-controller';

const logger = createLogger('controllers/chenController');

export async function FunctionNamesss(inputs: JSONObject): Promise<FunctionNamesssOutput> {
    logger.debug('Calling functionNamesss with args: ', inputs);
    const params: FunctionNamesssInput = {
        appId: inputs.appId
    };
    return transport.execute(FunctionNamesssMain, params) as Promise<FunctionNamesssOutput>;
}

export async function JustGetTheApp(inputs: JSONObject): Promise<JustGetTheAppOutput> {
    logger.debug('Calling justGetTheApp with args: ', inputs);
    const params: JustGetTheAppInput = {
        appId: inputs.appId
    };
    return transport.execute(JustGetTheAppMain, params) as Promise<JustGetTheAppOutput>;
}
