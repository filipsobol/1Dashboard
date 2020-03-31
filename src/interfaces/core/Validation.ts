export interface Rules {
    /**
     * Equality validators
     */
    equal?: any,

    exact?: any,

    different?: any,

    /**
     * Type validators
     */
    number?: boolean,

    integer?: boolean,

    numeric?: boolean,

    string?: boolean,

    boolean?: boolean,

    undefined?: boolean,

    null?: boolean,

    array?: boolean,

    object?: boolean,

    date?: boolean,

    file?: boolean,

    instanceOf?: boolean,

    /**
     * String validators
     */
    lowercase?: boolean,

    uppercase?: boolean,

    startsWith?: boolean,

    endsWith?: boolean,

    url?: boolean,

    email?: boolean,

    ipAddress?: boolean,

    /**
     * Array validators
     */
    empty?: boolean,

    length?: number,

    minLength?: number,

    maxLength?: number,

    /**
     * Number validators
     */
    negative?: boolean,

    positive?: boolean,

    between?: [number, number],

    lessThan?: number,

    lessThanOrEqual?: number,

    greaterThan?: number,

    greaterThanOrEqual?: number,

    even?: boolean,

    odd?: boolean,

    /**
     * Regex validators
     */
    pattern?: RegExp,

    /**
     * File validators
     */
    mimeType?: string,

    image?: boolean,

    /**
     * Multi-type validators
     */
    includes?: any,
}
