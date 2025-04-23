import type { SpecificationExtensions } from '../meta/index.js';
import type { Email } from '../string/email.js';
import type { URL } from '../string/url.js';


/**
 * Contact information for the exposed API.
 *
 * @see https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.1.0.md#contact-object
 */
export type Contact = SpecificationExtensions & {

    /**
     * The identifying name of the contact person/organization.
     */
    name?: string,

    /**
     * The URL pointing to the contact information. MUST be in the format of a URL.
     */
    url?: URL,

    /**
     * The email address of the contact person/organization. MUST be in the format of an email address.
     */
    email?: Email

}
