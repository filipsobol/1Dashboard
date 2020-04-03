export interface Validators {
    [key: string]: (value: any, parameter?: any) => boolean;
}

export interface Rules {
    required?: boolean;

    /**
     * Equality validators
     */
    equal?: any;

    exact?: any;

    different?: any;

    truthy?: any;

    falsy?: any;

    /**
     * Type validators
     */
    number?: boolean;

    integer?: boolean;

    string?: boolean;

    boolean?: boolean;

    undefined?: boolean;

    null?: boolean;

    array?: boolean;

    object?: boolean;

    date?: boolean;

    file?: boolean;

    instanceOf?: any;

    /**
     * String validators
     */
    lowercase?: boolean;

    uppercase?: boolean;

    startsWith?: string;

    endsWith?: string;

    url?: boolean;

    email?: boolean;

    ipAddress?: boolean;

    /**
     * Number validators
     */
    negative?: boolean;

    positive?: boolean;

    between?: [number, number];

    lessThan?: number;

    lessThanOrEqual?: number;

    greaterThan?: number;

    greaterThanOrEqual?: number;

    even?: boolean;

    odd?: boolean;

    /**
     * Regex validators
     */
    pattern?: RegExp;

    /**
     * File validators
     */
    mimeType?: string;

    image?: boolean;

    /**
     * Multi-type validators
     */
    empty?: boolean;

    length?: number;

    minLength?: number;

    maxLength?: number;

    includes?: any;
}
