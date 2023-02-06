import { z } from "zod";

const DictResponse = z.array(z.object({
  word: z.string(),
  phonetic: z.string(),
  phonetics: z.array(z.object({
    text: z.string(),
    audio: z.string(),
    sourceUrl: z.string(),
    license: z.object({
      name: z.string(),
      url: z.string()
    })
  })),
  meanings: z.array(z.object({
    partOfSpeech: z.string(),
    definitions: z.array(z.object({
      definition: z.string(),
      synonyms: z.array(z.string()),
      antonyms: z.array(z.string()),
    }).partial()),
    synonyms: z.array(z.string()),
    antonyms: z.array(z.string()),
  }).partial()),
  license: z.object({
    name: z.string(),
    url: z.string(),
  }).partial(),
  sourceUrls: z.array(z.string())
}));

export type TDictResponse = z.infer<typeof DictResponse>;