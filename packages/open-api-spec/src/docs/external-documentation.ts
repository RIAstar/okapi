import type { SpecificationExtensions } from '../meta';
import type { URL } from '../string/url';

import type { WithDescription } from './description';


/**
 * Allows referencing an external resource for extended documentation.
 *
 * @see https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.1.0.md#external-documentation-object
 */
export type ExternalDocumentation = SpecificationExtensions & WithDescription & {

    /** The URL for the target documentation. Value MUST be in the format of a URL. */
    url: URL;

};
