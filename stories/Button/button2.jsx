import React from "react"
import { storiesOf } from "@storybook/react"
import { Button } from "@storybook/react/demo"

const README = `
# Button2 Readme

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
    "button2",
    () => (
      <Button variant="contained" color="primary">
        Hello Button
      </Button>
    ),
    { notes: README }
  )
