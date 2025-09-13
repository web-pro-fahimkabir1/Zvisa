require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const app = express();
const port = process.env.PORT || 3000;

// middleWare
app.use(cors());
app.use(express.json());

// ...............................MongoDB.......................................
// Mogodb connection string
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.siwod.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();

    // Connect to a database called "visaDB" on the MongoDB server
    const database = client.db("visaDB");
    // Access the collection called "visas" within the "visaDB" database
    const visaCollection = database.collection("visas");

    // Access the "visaDB" database from the client instance
    // Retrieve the "userVisas" collection from the database
    const userVisaCollection = client.db("visaDB").collection("userVisas");

    // ***********************************************************get.
    // Handle GET request to "/visas" route
    app.get("/visas", async (req, res) => {
      // Get all documents from the 'visaCollection'
      const cursor = visaCollection.find();
      // Convert the documents into an array
      const result = await cursor.toArray();
      // Send the array of visa documents back to the client
      res.send(result);
    });

    // ***********************************************************get.
    // Define a route that listens for GET requests on "/visas/details/:id"
    app.get("/visas/details/:id", async (req, res) => {
      // Extract the 'id' parameter from the URL
      const id = req.params.id;
      // Create a query object with the 'id' to search the visa collection
      const query = { _id: new ObjectId(id) };
      // Find the visa document that matches the query
      const result = await visaCollection.findOne(query);
      // Send the result back as the response
      res.send(result);
    });

    // **********************************************************get.
    //Handle GET request to "/visas/latest" route
    app.get("/visas/latest", async (req, res) => {
      /* 
    Retrieve the latest 6 visa documents from the 'visaCollection':
    - `.find()` fetches all documents in the collection.
    - `.sort({ _id: -1 })` sorts them by `_id` in descending order 
      (newest first because `_id` contains a timestamp).
    - `.limit(2)` ensures we only get the two most recent documents.
    */
      const cursor = visaCollection.find().sort({ _id: -1 }).limit(6);
      // Convert the cursor into an array of documents to make them easier to work with.
      const result = await cursor.toArray();
      // Send the array of the latest visa documents as the response to the client.
      res.send(result);
    });

    // ============================================================get.
    // Handle get request to "/userVisas/:email" route
    app.get("/userVisas/:email", async (req, res) => {
      const Useremail = req.params.email;
      const query = { email: Useremail };
      const cursor = userVisaCollection.find(query);
      // Convert the cursor into an array of documents to make them easier to work with.
      const result = await cursor.toArray();
      // Send the array of the latest visa documents as the response to the client.
      res.send(result);
    });

    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>get.
    // Handle get request to "/myAddedvisas/:email" route
    app.get("/myAddedvisas/:email", async (req, res) => {
      const Useremail = req.params.email;
      const query = { email: Useremail };
      const cursor = visaCollection.find(query);
      // Convert the cursor into an array of documents to make them easier to work with.
      const result = await cursor.toArray();
      // Send the array of the latest visa documents as the response to the client.
      res.send(result);
    });

    // **********************************************************post.
    // Handle POST request to "/visas" route
    app.post("/visas", async (req, res) => {
      // Get visa data from the request body
      const visa = req.body;
      // Log the visa data to the console
      // console.log(visa);
      // Insert the visa data into the database
      const result = await visaCollection.insertOne(visa);
      // Send the result back to the client
      res.send(result);
    });

    // ===========================================================>post.
    // Handle POST request to "/userVisas" route
    app.post("/userVisas", async (req, res) => {
      // Get visa data from the request body
      const userVisa = req.body;
      // Log the visa data to the console
      // console.log(userVisa);
      // Insert the visa data into the database
      const result = await userVisaCollection.insertOne(userVisa);
      // Send the result back to the client
      res.send(result);
    });

    // ==========================================================>Delete.
    // Define a Delete route to remvoe a userVisa by thier ID
    app.delete("/userVisas/:id", async (req, res) => {
      const id = req.params.id;
      // console.log("delete user id========>", id);
      const query = { _id: new ObjectId(id) };
      const result = await userVisaCollection.deleteOne(query);
      res.send(result);
    });

    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Update.
    app.put("/myAddedvisa/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const myAddedvisaInfo = req.body;
      const options = { upsert: true };

      const updateMyAddedVisaDoc = {
        $set: {
          countryName: myAddedvisaInfo.countryName,
          countryImage: myAddedvisaInfo.countryImage,
          visaType: myAddedvisaInfo.visaType,
          processingTime: myAddedvisaInfo.processingTime,
          description: myAddedvisaInfo.description,
          ageRestriction: myAddedvisaInfo.ageRestriction,
          fee: myAddedvisaInfo.fee,
          validity: myAddedvisaInfo.validity,
          applicationMethod: myAddedvisaInfo.applicationMethod,
          requiredDocuments: myAddedvisaInfo.requiredDocuments,
        },
      };
      const result = await visaCollection.updateOne(
        filter,
        updateMyAddedVisaDoc,
        options
      );
      res.send(result);
    });

    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Delete.
    // Define a Delete route to remvoe a 'myAddedvisas' by thier ID
    app.delete("/myAddedvisas/:id", async (req, res) => {
      const id = req.params.id;
      // console.log("delete user id========>", id);
      const query = { _id: new ObjectId(id) };
      const result = await visaCollection.deleteOne(query);
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

// Define a simple GET route at the root URL ('/')
app.get("/", (req, res) => {
  res.send("Zvisa server is running!");
});

// Start the server and listen for incoming connections on the specified port.
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// what you are donign
