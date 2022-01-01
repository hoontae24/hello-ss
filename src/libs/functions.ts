export function equals(a: unknown): (b: unknown) => boolean;
export function equals(a: unknown, b: unknown): boolean;
export function equals(
  ...args: [unknown, unknown?]
): boolean | ((b: unknown) => boolean) {
  if (args.length === 1) return (b: unknown) => args[0] === b;
  return args[0] === args[1];
}

export const toggle = <T>(
  list: T[],
  item: T,
  predicate?: (element: T, index: number, list: T[]) => boolean
) => {
  const index = list.findIndex((element, index, list) => {
    if (!predicate) return element === item;
    return predicate(element, index, list);
  });
  if (index === -1) return list.concat(item);
  return [...list.slice(0, index), ...list.slice(index + 1)];
};
