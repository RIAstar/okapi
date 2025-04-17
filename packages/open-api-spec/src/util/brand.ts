export declare type Brand<T, U> = T & {
    __brand: U;
};

export const brand = <T extends Brand<string, string>>() => (s: string): T => s as T;
