import { db } from '../db.ts'
const users = db.collection("users");

//Get all users

const getAllUsers = async (context: { response: any, throw: any }) => {
    const { response } = context;
    try {
        const allUsers = await users.find({});
        if (allUsers) {
            response.status = 200;
            response.body = {
                data: allUsers
            }
        } else {
            response.status = 404;
            response.body = {};
        }
    }
    catch (error) {
        console.log("get all error", error);
        context.throw(error);
    }


}

//Get all users by Id

const getUsersById = async (context: { response: any, throw: any, params: any }) => {
    const { response, params } = context;
    const { id } = params;
    console.log(params);
    try {
        const user = await users.findOne({ _id: { "$oid": id } });
        if (user) {
            response.status = 200;
            response.body = {
                data: user
            }
        } else {
            response.status = 404;
            response.body = {};
        }
    }
    catch (error) {
        console.log("get user by id error", error);
        context.throw(error);
    }


}

//Add users

const addUsers = async (context: {request: any, response: any, throw: any}) => {

   const {request, response} = context;
   const body = await request.body();
   const {firstName, lastName, role} = body.value;
   try{
    const insertId = await users.insertOne({
       firstName,
       lastName,
       role
      });
      response.status = 200;
      response.body = {
          data: {insertId}
      }  

   }
   catch(error){
    console.log("add users", error);
    context.throw(error);

   }

}


const updateUsers = async (context: {request: any, response: any, throw: any, params: any}) => {

    const {request, response, params} = context;
    const {id} = params;
    const body = await request.body();
    const {firstName, lastName, role} = body.value;
    try{
        const { matchedCount, modifiedCount, upsertedId } = await users.updateOne(
            { _id: { "$oid": id } } ,
            { $set: { firstName, lastName, role } },
          );
       response.status = 200;
       response.body = {
           data: {upsertedId,matchedCount,modifiedCount}
       }  
 
    }
    catch(error){
     console.log("update users", error);
     context.throw(error);
 
    }
 
 }

 //delete user by Id
 const deleteUsersById = async (context: { response: any, throw: any, params: any }) => {
    const { response, params } = context;
    const { id } = params;
    console.log(params);
    try {
        const deleteCount = await users.deleteOne({ _id: { "$oid": id } });
            response.status = 200;
            response.body = {
                data: deleteCount
            }
    }
    catch (error) {
        console.log("get user by id error", error);
        context.throw(error);
    }


}

export { getAllUsers, getUsersById, addUsers, updateUsers, deleteUsersById }