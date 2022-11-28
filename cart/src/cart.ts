import { BehaviorSubject } from "rxjs";
import { useLoggedIn } from "./hooks/useLoggedIn";

const BASE_URL = "http://localhost:8080";

export const jwt = new BehaviorSubject("");
export const cart: BehaviorSubject<CartItems> = new BehaviorSubject(null);

export const login = async (
  username: string,
  password: string
): Promise<string> => {
  let data: any;

  try {
    const res = await fetch(`${BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    if (res.ok) {
      data = await res.json();
    }
  } catch (error) {
    console.log((error as Error).message);
    throw error;
  }

  if (data.access_token) {
    jwt.next(data.access_token);
    await getCart();
    return data.access_token;
  }

  return null;
};

//* Get user cart
export const getCart = async (): Promise<CartItems> => {
  let data: any;

  try {
    const res = await fetch(`${BASE_URL}/cart`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt.value}`,
      },
    });

    if (res.ok) {
      data = await res.json();
      cart.next(data);
    }
  } catch (error) {
    console.log((error as Error).message);
    throw error;
  }

  return data;
};

//* Add item to user's cart
export const addToCart = async (id: string) => {
  try {
    const res = await fetch(`${BASE_URL}/cart`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt.value}`,
      },
      body: JSON.stringify({ id }),
    });

    if (res.ok) {
      const newCart = await res.json();
      cart.next(newCart);
    }
  } catch (error) {
    console.log((error as Error).message);
    throw error;
  }
};

//* Clear cart
export const clearCart = async () => {
  try {
    const res = await fetch(`${BASE_URL}/cart`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt.value}`,
      },
    });

    if (res.ok) {
      const data = await res.json();
      cart.next(data);
    }
  } catch (error) {
    console.log((error as Error).message);
    throw error;
  }
};

export default {
  jwt,
  cart,
  login,
  getCart,
  addToCart,
  clearCart,
  useLoggedIn,
};
