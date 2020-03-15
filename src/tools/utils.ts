
export function noop(...args: any[]) { }

export function genUid(): string {
  const id = +Date.now() % 1000000;
  return id.toString();
}
