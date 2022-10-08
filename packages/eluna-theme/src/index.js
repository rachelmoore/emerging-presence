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
  actions: {
    theme: {
      beforeSSR: async ({ state, libraries, actions }) => {
        console.log('Gonna SSR this page');
        await actions.source.fetch("/introduction/introduction/");
      }
    },
  },
  libraries: {
    html2react: {
      processors: [link]
    }
  }
}

export default elunaTheme;
