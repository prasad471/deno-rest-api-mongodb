import { MongoClient } from "https://deno.land/x/mongo@v0.7.0/mod.ts";
import { MONGO_URI } from "./dbConfig.ts";

const client = new MongoClient();
client.connectWithUri(MONGO_URI);

export const db  = client.database("test");
