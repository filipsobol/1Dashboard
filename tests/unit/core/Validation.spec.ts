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
    });
});
