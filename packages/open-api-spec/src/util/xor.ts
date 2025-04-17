type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never
};

export type XOR<T extends object, U extends object> =
    | (Without<T, U> & U)
    | (Without<U, T> & T);
