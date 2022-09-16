export interface Match<X, Y> {
  on: (pred: (x: X) => boolean, callback: (x: X) => Y) => Match<X, Y>;
  otherwise: (callback: (x: X) => Y) => Y;
}

const matched = <X>(x: X) => {
  return {
    on: () => matched(x),
    otherwise: () => x,
  };
};

export const match = <X, Y>(x: X): Match<X, Y> => {
  return {
    on: (pred, fn) => (pred(x) ? matched(fn(x)) : match(x)),
    otherwise: (fn) => fn(x),
  };
};
