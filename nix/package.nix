{ buildNpmPackage }:
buildNpmPackage {
  name = "liftkit-tailwindcss";
  src = builtins.path {
    name = "source";
    path = ./.;
  };
  npmDepsHash = "sha256-ZFkmUUKFHzs9bO66AGTdS131kfETsHXqyDnrkQIHHjA=";
  dontNpmBuild = true;
  doCheck = true;
  checkPhase = "npm run test";
}
