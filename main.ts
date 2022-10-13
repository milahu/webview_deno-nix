#! /usr/bin/env -S deno run -Ar --unstable

/*
deno run -Ar --unstable https://deno.land/x/webview/examples/local.ts
*/

/*
https://doc.deno.land/deno/unstable/~/Deno.dlopen

error: Uncaught (in promise) Error: Could not open library: Could not open library: libwebkit2gtk-4.0.so.37: cannot open shared object file: No such file or directory
  return Deno.dlopen(file, symbols);
              ^
    at new DynamicLibrary (deno:ext/ffi/00_ffi.js:292:39)
    at Object.dlopen (deno:ext/ffi/00_ffi.js:396:12)
    at prepare (https://deno.land/x/plug@0.5.2/plug.ts:117:15)
    at async https://deno.land/x/webview@0.7.5/src/ffi.ts:102:20

*/

// FIXME use same webview_deno in
// main.ts and nix/webview_deno/default.nix

// https://github.com/webview/webview_deno
//import { Webview } from "https://deno.land/x/webview@0.7.5/mod.ts";
import { Webview } from "./src/webview_deno/mod.ts";



const html = `
  <html>
  <body>
    <h1>Hello from deno v${Deno.version.deno}</h1>
  </body>
  </html>
`;

const webview = new Webview();

webview.navigate(`data:text/html,${encodeURIComponent(html)}`);
webview.run();
