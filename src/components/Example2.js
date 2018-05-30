import template from "../static/example2.html";

export default {
  name: "Example2",

  template,

  data() {
    return {
      customMessage:
        "I'm using data from a component inside of a static HTML file."
    };
  }
};
