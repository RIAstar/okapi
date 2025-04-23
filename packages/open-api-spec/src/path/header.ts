import type { HeaderParameter } from './parameter.js';


/**
 * The Header Object follows the structure of the Parameter Object with the following changes:
 * 1. `name` MUST NOT be specified, it is given in the corresponding `headers` map.
 * 2. `in` MUST NOT be specified, it is implicitly in `header`.
 * 3. All traits that are affected by the location MUST be applicable to a location of `header` (for example, `style`).
 *
 * @see https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#header-object
 */
export type Header = Omit<HeaderParameter, 'name' | 'in'>;
