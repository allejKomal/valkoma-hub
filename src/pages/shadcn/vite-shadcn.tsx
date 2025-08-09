import { BlogWrapper } from "@/components/design-system/blog-wrapper"
import { Markdown } from "valkoma-package/design-system"

function ViteShadcn() {

  const markdownContent = `
Here's your content converted into clean and well-structured **Markdown**:

\`\`\`markdown
## Create project

Start by creating a new React project using Vite. Select the React + TypeScript template:

\`\`\`bash
pnpm create vite@latest
\`\`\`

## Add Tailwind CSS

\`\`\`bash
pnpm add tailwindcss @tailwindcss/vite
\`\`\`

Replace everything in \`src/index.css\` with the following:

\`\`\`css
@import "tailwindcss";
\`\`\`

## Edit tsconfig.json file

The current version of Vite splits TypeScript configuration into three files, two of which need to be edited. Add the \`baseUrl\` and \`paths\` properties to the \`compilerOptions\` section of the \`tsconfig.json\` and \`tsconfig.app.json\` files:

### tsconfig.json

\`\`\`json
{
  "files": [],
  "references": [
    {
      "path": "./tsconfig.app.json"
    },
    {
      "path": "./tsconfig.node.json"
    }
  ],
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
\`\`\`

### tsconfig.app.json

Add the following code to the \`tsconfig.app.json\` file to resolve paths, for your IDE:

\`\`\`json
{
  "compilerOptions": {
    // ...
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
    // ...
  }
}
\`\`\`

## Update vite.config.ts

Add the following code to the \`vite.config.ts\` so your app can resolve paths without error:

\`\`\`bash
pnpm add -D @types/node
\`\`\`

\`\`\`ts
import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
\`\`\`

## Run the CLI

Run the \`shadcn init\` command to setup your project:

\`\`\`bash
pnpm dlx shadcn@latest init
\`\`\`

> You will be asked a few questions to configure components.json.

\`\`\`bash
Which color would you like to use as base color? › Neutral
\`\`\`

## Add Components

You can now start adding components to your project.

\`\`\`bash
pnpm dlx shadcn@latest add button
\`\`\`

The command above will add the Button component to your project. You can then import it like this:

### src/App.tsx

\`\`\`tsx
import { Button } from "@/components/ui/button"

function App() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <Button>Click me</Button>
    </div>
  )
}

export default App
\`\`\`
\`\`\`
`;

  return (
    <BlogWrapper
      title='Vite + Tailwind CSS + ShadCN + TypeScript Boilerplate'
      description={`Starting a new project ? Here's a clean and scalable boilerplate to kickstart your frontend apps using Vite, Tailwind CSS, ShadCN UI, and TypeScript. This setup is optimized for speed, flexibility, and component reusability.`}
    >
      <Markdown markdown={markdownContent} />
    </BlogWrapper >
  )
}

export default ViteShadcn
