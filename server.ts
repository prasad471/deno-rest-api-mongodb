import { Application, Router } from 'https://deno.land/x/oak/mod.ts';
const port = 3000;
import router from './routes/routes.ts';

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());


console.log(`Server running on port ${port}`);

await app.listen({ port });