import { validate } from "@/core/Validation/Validation";

describe("Validation", () => {
    it ("accepts value and single rule", () => {
        const result = validate("test", {
            string: true,
        });

        expect(result).toBeTruthy();
    });

    it ("accepts value and multiple rules", () => {
        const result = validate("test", {
            string: true,
            lowercase: true
        });

        expect(result).toBeTruthy();
    });

    it ("accepts value with arguments", () => {
        const result = validate("test", {
            exact: "test",
        });

        expect(result).toBeTruthy();
    });

    it ("skips disabled rules", () => {
        const result = validate("test", {
            number: false,
            boolean: false,
        });

        expect(result).toBeTruthy();
    });

    it ("succeeds when there are no rules", () => {
        const result = validate("test", {});

        expect(result).toBeTruthy();
    });

    it ("fails when validator doesn't exists", () => {
        const result = validate("test", {
            // @ts-ignore
            nonExistentValidator: true,
        });

        expect(result).toBeFalsy();
    });

    describe("Rules", () => {
        describe("Equal", () => {
            it ("succeeds when values are equal", () => {
                const result = validate("test", {
                    equal: "test"
                });

                expect(result).toBeTruthy();
            });

            it ("fails when values are not equal", () => {
                const result = validate("test", {
                    equal: "test123"
                });

                expect(result).toBeFalsy();
            });

            it ("succeeds when values are equal, but not identical", () => {
                const result = validate("1", {
                    equal: true
                });

                expect(result).toBeTruthy();
            });

            it ("fails when values are not equal and not identical", () => {
                const result = validate("1", {
                    equal: false
                });

                expect(result).toBeFalsy();
            });
        });

        describe("Exact", () => {
            it ("succeeds when values are exact", () => {
                const result = validate("test", {
                    exact: "test"
                });

                expect(result).toBeTruthy();
            });

            it ("fails when values are not equal", () => {
                const result = validate("1", {
                    exact: true
                });

                expect(result).toBeFalsy();
            });

            it ("fails when values are equal, but not identical", () => {
                const result = validate("1", {
                    exact: true
                });

                expect(result).toBeFalsy();
            });

            it ("fails when values are not equal and not identical", () => {
                const result = validate("1", {
                    exact: false
                });

                expect(result).toBeFalsy();
            });
        });

        describe("Different", () => {
            it ("succeeds when values are different, but same type", () => {
                const result = validate("test", {
                    different: "test1"
                });

                expect(result).toBeTruthy();
            });

            it ("fails when values are not different, but same type", () => {
                const result = validate("test", {
                    different: "test"
                });

                expect(result).toBeFalsy();
            });

            it ("succeeds when values are equal, but different", () => {
                const result = validate("1", {
                    different: true
                });

                expect(result).toBeTruthy();
            });

            it ("succeeds when values are not equal and not identical", () => {
                const result = validate("1", {
                    different: false
                });

                expect(result).toBeTruthy();
            });
        });

        describe("Truthy", () => {
            it ("succeeds when values is truthy", () => {
                const result = validate("test", {
                    truthy: true
                });

                expect(result).toBeTruthy();
            });

            it ("fails when value is falsy", () => {
                const result = validate("", {
                    truthy: true
                });

                expect(result).toBeFalsy();
            });
        });

        describe("Falsy", () => {
            it ("succeeds when value is falsy", () => {
                const result = validate("", {
                    falsy: true,
                });

                expect(result).toBeTruthy();
            });

            it ("fails when value is truthy", () => {
                const result = validate("test", {
                    falsy: true
                });

                expect(result).toBeFalsy();
            });
        });

        describe("Number", () => {
            it("succeeds when value is an integer", () => {
                const result = validate(123, {
                    number: true,
                });

                expect(result).toBeTruthy();
            });

            it("succeeds when value is a float", () => {
                const result = validate(123.45, {
                    number: true,
                });

                expect(result).toBeTruthy();
            });

            it("succeeds when value is 0", () => {
                const result = validate(0, {
                    number: true,
                });

                expect(result).toBeTruthy();
            });

            it("fails when value is a numeric", () => {
                const result = validate("123", {
                    number: true,
                });

                expect(result).toBeFalsy();
            });

            it("fails when value is not a number", () => {
                const result = validate("123", {
                    number: true,
                });

                expect(result).toBeFalsy();
            });
        });

        describe("Integer", () => {
            it("succeeds when value is an integer", () => {
                const result = validate(123, {
                    integer: true,
                });

                expect(result).toBeTruthy();
            });

            it("fails when value is a float", () => {
                const result = validate(123.45, {
                    integer: true,
                });

                expect(result).toBeFalsy();
            });

            it("fails when value is a numeric", () => {
                const result = validate("123", {
                    integer: true,
                });

                expect(result).toBeFalsy();
            });

            it("succeeds when value is 0", () => {
                const result = validate(0, {
                    integer: true,
                });

                expect(result).toBeTruthy();
            });

            it("fails when value is not a number", () => {
                const result = validate("123", {
                    integer: true,
                });

                expect(result).toBeFalsy();
            });
        });

        describe("String", () => {
            it("succeeds when value is a string", () => {
                const result = validate("test", {
                    string: true,
                });

                expect(result).toBeTruthy();
            });

            it("succeeds when value is am empty string", () => {
                const result = validate("", {
                    string: true,
                });

                expect(result).toBeTruthy();
            });

            it("fails when value is not a string", () => {
                const result = validate(123, {
                    string: true,
                });

                expect(result).toBeFalsy();
            });
        });

        describe("Boolean", () => {
            it("succeeds when value is true", () => {
                const result = validate(true, {
                    boolean: true,
                });

                expect(result).toBeTruthy();
            });

            it("succeeds when value is false", () => {
                const result = validate(false, {
                    boolean: true,
                });

                expect(result).toBeTruthy();
            });

            it("fails when value is not a boolean", () => {
                const result = validate("test", {
                    boolean: true,
                });

                expect(result).toBeFalsy();
            });
        });

        describe("Undefined", () => {
            it("succeeds when value is undefined", () => {
                const result = validate(undefined, {
                    undefined: true,
                });

                expect(result).toBeTruthy();
            });

            it("fails when value is not undefined", () => {
                const result = validate("test", {
                    undefined: true,
                });

                expect(result).toBeFalsy();
            });
        });

        describe("Null", () => {
            it("succeeds when value is null", () => {
                const result = validate(null, {
                    null: true,
                });

                expect(result).toBeTruthy();
            });

            it("fails when value is not null", () => {
                const result = validate("test", {
                    null: true,
                });

                expect(result).toBeFalsy();
            });
        });

        describe("Array", () => {
            it("succeeds when value is an array", () => {
                const result = validate([1, 2, 3], {
                    array: true,
                });

                expect(result).toBeTruthy();
            });

            it("succeeds when value is an empty array", () => {
                const result = validate([], {
                    array: true,
                });

                expect(result).toBeTruthy();
            });

            it("fails when value is not an array", () => {
                const result = validate("test", {
                    array: true,
                });

                expect(result).toBeFalsy();
            });
        });

        describe("Object", () => {
            it("succeeds when value is an object", () => {
                const result = validate({ key: "value" }, {
                    object: true,
                });

                expect(result).toBeTruthy();
            });

            it("succeeds when value is an empty object", () => {
                const result = validate({}, {
                    object: true,
                });

                expect(result).toBeTruthy();
            });

            it("fails when value is not an object", () => {
                const result = validate("test", {
                    object: true,
                });

                expect(result).toBeFalsy();
            });
        });

        describe("Date", () => {
            it("succeeds when value is a date string", () => {
                const result = validate("Apr 1, 2020", {
                    date: true,
                });

                expect(result).toBeTruthy();
            });

            it("succeeds when value is a Date object", () => {
                const result = validate(new Date("Apr 1, 2020"), {
                    date: true,
                });

                expect(result).toBeTruthy();
            });

            it("fails when value is not a date", () => {
                const result = validate([], {
                    date: true,
                });

                expect(result).toBeFalsy();
            });
        });

        describe("File", () => {
            it("succeeds when value is a file", () => {
                const file = new File(["test"], "test.txt", {
                   type: "text/plain",
                });

                const result = validate(file, {
                    file: true,
                });

                expect(result).toBeTruthy();
            });

            it("succeeds when value is an empty file", () => {
                const file = new File([], "test.txt", {
                    type: "text/plain",
                });

                const result = validate(file, {
                    file: true,
                });

                expect(result).toBeTruthy();
            });

            it("fails when value is not a file", () => {
                const result = validate("test", {
                    file: true,
                });

                expect(result).toBeFalsy();
            });
        });

        describe("InstanceOf", () => {
            it("succeeds when value instance matches", () => {
                const result = validate(new Date(), {
                    instanceOf: Date,
                });

                expect(result).toBeTruthy();
            });

            it("fails when value instance does not match", () => {
                const result = validate(new Date(), {
                    instanceOf: Number,
                });

                expect(result).toBeFalsy();
            });
        });

        describe("Lowercase", () => {
            it("succeeds when value is lowercase", () => {
                const result = validate("test", {
                    lowercase: true
                });

                expect(result).toBeTruthy();
            });

            it("succeeds when value is lowercase with numbers", () => {
                const result = validate("test123", {
                    lowercase: true
                });

                expect(result).toBeTruthy();
            });

            it("succeeds when value is empty", () => {
                const result = validate("", {
                    lowercase: true
                });

                expect(result).toBeTruthy();
            });

            it("fails when value is not a string", () => {
                const result = validate(123, {
                    lowercase: true
                });

                expect(result).toBeFalsy();
            });
        });

        describe("Uppercase", () => {
            it("succeeds when value is uppercase", () => {
                const result = validate("TEST", {
                    uppercase: true
                });

                expect(result).toBeTruthy();
            });

            it("succeeds when value is uppercase with numbers", () => {
                const result = validate("TEST123", {
                    uppercase: true
                });

                expect(result).toBeTruthy();
            });

            it("succeeds when value is empty", () => {
                const result = validate("", {
                    uppercase: true
                });

                expect(result).toBeTruthy();
            });

            it("fails when value is not a string", () => {
                const result = validate(123, {
                    uppercase: true
                });

                expect(result).toBeFalsy();
            });
        });

        describe("StartsWith", () => {
            it("succeeds when value starts with given value", () => {
                const result = validate("test", {
                    startsWith: "te"
                });

                expect(result).toBeTruthy();
            });

            it("succeeds when given value is empty", () => {
                const result = validate("test", {
                    startsWith: ""
                });

                expect(result).toBeTruthy();
            });

            it("fails when value does not start with given value", () => {
                const result = validate("test", {
                    startsWith: "st"
                });

                expect(result).toBeFalsy();
            });

            it("fails when value is not a string", () => {
                const result = validate(123, {
                    startsWith: "te"
                });

                expect(result).toBeFalsy();
            });
        });

        describe("EndsWith", () => {
            it("succeeds when value ends with given value", () => {
                const result = validate("test", {
                    endsWith: "st"
                });

                expect(result).toBeTruthy();
            });

            it("succeeds when given value is empty", () => {
                const result = validate("test", {
                    endsWith: ""
                });

                expect(result).toBeTruthy();
            });

            it("fails when value does not ends with given value", () => {
                const result = validate("test", {
                    endsWith: "te"
                });

                expect(result).toBeFalsy();
            });

            it("fails when value is not a string", () => {
                const result = validate(123, {
                    endsWith: "te"
                });

                expect(result).toBeFalsy();
            });
        });

        describe("Url", () => {
            it("succeeds when value is a HTTP url", () => {
                const result = validate("http://www.google.com/", {
                    url: true
                });

                expect(result).toBeTruthy();
            });

            it("succeeds when value is a HTTPS url", () => {
                const result = validate("https://www.google.com/", {
                    url: true
                });

                expect(result).toBeTruthy();
            });

            it("fails when value is a url without protocol", () => {
                const result = validate("www.google.com/", {
                    url: true
                });

                expect(result).toBeFalsy();
            });

            it("fails when value is not a url", () => {
                const result = validate("test", {
                    url: true
                });

                expect(result).toBeFalsy();
            });
        });

        describe("Email", () => {
            it("succeeds when value is an email address", () => {
                const result = validate("user@example.com", {
                    email: true
                });

                expect(result).toBeTruthy();
            });

            it("succeeds when there is a dot in first part", () => {
                const result = validate("first.last@example.com", {
                    email: true
                });

                expect(result).toBeTruthy();
            });

            it("fails when first part is missing", () => {
                const result = validate("@example.com", {
                    email: true
                });

                expect(result).toBeFalsy();
            });

            it("fails when TLD and dot are missing", () => {
                const result = validate("user@example", {
                    email: true
                });

                expect(result).toBeFalsy();
            });

            it("fails when TLD is missing", () => {
                const result = validate("user@example.", {
                    email: true
                });

                expect(result).toBeFalsy();
            });

            it("fails when value is not a string", () => {
                const result = validate(123, {
                    email: true
                });

                expect(result).toBeFalsy();
            });
        });

        describe("IpAddress", () => {
            it("succeeds when value is an IP address", () => {
                const result = validate("1.1.1.1", {
                    ipAddress: true
                });

                expect(result).toBeTruthy();
            });

            it("fails when IP address is in range 0.0.0.0 - 0.255.255.255", () => {
                const result = validate("0.0.0.0", {
                    ipAddress: true
                });

                expect(result).toBeFalsy();
            });

            it("fails when value is a string, but not an IP address", () => {
                const result = validate("test", {
                    ipAddress: true
                });

                expect(result).toBeFalsy();
            });

            it("fails when value is not a string", () => {
                const result = validate(123, {
                    ipAddress: true
                });

                expect(result).toBeFalsy();
            });
        });

        describe("Negative", () => {
            it("succeeds when value is a negative number", () => {
                const result = validate(-10, {
                    negative: true
                });

                expect(result).toBeTruthy();
            });

            it("fails when value is a positive number", () => {
                const result = validate(10, {
                    negative: true
                });

                expect(result).toBeFalsy();
            });

            it("fails when value is 0", () => {
                const result = validate(0, {
                    negative: true
                });

                expect(result).toBeFalsy();
            });

            it("fails when value is not a number", () => {
                const result = validate("test", {
                    negative: true
                });

                expect(result).toBeFalsy();
            });
        });

        describe("Positive", () => {
            it("succeeds when value is a positive number", () => {
                const result = validate(10, {
                    positive: true
                });

                expect(result).toBeTruthy();
            });

            it("fails when value is a positive number", () => {
                const result = validate(-10, {
                    positive: true
                });

                expect(result).toBeFalsy();
            });

            it("fails when value is 0", () => {
                const result = validate(0, {
                    positive: true
                });

                expect(result).toBeFalsy();
            });

            it("fails when value is not a number", () => {
                const result = validate("test", {
                    positive: true
                });

                expect(result).toBeFalsy();
            });
        });

        describe("Between", () => {
            it("succeeds when value is between two values", () => {
                const result = validate(5, {
                    between: [0, 10]
                });

                expect(result).toBeTruthy();
            });

            it("succeeds when value is equal to highest valid number", () => {
                const result = validate(10, {
                    between: [0, 10]
                });

                expect(result).toBeTruthy();
            });

            it("succeeds when value is equal to lowest valid number", () => {
                const result = validate(0, {
                    between: [0, 10]
                });

                expect(result).toBeTruthy();
            });

            it("succeeds when min and max are equal and value is valid number", () => {
                const result = validate(0, {
                    between: [0, 0]
                });

                expect(result).toBeTruthy();
            });

            it("fails when value is not between two values", () => {
                const result = validate(-11, {
                    between: [-10, 10]
                });

                expect(result).toBeFalsy();
            });

            it("fails when min and max values are switched", () => {
                const result = validate(5, {
                    between: [10, -10]
                });

                expect(result).toBeFalsy();
            });
        });
    });
});
