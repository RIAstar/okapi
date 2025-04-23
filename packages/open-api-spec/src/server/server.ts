import type { WithDescription } from '../docs/index.js';
import type { SpecificationExtensions } from '../meta/index.js';
import type { URL } from '../string/url.js';

import type { ServerVariable } from './server-variable.js';


/**
 * An object representing a Server.
 *
 * @see https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.1.0.md#server-object
 */
export type Server = SpecificationExtensions & WithDescription & {

    /**
     * A URL to the target host. This URL supports Server Variables and MAY be relative, to indicate that the host
     * location is relative to the location where the OpenAPI document is being served. Variable substitutions will be
     * made when a variable is named in `{`brackets`}`.
     */
    url: URL;

    /**
     * A map between a variable name and its value. The value is used for substitution in the server's URL template.
     */
    variables?: Record<string, ServerVariable>;

};
