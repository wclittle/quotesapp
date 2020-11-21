import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "list" ]

  addHelloWorld() {
    const listEl = this.listTarget
    var itemEl = document.createElement("li");
    itemEl.innerHTML = "Hello World from a Stimulus controller!";
    listEl.appendChild(itemEl);
  }
}