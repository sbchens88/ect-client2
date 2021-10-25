import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import {
    QweffssddwerhgfMain,
    QweffssddwerhgfOutput,
    QweffssddwerhgfInput,
    SomewqeWqeMain
} from 'src/models/asdasdertygfawqe';

const logger = createLogger('controllers/asdasdertygfawqe');

export async function Qweffssddwerhgf(inputs: JSONObject): Promise<QweffssddwerhgfOutput> {
    logger.debug('Calling qweffssddwerhgf with args: ', inputs);
    const params: QweffssddwerhgfInput = {};
    return transport.execute(QweffssddwerhgfMain, params) as Promise<QweffssddwerhgfOutput>;
}

export async function SomewqeWqe(inputs: JSONObject): Promise<SomewqeWqeOutput> {
    logger.debug('Calling somewqeWQE with args: ', inputs);
    const params: SomewqeWqeInput = {};
    return transport.execute(SomewqeWqeMain, params) as Promise<SomewqeWqeOutput>;
}
