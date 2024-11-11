import { GraphQLError } from "graphql";

import { TGraphQLContext } from "@/types";

type createStoreInput = {
  name: string;
  website: string;
  telegram: string;
  instagram: string;
  activityField: string;
};

export default async function createStoreMutation(
  _: unknown,
  {
    input,
  }: {
    input: createStoreInput;
  },
  ctx: TGraphQLContext,
) {
  try {
    const store = await ctx.prisma?.store.create({
      data: {
        ...input,
      },
    });

    return store;

    // eslint-disable-next-line
  } catch (_) {
    throw new GraphQLError(
      "ساخت فروشگاه با مشکل مواجه شد! لطفا بعدا امتحان کنید",
      { extensions: { code: 500 } },
    );
  }
}
