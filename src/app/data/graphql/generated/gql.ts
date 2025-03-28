/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "mutation createBoard($data: BoardInput!) {\n  createBoard(data: $data) {\n    id\n    name\n  }\n}": typeof types.CreateBoardDocument,
    "mutation login($data: LoginInput!) {\n  login(data: $data) {\n    token\n    user {\n      id\n      name\n      email\n    }\n  }\n}": typeof types.LoginDocument,
    "mutation CreateUser($data: UserInput!) {\n  createUser(data: $data) {\n    token\n    user {\n      id\n      email\n      name\n    }\n  }\n}": typeof types.CreateUserDocument,
};
const documents: Documents = {
    "mutation createBoard($data: BoardInput!) {\n  createBoard(data: $data) {\n    id\n    name\n  }\n}": types.CreateBoardDocument,
    "mutation login($data: LoginInput!) {\n  login(data: $data) {\n    token\n    user {\n      id\n      name\n      email\n    }\n  }\n}": types.LoginDocument,
    "mutation CreateUser($data: UserInput!) {\n  createUser(data: $data) {\n    token\n    user {\n      id\n      email\n      name\n    }\n  }\n}": types.CreateUserDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation createBoard($data: BoardInput!) {\n  createBoard(data: $data) {\n    id\n    name\n  }\n}"): (typeof documents)["mutation createBoard($data: BoardInput!) {\n  createBoard(data: $data) {\n    id\n    name\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation login($data: LoginInput!) {\n  login(data: $data) {\n    token\n    user {\n      id\n      name\n      email\n    }\n  }\n}"): (typeof documents)["mutation login($data: LoginInput!) {\n  login(data: $data) {\n    token\n    user {\n      id\n      name\n      email\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CreateUser($data: UserInput!) {\n  createUser(data: $data) {\n    token\n    user {\n      id\n      email\n      name\n    }\n  }\n}"): (typeof documents)["mutation CreateUser($data: UserInput!) {\n  createUser(data: $data) {\n    token\n    user {\n      id\n      email\n      name\n    }\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;