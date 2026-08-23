export interface PackageJson {
  dependencies?: Record<string, string>;
  devDependencies?: Record<string, string>;
  peerDependencies?: Record<string, string>;
}

export function getAllDependencyNames({
  dependencies = {},
  devDependencies = {},
  peerDependencies = {},
}: PackageJson) {
  return [dependencies, devDependencies, peerDependencies].flatMap((dependencyType) =>
    Object.keys(dependencyType),
  );
}
