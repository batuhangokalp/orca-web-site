import { Get_All_Products } from "@/database/databaseQueries";
import { execQuery } from "@/lib/db";

export default async function handler(req, res) {

    let getAllProducts = Get_All_Products;
    if (req.method === 'GET') {
        try {
            const result = await execQuery(getAllProducts)
            res.status(200).json({ products: result.rows});
        } catch (error) {
            res.status(400).json({ message: error })
        }
    }
}
