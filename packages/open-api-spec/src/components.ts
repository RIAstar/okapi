import type { Example } from './docs/index.js';
import type { Callback, Header, Link, Parameter, RequestBody, Response } from './path/index.js';
import type { RefMap } from './meta/index.js';
import type { Schema } from './schema/index.js';
import type { SecurityScheme } from './security/index.js';
import type { PathItem } from './path/index.js';


/**
 * Holds a set of reusable objects for different aspects of the OAS. All objects defined within the components object
 * will have no effect on the API unless they are explicitly referenced from properties outside the components object.
 *
 * @see https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#components-object
 */
export type Components = {

    /** An object to hold reusable Schema Objects. */
    schemas?: Record<string, Schema>;

    /** An object to hold reusable Response Objects. */
    responses?: RefMap<Response>;

    /** An object to hold reusable Parameter Objects. */
    parameters?: RefMap<Parameter>;

    /** An object to hold reusable Example Objects. */
    examples?: RefMap<Example>;

    /** An object to hold reusable RequestBody Objects. */
    requestBodies?: RefMap<RequestBody>;

    /** An object to hold reusable Header Objects. */
    headers?: RefMap<Header>;

    /** An object to hold reusable SecurityScheme Objects. */
    securitySchemes?: RefMap<SecurityScheme>;

    /** An object to hold reusable Link Objects. */
    links?: RefMap<Link>;

    /** An object to hold reusable Callback Objects. */
    callbacks?: RefMap<Callback>;

    /** An object to hold reusable Path Item Object. */
    pathItems?: RefMap<PathItem>;

};
