import { createTRPCRouter } from "./trpc";
import { exampleRouter } from "./routers/example";
import { wordRouter } from "./routers/wordRouter";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  word: wordRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
