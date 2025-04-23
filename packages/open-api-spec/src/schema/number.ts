import type { BaseSchema } from './base.js';


type BaseNumericSchema = BaseSchema & {
    default?: number;
    enum?: number[];
    minimum?: number;
    maximum?: number;
    exclusiveMinimum?: boolean;
    exclusiveMaximum?: boolean;
    multipleOf?: number;
};

export type IntegerSchema = BaseNumericSchema & {
    type: 'integer';
    format: 'int32';
};

export type LongSchema = BaseNumericSchema & {
    type: 'integer';
    format: 'int64';
};

export type FloatSchema = BaseNumericSchema & {
    type: 'number';
    format: 'float';
};

export type DoubleSchema = BaseNumericSchema & {
    type: 'number';
    format: 'double';
};

export type NumberSchema =
    | IntegerSchema
    | LongSchema
    | FloatSchema
    | DoubleSchema;

export const isInteger = (s: BaseSchema): s is IntegerSchema | LongSchema =>
    s.type === 'integer';

export const isNumber = (s: BaseSchema): s is FloatSchema | DoubleSchema =>
    s.type === 'integer';

export const isNumeric = (s: BaseSchema): s is NumberSchema =>
    s.type === 'integer' || s.type === 'number';
