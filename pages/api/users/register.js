const { Insert_User, Get_All_Emails } = require("../../../database/databaseQueries");
const bcrypt = require("bcryptjs");
const { execQuery } = require("../../../lib/db");

export default async function handler(req, res) {
  const { firstName, lastName, email, password } = req.body;

  const salt = await bcrypt.genSaltSync(10);
  const hash = await bcrypt.hashSync(password, salt);

  let getUsersEmail = Get_All_Emails;
  let insertUserQuery = Insert_User

  if (req.method === 'POST') {
    try {
      const emailQuery = await execQuery(getUsersEmail)
      if(emailQuery.rows.find((db)=>db.email===email)){
        res.status(400).json({message:"User already registered"})
      } else{
        insertUserQuery = insertUserQuery.replace("@firstName", firstName);
        insertUserQuery = insertUserQuery.replace("@lastName", lastName);
        insertUserQuery = insertUserQuery.replace("@email", email);
        insertUserQuery = insertUserQuery.replace("@password", hash);
        insertUserQuery = insertUserQuery.replace("@salt", salt);
        const result = await execQuery(insertUserQuery)
        res.status(200).json({ message: result });
      }
    } catch (error) {
      res.status(400).json({ message: error })
    }
  }
}