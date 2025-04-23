import type { BaseSchema } from './base.js';


type BaseStringSchema = BaseSchema & {
    type: 'string';
    format?: string;
    default?: string;
    minLength?: number;
    maxLength?: number;
    pattern?: string;
    enum?: string[];
};

export type PasswordSchema = BaseStringSchema & {
    format: 'password';
};

export type DateSchema = BaseStringSchema & {
    format: 'date';
};

export type DateTimeSchema = BaseStringSchema & {
    format: 'date-time';
};

export type Base64Schema = BaseStringSchema & {
    format: 'byte';
};

export type BinarySchema = BaseStringSchema & {
    format: 'binary';
};

export type StringSchema =
    | BaseStringSchema
    | PasswordSchema
    | DateSchema
    | DateTimeSchema
    | Base64Schema
    | BinarySchema;

export const isString = (s: BaseSchema): s is StringSchema =>
    s.type === 'string';

