import { render } from "solid-js/web";
import { inject } from "@vercel/analytics";
import { injectSpeedInsights } from "@vercel/speed-insights";
import "../styles.out.css";
import "../theme-toggle.css";
import App from "./App";
import "./gsap-animations.js";
import "./tippy-tooltips.js";

/* Vite + Solid: use `inject` for analytics and `injectSpeedInsights` from the root package.
 * The Next.js components only apply to Next.js App Router. */
inject();
injectSpeedInsights({ framework: "solid" });

/* eslint-disable @typescript-eslint/no-non-null-assertion */
const root = document.getElementById("root")!;

render(() => <App />, root);
