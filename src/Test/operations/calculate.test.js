import calculate from "../../Logic/calculate";

describe("check the operations ' calculation", () => {
  test(" verify AC button ", () => {
    const AcBtn = calculate({}, "AC");
    expect(AcBtn).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });
});
