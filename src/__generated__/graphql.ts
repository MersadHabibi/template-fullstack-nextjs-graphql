/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: Date; output: Date; }
  PositiveFloat: { input: number; output: number; }
  PositiveInt: { input: number; output: number; }
  URL: { input: string; output: string; }
};

export enum Experiences_Sorts {
  HighestScore = 'HIGHEST_SCORE',
  LowestScore = 'LOWEST_SCORE',
  MostRelevant = 'MOST_RELEVANT',
  Newest = 'NEWEST'
}

export type Experience = {
  __typename?: 'Experience';
  Store: Store;
  body: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  orderDate?: Maybe<Scalars['DateTime']['output']>;
  product?: Maybe<Scalars['String']['output']>;
  score: Scalars['PositiveFloat']['output'];
  storeId: Scalars['ID']['output'];
  title: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createStore?: Maybe<Store>;
};


export type MutationCreateStoreArgs = {
  input?: InputMaybe<CreateStoreInput>;
};

export type Pagination = {
  __typename?: 'Pagination';
  currentPage?: Maybe<Scalars['Int']['output']>;
  pageSize?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type PaginationExperiences = {
  __typename?: 'PaginationExperiences';
  data: Array<Maybe<Experience>>;
  pageInfo: Pagination;
};

export type PaginationStores = {
  __typename?: 'PaginationStores';
  data: Array<Maybe<Store>>;
  pageInfo: Pagination;
};

export type Query = {
  __typename?: 'Query';
  stores: PaginationStores;
};


export type QueryStoresArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Stores_Sorts>;
};

export enum Stores_Sorts {
  HighestScore = 'HIGHEST_SCORE',
  LowestScore = 'LOWEST_SCORE',
  MostExperiences = 'MOST_EXPERIENCES',
  MostRelevant = 'MOST_RELEVANT'
}

export type Store = {
  __typename?: 'Store';
  activityField: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  experiences?: Maybe<Array<Maybe<Experience>>>;
  experiencesCount: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  instagram?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  score: Scalars['Float']['output'];
  telegram?: Maybe<Scalars['String']['output']>;
  view: Scalars['Int']['output'];
  website?: Maybe<Scalars['URL']['output']>;
};

export type CreateExperienceInput = {
  body: Scalars['String']['input'];
  orderDate?: InputMaybe<Scalars['DateTime']['input']>;
  product?: InputMaybe<Scalars['String']['input']>;
  score: Scalars['PositiveInt']['input'];
  storeId: Scalars['ID']['input'];
  title: Scalars['String']['input'];
};

export type CreateStoreInput = {
  activityField: Scalars['String']['input'];
  instagram?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  telegram?: InputMaybe<Scalars['String']['input']>;
  website?: InputMaybe<Scalars['URL']['input']>;
};

export type CreateStoreMutationVariables = Exact<{
  input?: InputMaybe<CreateStoreInput>;
}>;


export type CreateStoreMutation = { __typename?: 'Mutation', createStore?: { __typename?: 'Store', id: string } | null };

export type AllStoresQueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Stores_Sorts>;
}>;


export type AllStoresQuery = { __typename?: 'Query', stores: { __typename?: 'PaginationStores', pageInfo: { __typename?: 'Pagination', currentPage?: number | null, pageSize?: number | null, totalPages?: number | null }, data: Array<{ __typename?: 'Store', id: string, name: string, activityField: string, experiencesCount: number, website?: string | null, score: number } | null> } };


export const CreateStoreDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createStore"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"createStoreInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createStore"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateStoreMutation, CreateStoreMutationVariables>;
export const AllStoresDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllStores"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"search"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sort"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"STORES_SORTS"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stores"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"pageSize"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}}},{"kind":"Argument","name":{"kind":"Name","value":"search"},"value":{"kind":"Variable","name":{"kind":"Name","value":"search"}}},{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sort"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currentPage"}},{"kind":"Field","name":{"kind":"Name","value":"pageSize"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}}]}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"activityField"}},{"kind":"Field","name":{"kind":"Name","value":"experiencesCount"}},{"kind":"Field","name":{"kind":"Name","value":"website"}},{"kind":"Field","name":{"kind":"Name","value":"score"}}]}}]}}]}}]} as unknown as DocumentNode<AllStoresQuery, AllStoresQueryVariables>;