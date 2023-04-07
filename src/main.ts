import "./styles/tailwind.css";
import "./styles/main.css";
import "./styles/text.css";
import Alpine from "alpinejs";
import "./js/color.js";

window.Alpine = Alpine;


Alpine.start();

export function count(x: number, y: number) {
  return x + y;
}
