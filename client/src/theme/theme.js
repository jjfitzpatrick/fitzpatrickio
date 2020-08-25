// https://github.com/chakra-ui/chakra-ui/blob/develop/website/pages/docs/theming/modify.mdx
import theme from "@chakra-ui/theme"
import { merge } from "@chakra-ui/utils"

const override = {
  ...theme,
  styles: {
    ...theme.styles,
    global: (props) => ({
      ...theme.styles.global,
      "html, body": {
        scrollBehavior: "smooth",
        minHeight: "100vh"
        // padding: "50px",
      },
    }),
  },
}

export default merge(theme, override)