import type { Reference } from '../meta/index.js';

import type { BaseSchema } from './base.js';
import type { Schema } from './schema.js';


export type ArraySchema = BaseSchema & {
    type: 'array';
    items: Schema | Reference<Schema>;
    minItems?: number;
    maxItems?: number;
    uniqueItems?: boolean;
};

export const isArray = (s: BaseSchema): s is ArraySchema =>
    s.type === 'array';

