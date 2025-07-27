import { BlogWrapper } from "@/components/design-system/blog-wrapper"
import { Content } from "@/components/design-system/content"

function ViteShadcn() {

    return (
        <BlogWrapper
            title='Vite + Tailwind CSS + ShadCN + TypeScript Boilerplate'
            description={`Starting a new project? Here's a clean and scalable boilerplate to kickstart your frontend apps using Vite, Tailwind CSS, ShadCN UI, and TypeScript. This setup is optimized for speed, flexibility, and component reusability.`}
        >
            <Content type="header2">Create project</Content>
            <Content type="paragraph">
                Start by creating a new React project using Vite. Select the React + TypeScript template:
            </Content>

            <Content type="code-block" language="bash">
                {`pnpm create vite@latest`}
            </Content>

            <Content type="header2">Add Tailwind CSS</Content>
            <Content type="code-block" language="bash">
                {`pnpm add tailwindcss @tailwindcss/vite`}
            </Content>

            <Content type="paragraph">
                Replace everything in <code>src/index.css</code> with the following:
            </Content>

            <Content type="code-block" language="css">
                {`@import "tailwindcss";`}
            </Content>

            <Content type="header2">Edit tsconfig.json file</Content>
            <Content type="paragraph">
                The current version of Vite splits TypeScript configuration into three files, two of which need to be edited. Add the <code>baseUrl</code> and <code>paths</code> properties to the <code>compilerOptions</code> section of the <code>tsconfig.json</code> and <code>tsconfig.app.json</code> files:
            </Content>

            <Content type="header3">tsconfig.json</Content>
            <Content type="code-block" language="json">
                {`{
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
}`}
            </Content>

            <Content type="header3">tsconfig.app.json</Content>
            <Content type="paragraph">
                Add the following code to the <code>tsconfig.app.json</code> file to resolve paths, for your IDE:
            </Content>

            <Content type="code-block" language="json">
                {`{
  "compilerOptions": {
    // ...
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
    // ...
  }
}`}
            </Content>

            <Content type="header2">Update vite.config.ts</Content>
            <Content type="paragraph">
                Add the following code to the <code>vite.config.ts</code> so your app can resolve paths without error:
            </Content>

            <Content type="code-block" language="bash">
                {`pnpm add -D @types/node`}
            </Content>

            <Content type="code-block" language="ts">
                {`import path from "path"
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
})`}
            </Content>

            <Content type="header2">Run the CLI</Content>
            <Content type="paragraph">
                Run the <code>shadcn init</code> command to setup your project:
            </Content>

            <Content type="code-block" language="bash">
                {`pnpm dlx shadcn@latest init`}
            </Content>

            <Content type="blockquote">
                You will be asked a few questions to configure components.json.
            </Content>

            <Content type="code-block" language="bash">
                {`Which color would you like to use as base color? › Neutral`}
            </Content>

            <Content type="header2">Add Components</Content>
            <Content type="paragraph">
                You can now start adding components to your project.
            </Content>

            <Content type="code-block" language="bash">
                {`pnpm dlx shadcn@latest add button`}
            </Content>

            <Content type="paragraph">
                The command above will add the Button component to your project. You can then import it like this:
            </Content>

            <Content type="header3">src/App.tsx</Content>

            <Content type="code-block" language="tsx">
                {`import { Button } from "@/components/ui/button"
 
function App() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <Button>Click me</Button>
    </div>
  )
}
 
export default App`}
            </Content>
        </BlogWrapper >
    )
}

export default ViteShadcn
