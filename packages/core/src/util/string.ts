export type Camelize<T extends string> = T extends string
    ? string extends T
        ? string
        : T extends `${infer F}_${infer R}`
        ? `${Lowercase<F>}${Capitalize<Camelize<Lowercase<R>>>}`
        : Lowercase<T>
    : T;

export type Pascalize<T extends string> = Capitalize<Camelize<T>>;

export const capitalize = <T extends string>(str: T): Capitalize<T> =>
    (str[0].toUpperCase() + str.substring(1)) as any;

export const snakeToCamel = <T extends string>(str: T): Camelize<T> => {
    const split = str.split('_').map(s => s.toLowerCase());
    const first = split[0].toLowerCase();

    const rest = split.slice(1).map(r => capitalize(r));

    return (first + rest.join()) as any;
};

export const snakeToPascal = <T extends string>(str: T): Pascalize<T> => {
    return capitalize(snakeToCamel(str));
};
