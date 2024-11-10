import createStoreMutation from "@/graphql/server/createStoreMutation";
import { TGraphQLContext, TStore } from "@/types";
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
    // EXAMPLE
    stores: async (_: any, args: {}, ctx: TGraphQLContext) => {
      try {
        return { name: "" };
      } catch (error) {
        throw new GraphQLError("سرور با مشکل مواجه شد! لطفا بعدا امتحان کنید", {
          extensions: { code: 500 },
        });
      }
    },
  },

  Mutation: {
    createStore: createStoreMutation,
  },

  // EXAMPLE

  // Store: {
  //   experiences: async (store: TStore, _: any, ctx: TGraphQLContext) => {
  //     try {
  //       const experiences = await ctx.prisma?.experience.findMany({
  //         where: {
  //           storeId: store.id,
  //         },
  //       });

  //       return experiences;
  //     } catch (error) {
  //       throw new GraphQLError("سرور با مشکل مواجه شد! لطفا بعدا امتحان کنید", {
  //         extensions: { code: 500 },
  //       });
  //     }
  //   },
  // },
};

export default resolvers;
