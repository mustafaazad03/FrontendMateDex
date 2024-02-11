import clientPromise from "../../lib/mongodb";

const orbModel = async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db("Pendulum");
    const { 
        orbAddress,
        time,
        bidPrice,
        currentHolder,
        address_0
     } = req.body;

    const orb = await db.collection("Pendulum").insertOne({
      orbAddress,
      time,
      bidPrice,
      currentHolder,
      address_0
    });

    res.json(orb);
  } catch (e) {
    console.error(e);
    throw new Error(e).message;
  }
};
