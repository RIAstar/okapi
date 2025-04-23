import type { ArraySchema } from './array.js';
import type { BooleanSchema } from './boolean.js';
import type { CompositionSchema } from './composition.js';
import type { NumberSchema } from './number.js';
import type { ObjectSchema } from './object.js';
import type { StringSchema } from './string.js';


export type Schema =
    | BooleanSchema
    | NumberSchema
    | StringSchema
    | ObjectSchema
    | ArraySchema
    | CompositionSchema;

