import { BaseSchema } from './base';


export type BooleanSchema = BaseSchema & {
    type: 'boolean';
    default?: boolean;
};

export const isBoolean = (s: BaseSchema): s is BooleanSchema =>
    s.type === 'boolean';

