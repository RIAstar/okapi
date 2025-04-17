import { Reference } from '../meta';

import { BaseSchema } from './base';
import { Schema } from './schema';


export type ArraySchema = BaseSchema & {
    type: 'array';
    items: Schema | Reference<Schema>;
    minItems?: number;
    maxItems?: number;
    uniqueItems?: boolean;
};

export const isArray = (s: BaseSchema): s is ArraySchema =>
    s.type === 'array';

