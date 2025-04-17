type ValuesType<T extends Record<string | number | symbol, unknown>> = T[keyof T];

export const Method = {
    GET: 'get',
    PUT: 'put',
    POST: 'post',
    DELETE: 'delete',
    OPTIONS: 'options',
    HEAD: 'head',
    PATCH: 'patch',
    TRACE: 'trace'
} as const;

export type Method = ValuesType<typeof Method>;

export const isMethod = (s: string): s is Method => Object.values(Method).includes(s as Method);
