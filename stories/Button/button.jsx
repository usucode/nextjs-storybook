import React from "react"
import { storiesOf } from "@storybook/react"
import { Button } from "@storybook/react/demo"

const README = `
# Button Readme

\`\`\`js
console.log("Hell Button")
\`\`\`
`

storiesOf("Components/Button", module)
  .addParameters({
    backgrounds: [
      { name: "white", value: "#fff", default: true },
      { name: "dark", value: "#555" },
    ],
  })
  .add(
    "button1",
    () => (
      <Button variant="contained">
        <span role="img" aria-label="so cool">
          😀 😎 👍 💯
        </span>
      </Button>
    ),
    { notes: README }
  )
