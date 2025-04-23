import type { XOR } from '../util/xor.js';
import type { SpecificationExtensions } from '../meta/index.js';
import type { URL } from '../string/url.js';


/**
 * License information for the exposed API.
 *
 * @see https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.1.0.md#license-object
 */
export type License = SpecificationExtensions & {

    /**
     * The license name used for the API.
     */
    name: string;

} & XOR<

    /**
     * An [SPDX](https://spdx.org/licenses/) license expression for the API.
     * The identifier field is mutually exclusive of the url field.
     */
    { identifier: string },

    /**
     * A URL to the license used for the API. MUST be in the format of a URL.
     * The url field is mutually exclusive of the identifier field.
     */
    { url: URL }

>;
