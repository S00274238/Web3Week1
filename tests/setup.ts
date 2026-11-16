import { connectDB, disconnectDB} from "../src/config/database";
import { afterAll, beforeAll } from "vitest";

beforeAll(async () => {
    console.log('Run once before tests');
   await connectDB();

});



afterAll(async () => {
    console.log('Run once after tests');
   await disconnectDB();
});
