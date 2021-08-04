declare module '*.json5' {
  const res: { name: string; age: number; };
  export default res;
}

declare module '*.png' {
  const res: string;
  export default res;
}