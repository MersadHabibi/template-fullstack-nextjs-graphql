/* eslint-disable */
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
};

export type Store = {
  __typename?: 'Store';
  activityField: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  experiencesCount: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  instagram?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  score: Scalars['Float']['output'];
  telegram?: Maybe<Scalars['String']['output']>;
  view: Scalars['Int']['output'];
  website?: Maybe<Scalars['URL']['output']>;
};

export type CreateStoreInput = {
  activityField: Scalars['String']['input'];
  instagram?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  telegram?: InputMaybe<Scalars['String']['input']>;
  website?: InputMaybe<Scalars['URL']['input']>;
};
