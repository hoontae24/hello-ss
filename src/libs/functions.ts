export function equals(a: unknown): (b: unknown) => boolean;
export function equals(a: unknown, b: unknown): boolean;
export function equals(...args: [unknown, unknown?]): boolean | ((b: unknown) => boolean) {
  if (args.length === 1) return (b: unknown) => args[0] === b;
  return args[0] === args[1];
}
