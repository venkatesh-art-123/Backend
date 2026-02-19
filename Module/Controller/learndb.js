const mongodb = require("mongodb");
const learnTable = require("../Model/schemalearn")

const createLearn = async (req, res) => {
    try {
        // ----- create Data 
        // let insertData = await learnTable.insertOne(
        //     {
        //         userName: "venkatesh",
        //         age: "35"
        //     }
        // )
        // console.log("insertData", insertData)
        // if (insertData) {
        //     let insertDataMany = await learnTable.insertMany([
        //         {
        //             userName: "siva",
        //             age: "30"
        //         },
        //         {
        //             userName: "arun",
        //             age: "30"
        //         }
        //     ]);
        //     console.log("insertDataMany", insertDataMany)
        //     if (insertDataMany) {
        //         let createData = new learnTable({
        //             userName: "Karthick",
        //             age: "25"
        //         })
        //         let saveData = await createData.save()
        //         console.log('saveDeta', saveData)
        //         return res.json({ status : 200, message : "saveData"})
        //     }
        // }

        // ----------- findData 
        // let findData = await learnTable.findOne({});
        // let findAllData = await learnTable.find({}, { name: 1, age: 0 });
        // console.log("findData, findAllData", findAllData, findData)

        // ----------- updateData 
        let updateOneData = await learnTable.updateOne({ userName: "Karthick" }, { $set: { age: "25" } });
        let updateMany = await learnTable.updateMany({}, { $set: { age: "2" } });
        let findONeUpdate = await learnTable.findOneAndUpdate({ userName: "venkatesh" }, { $set: { age: "24" } })
        console.log("updateOneData, updateMany", findONeUpdate)
        let id = "69857c048b60d158ea652ee0"
        let findById = await learnTable.findById(id);
        let findByIdUpdate = await learnTable.findByIdAndUpdate(id, { $set: { age: '21' } }, { new: true })
        console.log("findById data", findById, findByIdUpdate)
    } catch (e) {
        console.log("createLearn__Err", e)
    }
}

// const 

const connectDB = async () => {
    try {
        let uri = 'mongodb://127.0.0.1:27017/learn';
        let client = new mongodb.MongoClient(uri);
        client.connect();
        let database = await client.db()
        return database;
    } catch (e) {
        console.log("connectDB__Err", e)
    }
}

