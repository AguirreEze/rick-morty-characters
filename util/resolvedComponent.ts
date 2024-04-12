// Util function required for testing async components

export default async function resolvedComponent<T>(
  Component: (props: T) => Promise<JSX.Element>,
  props: T
): Promise<() => JSX.Element> {
  const ComponentResolved = await Component(props);
  return () => ComponentResolved;
}
