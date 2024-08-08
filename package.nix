{ buildNpmPackage }:
buildNpmPackage {
  name = "liftkit-tailwindcss";
  src = builtins.path {
    name = "source";
    path = ./.;
  };
  npmDepsHash = "sha256-OPymzAgeLB3Rm7mWBRyBgGYgEmWLiLDv8OUQze8AiJk=";
  dontNpmBuild = true;
  doCheck = true;
  checkPhase = "npm run test";
}
