import Root from "./components"
import link from "@frontity/html2react/processors/link";

const elunaTheme = {
  name: "eluna-theme",
  roots: {
    theme: Root,
  },
  state: {
    theme: {
      isUrlVisible: false,
    },
  },
  libraries: {
    html2react: {
      processors: [link]
    }
  }
}

export default elunaTheme;
