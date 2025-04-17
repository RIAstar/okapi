/* Any HTTP status code. */
export type HttpStatus =
    | SuccessStatus
    | ClientErrorStatus
    | ServerErrorStatus;

/**
 * Standard response for successful HTTP requests. The actual response will depend on the request method used. In a GET
 * request, the response will contain an entity corresponding to the requested resource. In a POST request, the
 * response will contain an entity describing or containing the result of the action.
 */
export const OK = 200;
/**
 * The request has been fulfilled, resulting in the creation of a new resource.
 */
export const CREATED = 201;
/**
 * The request has been accepted for processing, but the processing has not been completed. The request might or might
 * not be eventually acted upon, and may be disallowed when processing occurs.
 */
export const ACCEPTED = 202;
/**
 * The server successfully processed the request and is not returning any content.
 */
export const NO_CONTENT = 204;
/**
 * The server successfully processed the request, but is not returning any content. Unlike a 204 response, this
 * response requires that the requester reset the document view.
 */
export const RESET_CONTENT = 205;
/**
 * Any 2xx success status code.
 */
export type SuccessStatus =
    | typeof OK
    | typeof CREATED
    | typeof ACCEPTED
    | typeof NO_CONTENT
    | typeof RESET_CONTENT;

/* The server cannot or will not process the request due to an apparent client error (e.g., malformed request syntax,
 * size too large, invalid request message framing, or deceptive request routing).
 */
export const BAD_REQUEST = 400;
/**
 * Similar to 403 forbidden, but specifically for use when authentication is required and has failed or has not yet
 * been provided. The response must include a WWW-Authenticate header field containing a challenge applicable to the
 * requested resource. See Basic access authentication and Digest access authentication.
 * Note: Some sites issue HTTP 401 when an IP address is banned from the website (usually the website domain) and that
 * specific address is refused permission to access a website.
 */
export const UNAUTHORIZED = 401;
/**
 * The request was valid, but the server is refusing action. The user might not have the necessary permissions for a
 * resource, or may need an account of some sort.
 */
export const FORBIDDEN = 403;
/**
 * The requested resource could not be found but may be available in the future. Subsequent requests by the client
 * are permissible.
 */
export const NOT_FOUND = 404;
/**
 * The server timed out waiting for the request. According to HTTP specifications: "The client did not produce a
 * request within the time that the server was prepared to wait. The client MAY repeat the request without modifications at any later time."
 */
export const REQUEST_TIMEOUT = 408;
/**
 * The URI provided was too long for the server to process. Often the result of too much data being encoded as a
 * query-string of a GET request, in which case it should be converted to a POST request. Called "Request-URI Too Long" previously.
 */
export const REQUEST_URL_TOO_LONG = 414;
/**
 * Any 4xx client error status code.
 */
export type ClientErrorStatus =
    | typeof BAD_REQUEST
    | typeof UNAUTHORIZED
    | typeof FORBIDDEN
    | typeof NOT_FOUND
    | typeof REQUEST_TIMEOUT
    | typeof REQUEST_URL_TOO_LONG;

/**
 * A generic error message, given when an unexpected condition was encountered and no more specific message is suitable.
 */
export const INTERNAL_SERVER_ERROR = 500;
/**
 * The server was acting as a gateway or proxy and received an invalid response from the upstream server.
 */
export const BAD_GATEWAY = 502;
/**
 * The server is currently unavailable (because it is overloaded or down for maintenance). Generally, this is a temporary state.
 */
export const SERVICE_UNAVAILABLE = 503;
/**
 * The server was acting as a gateway or proxy and did not receive a timely response from the upstream server.
 */
export const GATEWAY_TIMEOUT = 504;
/**
 * Any 5xx server error status code.
 */
export type ServerErrorStatus =
    | typeof INTERNAL_SERVER_ERROR
    | typeof BAD_GATEWAY
    | typeof SERVICE_UNAVAILABLE
    | typeof GATEWAY_TIMEOUT;
