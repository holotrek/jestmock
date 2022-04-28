import * as f from './factorial';
//import { multiply } from './multiply';

// jest.mock("./multiply", () => ({
//   multiply: jest.fn(),
// }));

describe("factorial tests", () => {
  test("multiply called n times", () => {
    const mock = jest.spyOn(f, "multiply");
    mock.mockReturnValue(1);
    f.factorial(5);
    expect(f.multiply).toHaveBeenCalledTimes(5);
  });
});
