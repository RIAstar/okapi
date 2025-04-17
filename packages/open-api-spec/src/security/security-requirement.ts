/**
 * Defines security requirements for API operations.
 *
 * @description
 * Lists the required security schemes to execute this operation. The name used for each property MUST correspond to a
 * security scheme declared in the Security Schemes under the Components Object.
 *
 * Security Requirement Objects that contain multiple schemes require that all schemes MUST be satisfied for a request
 * to be authorized. This enables support for scenarios where multiple query parameters or HTTP headers are required to
 * convey security information.
 *
 * When a list of Security Requirement Objects is defined on the OpenAPI Object or Operation Object, only one of the
 * Security Requirement Objects in the list needs to be satisfied to authorize the request.
 *
 * @see https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#security-requirement-object
 */
export type SecurityRequirement = Record<string, string[]>;
