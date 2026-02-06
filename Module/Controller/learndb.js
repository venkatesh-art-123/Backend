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
        // let updateOneData = await learnTable.updateOne({ userName: "Karthick" }, { $set: { age: "25" } });
        // let updateMany = await learnTable.updateMany({}, { $set: { age : "2"} });
        // let findONeUpdate = await learnTable.findOneAndUpdate({ userName: "venkatesh" }, { $set: {age : "24"} })
        // console.log("updateOneData, updateMany", findONeUpdate)
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

        // const datas = await db.collection("monthlyBudget").find({ $expr: { $gt: ["$budget", "$spent"] } }).toArray();
        // console.log("insert multiple data", datas)
        // return res.json({ data: datas })
        // challenge 2 
        const challenge2 = await db.collection("monthlyBudget").aggregate([{
            $match: {
                $and: [{ "budget": { $gt: 150 } }, { "spent": { $gt: 300} }]
            }
        }]).toArray()
        // challenge 3
        const challenge3 = await db.collection("monthlyBudget").aggregate([{
            $match: { $or: [{ "$expr": { $gt: ["$spent", "$budget"] } }, { "spent": { $gt: 500 } }] }
        }]).toArray()
        // challenge 4
        const challenge4 = await db.collection("monthlyBudget").aggregate([
            {
                $match: { $and: [{ "$expr": { "$gt": "$budget", } }, { "budget": { $gt: 100 } }] }
            },
            {
                $project: {
                    category: 1, spent: 1, budget: 1, _id: 0

                }
            }
        ]).toArray()
        console.log("monthlyBudget_data", challenge2, challenge3, challenge4)
        return res.json(datas)
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