import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";
import axios from "axios";
import { type TDictResponse } from "../../../types/dict";

export const wordRouter = createTRPCRouter({
  findData: publicProcedure
    .input(z.object({ word: z.string().min(1) }))
    .query(async ({ input }) => {
      const rawData = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${input.word}`);

      return rawData.data as TDictResponse;
    })
})