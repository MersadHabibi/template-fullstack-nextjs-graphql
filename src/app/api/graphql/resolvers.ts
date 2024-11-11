import { STORES_SORTS } from "@/enums";
import createStoreMutation from "@/graphql/server/createStoreMutation";
import { TGraphQLContext } from "@/types";
import { GraphQLError } from "graphql";
import {
  DateTimeResolver,
  PositiveFloatResolver,
  PositiveIntResolver,
  URLResolver,
} from "graphql-scalars";

const resolvers = {
  DateTime: DateTimeResolver,
  PositiveFloat: PositiveFloatResolver,
  PositiveInt: PositiveIntResolver,
  URL: URLResolver,

  Query: {
    stores: async (
      _: unknown,
      args: {
        page?: number;
        pageSize?: number;
        search?: string;
        sort?: STORES_SORTS;
      },
      ctx: TGraphQLContext,
    ) => {
      try {
        const stores = await ctx?.prisma?.store.findMany({
          orderBy: {
            score:
              args.sort === STORES_SORTS.HIGHEST_SCORE
                ? "desc"
                : args.sort === STORES_SORTS.LOWEST_SCORE
                  ? "asc"
                  : undefined,
            experiencesCount:
              args.sort === STORES_SORTS.MOST_EXPERIENCES ? "desc" : undefined,
          },
          where: {
            OR: [
              {
                name: {
                  contains: args.search || "",
                  mode: "insensitive",
                },
              },
              {
                activityField: {
                  contains: args.search || "",
                  mode: "insensitive",
                },
              },
            ],
          },
          skip: args.pageSize
            ? ((args.page || 0) - 1) * args.pageSize
            : undefined,
          take: args.pageSize || undefined,
        });

        const totalStores =
          (await ctx?.prisma?.store.count({
            where: {
              OR: [
                { name: { contains: args.search || "", mode: "insensitive" } },
                {
                  activityField: {
                    contains: args.search || "",
                    mode: "insensitive",
                  },
                },
              ],
            },
          })) || 0;
        const totalPages = Math.ceil(totalStores / (args.pageSize || 1));

        return {
          pageInfo: {
            currentPage: args.page || undefined,
            pageSize: args.pageSize || undefined,
            totalPages: totalPages || undefined,
          },
          data: stores,
        };
      } catch (error: unknown) {
        console.log(error);
        throw new GraphQLError("سرور با مشکل مواجه شد! لطفا بعدا امتحان کنید", {
          extensions: { code: 500 },
        });
      }
    },
  },

  Mutation: {
    createStore: createStoreMutation,
  },
};

export default resolvers;
