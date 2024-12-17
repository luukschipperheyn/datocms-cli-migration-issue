import { CodegenConfig } from "@graphql-codegen/cli";
import { config as dotenvConfig } from "dotenv";

dotenvConfig();

const environment = "develop";

const headers: {
  [headerName: string]: string;
} = {
  Authorization: `Bearer ${process.env.DATOCMS_API_TOKEN}`,
  "X-Exclude-Invalid": "true",
};

if (environment) {
  headers["X-Environment"] = environment;
}

const config: CodegenConfig = {
  schema: [
    {
      "https://graphql.datocms.com": {
        headers,
      },
    },
  ],
  documents: "./**/*.graphql",
  generates: {
    "graphql/generated.ts": {
      plugins: ["typescript", "typescript-operations", "typed-document-node"],
      config: {
        strictScalars: true,
        scalars: {
          BooleanType: "boolean",
          CustomData: "Record<string, unknown>",
          Date: "string",
          DateTime: "string",
          FloatType: "number",
          IntType: "number",
          ItemId: "string",
          JsonField: "unknown",
          MetaTagAttributes: "Record<string, string>",
          UploadId: "string",
        },
        namingConvention: {
          enumValues: "./pascalCaseWithUnderscores",
        },
      },
    },
  },
};

export default config;
