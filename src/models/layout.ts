/* eslint-disable */
// @ts-nocheck
// Module: layout
// Generated source -- do not modify

import eradaniConnect from '@eradani-inc/eradani-connect';
const { dataTypes } = eradaniConnect;

const eradaniConnect = require('../..');
const { dataTypes } = eradaniConnect;
const config = require('../config');

/**
 * Data structure
 */
let LAYOUTRECDSFields: any = [
    {
        name: 'FIRSTNAME',
        type: new dataTypes.Char(6)
    },
    {
        name: 'LASTNAME',
        type: new dataTypes.Char(5)
    },
    {
        name: 'RESPONSE',
        type: new dataTypes.Char(11),
        outputOnly: true
    },
    {
        name: 'COMMENTS',
        type: new dataTypes.Char(10),
        dim: 10,
        outputOnly: true
    },
    {
        name: 'DATEREC',
        type: new dataTypes.PackedDecimal(8, 0)
    }
];

/**
 * Input interface
 */
export interface LAYOUTRECDSInput {
    /**
     * @size 6 characters
     */
    FIRSTNAME: string;
    /**
     * @size 5 characters
     */
    LASTNAME: string;
    /**
     * @size 11 characters
     */
    RESPONSE?: never;
    /**
     * @size 10 characters
     */
    COMMENTS?: never;
    /**
     * @size 8 digits
     * @precision 0 decimals
     */
    DATEREC: number | string;
}

/**
 * Output interface
 */
export interface LAYOUTRECDS {
    /**
     * @size 6 characters
     */
    FIRSTNAME: string;
    /**
     * @size 5 characters
     */
    LASTNAME: string;
    /**
     * @size 11 characters
     */
    RESPONSE: string;
    /**
     * @size 10 characters
     */
    COMMENTS: Array<string>;
    /**
     * @size 8 digits
     * @precision 0 decimals
     */
    DATEREC: number;
}

/**
 * Program model
 */
export const poccblpgmModel = new eradaniConnect.run.Pgm('POCCBLPGM', {
    lib: 'ECSOMF',
    mode: 'ile',
    params: [
        {
            name: 'LAYOUTREC',
            type: new dataTypes.DataStructure(LAYOUTRECDSFields)
        }
    ]
});

/**
 * Input interface
 */
export interface poccblpgmInput {
    /**
     */
    LAYOUTREC: LAYOUTRECDSInput;
}

/**
 * Output interface
 */
export interface poccblpgmOutput {
    /**
     */
    LAYOUTREC: LAYOUTRECDS;
}

/* eslint-enable */
