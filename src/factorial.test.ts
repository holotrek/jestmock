import * as f from './factorial';

describe("factorial tests", () => {
  test("multiply called n times", () => {
    const mock = jest.spyOn(f, "multiply");
    mock.mockReturnValue(1); // always return 1 from multiply to check mock
    const result = f.factorial(5);
    expect(f.multiply).toHaveBeenCalledTimes(5);
    expect(result).toBe(1); // proves method is actually mocked since it is not 120
  });
});
