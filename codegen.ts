import type { CodegenConfig } from "@graphql-codegen/cli";
import { config as dotenvConfig } from "dotenv";

dotenvConfig();
const serverURL = process.env.SERVER_URL;

const config: CodegenConfig = {
  schema: serverURL,
  documents: "./src/app/data/graphql/**/*.graphql",
  generates: {
    "./src/app/data/graphql/generated/": {
      preset: "client",
      plugins: ["typescript", "typescript-operations", "typed-document-node"],
    },
  },
};

export default config;
