import useInput from "@/utils/lib/hooks/useInput";
import { act, renderHook } from "@testing-library/react";

test("useInput Custom Hook change product state", () => {
  const { result } = renderHook(() => useInput({ product: "" }));

  act(() =>
    result.current[1]({
      target: { name: "product", value: "스타벅스아메리카노" },
    } as React.ChangeEvent<HTMLInputElement>),
  );

  const { product } = result.current[0];
  expect(product).toStrictEqual("스타벅스아메리카노");
});
