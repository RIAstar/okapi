import { Server } from '../server';
import { RefList, RefMap, SpecificationExtensions } from '../meta';
import { Brand, brand } from '../util/brand';
import { WithDescription, WithSummary } from '../docs';

import { Method } from './method';
import { Operation } from './operation';
import { Parameter } from './parameter';


/**
 * Holds the relative paths to the individual endpoints and their operations. The path is appended to the URL from the
 * [`Server Object`](#serverObject) in order to construct the full URL. The Paths MAY be empty, due to [ACL
 * constraints](#securityFiltering).
 *
 * @see https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.1.0.md#paths-object
 */
export type Paths = RefMap<PathItem, PathId> & SpecificationExtensions;

/**
 * A relative path to an individual endpoint. The field name MUST begin with a slash. The path is **appended** (no
 * relative URL resolution) to the expanded URL from the [`Server Object`](#serverObject)'s `url` field in order to
 * construct the full URL. [Path templating](#pathTemplating) is allowed. When matching URLs, concrete (non-templated)
 * paths would be matched before their templated counterparts. Templated paths with the same hierarchy but different
 * templated names MUST NOT exist as they are identical. In case of ambiguous matching, it's up to the tooling to decide
 * which one to use.
 */
export type PathId = Brand<string, '@okapi/path-id'>;
export const PathId = brand<PathId>();

export const isPathId = (s: string): s is PathId =>
    /^\/(([A-z0-9\-%]+\/)|(\{[A-z0-9\-%]+\}\/))*([A-z0-9\-%]+|\{[A-z0-9\-%]+\})$/gm.test(s);

/**
 * Describes the operations available on a single path. A Path Item MAY be empty, due to [ACL
 * constraints](#securityFiltering). The path itself is still exposed to the documentation viewer but they will not know
 * which operations and parameters are available.
 *
 * @see https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.1.0.md#path-item-object
 */
export type PathItem =
    & SpecificationExtensions
    & WithSummary
    & WithDescription
    & Partial<Record<Method, Operation>>
    & {

        /**
         * An alternative `server` array to service all operations in this path.
         */
        servers?: Server[];

        /**
         * A list of parameters that are applicable for all the operations described under this path. These parameters
         * can be overridden at the operation level, but cannot be removed there. The list MUST NOT include duplicated
         * parameters. A unique parameter is defined by a combination of a [name](#parameterName) and
         * [location](#parameterIn). The list can use the [Reference Object](#referenceObject) to link to parameters
         * that are defined at the [OpenAPI Object's components/parameters](#componentsParameters).
         */
        parameters?: RefList<Parameter>;

    }
