import type { SpecificationExtensions } from '../meta';
import type { Semver } from '../string/semver';
import type { URL } from '../string/url';

import type { Contact } from './contact';
import type { License } from './license';


/**
 * The object provides metadata about the API. The metadata MAY be used by the clients if needed, and MAY be presented
 * in editing or documentation generation tools for convenience.
 *
 * @see https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.1.0.md#info-object
 */
export type Info = SpecificationExtensions & {

    /**
     * The title of the API.
     */
    title: string,

    /**
     * A short summary of the API.
     */
    summary?: string,

    /**
     * A short description of the API. [CommonMark syntax](https://spec.commonmark.org/) MAY be used for rich text
     * representation.
     */
    description?: string,

    /**
     * A URL to the Terms of Service for the API. MUST be in the format of a URL.
     */
    termsOfService?: URL,

    /**
     * The contact information for the exposed API.
     */
    contact?: Contact,

    /**
     * The license information for the exposed API.
     */
    license?: License,

    /**
     * The version of the OpenAPI document (which is distinct from the [OpenAPI Specification version](#oasVersion) or
     * the API implementation version).
     */
    version: Semver

};
