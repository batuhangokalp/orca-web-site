import { Get_All_News } from "@/database/databaseQueries";
import { execQuery } from "@/lib/db";

export default async function handler(req, res) {

    let getAllNews = Get_All_News;
    if (req.method === 'GET') {
        try {
            const result = await execQuery(getAllNews)
            res.status(200).json({ products: result.rows });
        } catch (error) {
            res.status(400).json({ message: error })
        }
    }
}
