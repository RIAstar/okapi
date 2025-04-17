import type { ArraySchema } from './array';
import type { BooleanSchema } from './boolean';
import type { CompositionSchema } from './composition';
import type { NumberSchema } from './number';
import type { ObjectSchema } from './object';
import type { StringSchema } from './string';


export type Schema =
    | BooleanSchema
    | NumberSchema
    | StringSchema
    | ObjectSchema
    | ArraySchema
    | CompositionSchema;

