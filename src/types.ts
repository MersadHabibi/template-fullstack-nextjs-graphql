import { Prisma, PrismaClient } from "@prisma/client";
import { DefaultArgs } from "@prisma/client/runtime/library";
import { NextRequest } from "next/server";

export type TGraphQLContext = {
  req?: NextRequest;
  prisma?: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>;
};

export type TStore = {
  id: string;
  name: string;
  website?: string | null;
  instagram?: string | null;
  telegram?: string | null;
  activityField: string;
  experiencesCount: number;
  view: number;
  score: number;
};
