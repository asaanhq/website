/* @refresh reload */
import { render } from "solid-js/web";

import App from "./app";

render(() => <App />, document.querySelector("#root") as HTMLElement);
