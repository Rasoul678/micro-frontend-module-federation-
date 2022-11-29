import { renderHook, act } from "@testing-library/react-hooks";
import useCartCount from "./useCartCount";

let callback = (cart: CartItems) => {};

jest.mock("cart/cart", () => ({
  cart: {
    value: {
      cartItems: [],
    },
    subscribe: (cb: () => void) => {
      callback = cb;
    },
    unsubscribe: jest.fn(),
  },
}));

describe("useCartCount", () => {
  it("should return cart initial count", () => {
    const { result } = renderHook(() => useCartCount());
    expect(result.current).toBe(0);
  });

  it("should return cart count", () => {
    const { result } = renderHook(() => useCartCount());
    act(() => {
      callback({
        cartItems: [
          {
            id: 1,
            description: "",
            image: "",
            longDescription: "",
            name: "",
            price: 10,
            quantity: 1,
          },
        ],
      });
    });
    expect(result.current).toBe(1);
  });
});
