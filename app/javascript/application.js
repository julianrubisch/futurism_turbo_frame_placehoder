// Entry point for the build script in your package.json
import "@hotwired/turbo-rails";
import "./controllers";
import * as Futurism from "@stimulus_reflex/futurism";
import "./channels";
import consumer from "./channels/consumer";
Futurism.initializeElements();
Futurism.createSubscription(consumer);

document.addEventListener("turbo:load", () => {
  document.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", (event) => {
      const turboFrame = document.querySelector("turbo-frame");
      turboFrame.src = event.target.href;
    });
  });
});
