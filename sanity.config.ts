import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";

export default defineConfig({
  name: "rc-design-studio",
  title: "RC Design · Studio",
  projectId,
  dataset,
  basePath: "/studio",
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("RC Design CMS")
          .items([
            S.listItem()
              .title("Configurações do site")
              .id("siteSettings")
              .child(
                S.document()
                  .schemaType("siteSettings")
                  .documentId("siteSettings"),
              ),
            S.divider(),
            S.documentTypeListItem("project").title("Projetos / Cases"),
            S.documentTypeListItem("service").title("Serviços"),
            S.documentTypeListItem("product").title("Produtos SaaS"),
            S.divider(),
            S.documentTypeListItem("post").title("Posts do Blog"),
            S.divider(),
            S.documentTypeListItem("teamMember").title("Equipe"),
            S.documentTypeListItem("testimonial").title("Depoimentos"),
          ]),
    }),
    visionTool({ defaultApiVersion: "2025-05-01" }),
  ],
  schema: { types: schemaTypes },
});
