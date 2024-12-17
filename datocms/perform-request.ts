import { executeQuery, ExecuteQueryOptions } from "@datocms/cda-client";
import { TypedDocumentNode } from "@graphql-typed-document-node/core";
export const cacheTag = "datocms";
export function performRequest<T, U>(
  query: TypedDocumentNode<T, U>,
  options?: Partial<ExecuteQueryOptions<unknown>>
): Promise<T> {
  const queryOptions: ExecuteQueryOptions = {
    requestInitOptions: {
      cache: "force-cache",
    },
    includeDrafts: options?.includeDrafts,
    token: options?.includeDrafts
      ? process.env.NEXT_PUBLIC_DATOCMS_CDA_DRAFT_TOKEN!
      : process.env.NEXT_DATOCMS_CDA_TOKEN!,
    excludeInvalid: false,
    ...options,
  };

  return executeQuery<T>(query, queryOptions);
}
