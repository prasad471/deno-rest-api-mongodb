import { Router } from 'https://deno.land/x/oak/mod.ts';
import {getAllUsers, getUsersById, addUsers, updateUsers, deleteUsersById} from '../controllers/users.ts';


const router = new Router();

router
  .get("/", (context) => {
    context.response.body = "Hello world!";
  })
  .get("/api/v1/users", getAllUsers)
  .get("/api/v1/users/:id", getUsersById)
  .post("/api/v1/users", addUsers)
  .put("/api/v1/users/:id",updateUsers)
  .delete("/api/v1/users/:id", deleteUsersById);


export default router;