import { Brand } from '../util/brand';
import { ExternalDocumentation, WithDescription } from '../docs';

import { SpecificationExtensions } from './spec-extensions';


export type TagName = Brand<string, '@okapi/tag-name'>;

/**
 * Adds metadata to a single tag that is used by the [Operation Object](#operationObject). It is not mandatory to have a
 * Tag Object per tag defined in the Operation Object instances.
 *
 * @see https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.1.0.md#tag-object
 */
export type Tag = SpecificationExtensions & WithDescription & {

    /**
     * The name of the tag.
     */
    name: TagName;

    /**
     * Additional external documentation for this tag.
     */
    externalDocs?: ExternalDocumentation;

};