const monthlyBudget = async (req, res) => {
    try {
        let db = await connectDB();
        console.log("ddddddddddd")
        // const datas = await db.collection("monthlyBudget").find({ $expr: { $gt: ["$budget", "$spent"] } }).toArray();
        // console.log("insert multiple data", datas)
        // return res.json({ data: datas })
        // DB DATA
        //         db.getCollection("monthlyBudget").insertMany([
        //   { category: "food", budget: 400, spent: 450 },
        //   { category: "drinks", budget: 100, spent: 150 },
        //   { category: "clothes", budget: 100, spent: 50 },
        //   { category: "misc", budget: 500, spent: 300 },
        //   { category: "travel", budget: 200, spent: 650 }
        // ])
        // challenge 2 
        // Find categories where spent is greater than budget
        // const chall2 = await db.collection("monthlyBudget").aggregate([
        //     {
        //         $match: { $expr: { $and: [{ $gt: ["$spent", "$budget"] }] } }
        //     }
        // ])

        // // 👉 Find categories where spent greater than 300 AND budget greater than 150
        // const chall3 = await db.collection("monthlyBudget").aggregate([
        //     {
        //         $match: { $expr: { $and: [{ "spent": { $gt: 300 } }, { "$budget": { $gt: 150 } }] } }
        //     }
        // ])
        // // Find categories where spent > budget (or) spent > 500
        // const chall4 = await db.collection("monthlyBudget").aggregate([
        //     {
        //         $match: { $expr: { $or: [{ "$gt": ["$spent", "$budget"] }, { "$spent": { $gt: 500 } }] } }
        //     }
        // ])

        // // Find categories where spent > budget AND budget > 100
        // // Return only category, spent, budget
        // const chall5 = await db.collection("monthlyBudget").aggregate([
        //     {
        //         $match: { $expr: { $and: [{ $gt: ["$spent", "$budget"] }, { "$budget": { $gt: 100 } }] } }
        //     },
        //     { $project: { _id: 0, spent: 1, budget: 1 } }
        // ])
        // -------------------------------------------------------------------------------
        // const challenge2 = await db.collection("monthlyBudget").aggregate([{
        //     $match: {
        //         $and: [{ "budget": { $gt: 150 } }, { "spent": { $gt: 300 } }]
        //     }
        // }]).toArray()
        // // challenge 3
        // const challenge3 = await db.collection("monthlyBudget").aggregate([{
        //     $match: { $or: [{ "$expr": { $gt: ["$spent", "$budget"] } }, { "spent": { $gt: 500 } }] }
        // }]).toArray()
        // // challenge 4
        // const challenge4 = await db.collection("monthlyBudget").aggregate([
        //     {
        //         $match: { $and: [{ "$expr": { "$gt": "$budget", } }, { "budget": { $gt: 100 } }] }
        //     },
        //     {
        //         $project: {
        //             category: 1, spent: 1, budget: 1, _id: 0

        //         }
        //     }
        // ]).toArray()
        // console.log("monthlyBudget_data", challenge2, challenge3, challenge4)

        // ------------------------------------------------------------------------------------

        // const customers = [
        //     { name: "venkatesh", age: 24, loyalty: false },
        //     { name: "priya", age: 24, loyalty: true },
        //     { name: "raja", age: 24, loyalty: false },
        //     { name: "arun", age: 24, loyalty: true },
        //     { name: "mythile", age: 24, loyalty: true },
        // ]


        // let dbcreatecustomer = await db.collection("customers").insertMany(customers);
        // const customerIds = dbcreatecustomer.insertedIds;
        // const sales = [
        //     {
        //         item: "apple", price: 10, quantity: 5, category: "fruits",
        //         store: "A", customer_id: customerIds[0]
        //     },
        //     {
        //         item: "banana", price: 5, quantity: 10, category: "fruits",
        //         store: "B", customer_id: customerIds[1]
        //     },
        //     {
        //         item: "carrot", price: 3, quantity: 20, category: "vegetable",
        //         store: "A", customer_id: customerIds[2]
        //     },
        //     {
        //         item: "apple", price: 10, quantity: 8, category: "fruits",
        //         store: "B", customer_id: customerIds[3]
        //     },
        //     {
        //         item: "broccoli", price: 7, quantity: 6, category: "vegetable",
        //         store: "A", customer_id: customerIds[4]
        //     },
        // ]

        // let dbsales = await db.collection("sales").insertMany(sales);
        // console.log("dbsalerssss", dbsales)

        // How do I list all sales from store A ?
        // How do i sort all sales by date in descending order ?
        // let findData = await db.collection("sales").find({ 'store': 'A' })
        // How do i add field called revenue(price * document) to each document
        // How can i find the average quantity sold per store ?
        // How do i filter sales that happened on or after june2, 2024 ?
        // How do i show sales with customer's name included ?
        // How can i list sales where the customer has loyalty true
        // How do i get total quantity sold grouped by whether  the customer 
        // is loyal or not 
        let findData = await db.collection("sales").aggregate([
            // { $match: { "store": "A" } },
            // { $sort: { "date": -1 } },
            // {
            //     $group: {
            //         _id: null,
            //         'totalVolumeSum': { $sum: { $multiply: ["$price", "$quantity"] } }
            //     }
            // }
            // {
            //     $addFields: { "revenue": { $multiply: ["$price", "$quantity"] } }
            // }
            // { $addFields: { "average": { $avg: "$quantity" } } },
            // { $group: { _id: "$store", average: { $avg: "$quantity" } } }
            // { $match: { date: { $gte: ISODate("2024-01-01T00:00:00Z") }, qunatity: { $gt: 4 } } },
            // {
            //     $lookup: { from: "customers", localField: "customer_id", foreignField: "_id", as: "customerData" },
            // },
            // { $unwind: "$customerData" },
            // {
            //     $project: { _id: 0, category: 1, item: 1, 'customerName': "$customerData.name" }
            // },
            // {
            //     $lookup: { from: "customers", localField: "customer_id", foreignField: "_id", as: "customerData" }
            // },
            // { $unwind: "$customerData" },
            // {
            //     $match: { "$customerData.loyalty": true }
            // }

            // --------------------- Exercise again 
            // { $match: { "store": "A" } },
            // { $sort: { date: -1 } }
            // { $addFields: { "revenue": { $multiply: ["$price", "$quantity"] } } }
            // { $group: { "_id": "$store", "averageQuan": { "$avg": { $add: ["$price", "$quantity"] } } } },
            // { $match: { $expr: { $gte: ISODate("") } } },
            {
                $lookup: {

                }
            }


        ]).toArray();
        // let findCustomer = await db.collection("sales").aggregate([
        //     // {
        //     //     $lookup: {
        //     //         from: "customers",
        //     //         let: { "customerId": "$customer_id" },
        //     //         pipeline: [{
        //     //             $match: { $expr: { $and: [{ $eq: ["$_id", "$$customerId"] }, { $eq: ["$loyalty", true] }] } }
        //     //         }],
        //     //         "as": "customerDetails"
        //     //     }
        //     // }
        //     // {
        //     //     $group: {
        //     //         "_id": {
        //     //             "loyalty": "$loyalty",
        //     //         }
        //     //     }
        //     // },
        //     // {
        //     //     $project: {
        //     //         _id: 1
        //     //     }
        //     // }
        //     {

        //     }
        // ]).toArray()
        console.log("findDetails", findData)
        res.json(findData)
        // ---------------------------------------------------------------------------------------------------

        // return res.json(datas)
    } catch (e) {
        console.log("monthlyBudget__Err", e)
    }
}


const suppiesData = async (req, res) => {
    try {
        let db = await connectDB();
        // let insertManyData = await db.collection("suppies").insertMany([{ _id: 1, item: "binder", qty: ("100"), price: ("12") },
        // { _id: 2, item: "notebook", qty: ("200"), price: ("8") },
        // { _id: 3, item: "pencil", qty: ("50"), price: ("6") },
        // { _id: 4, item: "eraser", qty: ("150"), price: ("3") },
        // { _id: 5, item: "legal pad", qty: ("42"), price: ("10") }
        // ])
        const output = await db.collection("suppies").aggregate([{
            $addFields: {
                conditon: {
                    $cond: {
                        if: { $gt: ["$qty", 0] }, // 200 > 0
                        else: { $multiply: ["$price", 2] },
                        then: { $multiply: ["$price", 3] }
                    }
                }
            }
        },
        {
            $project: {
                "conditon": 1
            }
        }
        ]).toArray()
        console.log("insertManyData", output)
        return res.json(output)
    } catch (e) {
        console.log("suppiesData__Err", e)
    }
}
module.exports = { createLearn, monthlyBudget, suppiesData } 