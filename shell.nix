{ pkgs ? import <nixpkgs> {} }:

with pkgs;

let

  webview_deno = callPackage ./nix/webview_deno {};

in

pkgs.mkShell {

  buildInputs = with pkgs; [
    deno
  ];

  shellHook = ''
    echo "next steps:"
    cat <<'EOF'
    WEBVIEW_DENO_LIBWEBVIEW=${webview_deno} deno run -Ar --unstable main.ts
    EOF
  '';

}
