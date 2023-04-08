import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas/index";

const config = defineConfig({
    projectId: "3xv7gn3a",
    dataset: "production",
    title: "My personal page",
    apiVersion: "2023-03-04",
    basePath: "/admin",
    plugins: [deskTool()],
    schema:{ types: schemas }
})

export default config;