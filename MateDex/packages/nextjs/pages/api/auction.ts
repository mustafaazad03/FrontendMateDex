import { NextApiRequest, NextApiResponse } from "next";

// import clientPromise from "~~/lib/mongoDb";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // const client = await clientPromise;
    // const db = client.db("Norswap");
    // const collectionName = "userLiquidity"
    // console.log(req.method)
    switch (req.method) {

        case "POST":


        case "GET":
        // const { address } = req.query
        // const userLiquidityValues = await db.collection(collectionName).find({ user: address as string }).toArray();
        // res.status(200).json({ userLiquidityValues });
        // break;
        // when user removes the portion of liquidity 
        case "PUT":

        // when user totally removes the liquidity 
        case "DELETE":

    }

}