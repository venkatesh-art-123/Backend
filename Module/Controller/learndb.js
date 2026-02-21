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
        // budget : 100, spent : 200
        // budget : 200, spent : 300
        await db.collection("monthlyBudget").aggregate([
            {
                $and: [{ "budget": { $gt: 150 } }, { $expr: { $gt: ["spent", "budget"] }, }]
            },
            {
                $or: []
            }
        ])

        // challenge 2 
        const challenge2 = await db.collection("monthlyBudget").aggregate([{
            $match: {
                $and: [{ "budget": { $gt: 150 } }, { "spent": { $gt: 300 } }]
            }
        }]).toArray()
        // challenge 3
        const challenge3 = await db.collection("monthlyBudget").aggregate([{
            $match: { $or: [{ "$expr": { $gt: ["$spent", "$budget"] } }, { "spent": { $gt: 500 } }] }
        }]).toArray()
        // challenge 4
        const challenge4 = await db.collection("monthlyBudget").aggregate([
            {
                $match: { $and: [{ "$expr": { "$gt": ["$spent", "$budget"] } }, { "budget": { $gt: 100 } }] }
            },
            {
                $project: {
                    category: 1, spent: 1, budget: 1, _id: 0

                }
            }
        ]).toArray()
        console.log("monthlyBudget_data", challenge2, challenge3, challenge4)
        return res.json(datas);


        let datas = [{ category: "Food", month: "JAN", spent: 450, budget: 400 },
        { category: "Travel", month: "JAN", spent: 450, budget: 300 },
        { category: "Food", month: "FEB", spent: 400, budget: 400 },
        { category: "Travel", month: "MAR", spent: 100, budget: 200 },
        { category: "purchase", month: "MAR", spent: 200, budget: 250 },
        { category: "Travel", month: "APR", spent: 350, budget: 375 },
        { category: "purchase", month: "APR", spent: 270, budget: 400 },
        { category: "purchase", month: "APR", spent: 400, budget: 450 },
        ]

        const res = await db.collection("monthlyBudget").aggregate([{
            $group: {
                _id: "$category",
                totalSpent: { $sum: "$spent" },
                totalBudget: { $sum: "$budget" },
            }
        }, {
            $addFields: { overBudget: { $expr: { "$gt": ["$totalSpent", "$totalBudget"] } } },
            $addFields: { health: { $expr: { "$lte": ["$totalSpent", "$totalBudget"] } } }
        },

        {
            $facet: {
                $totalOverBudget: [{
                    $group: {
                        _id: "$category", totalSpent: { $sum: "$totalSpent" }, totalBudget: { $sum: "$totalBudget" },
                        $healthy: ["$totalSpent", "$totalBudget"]
                    }
                }],
                totalCategories: [{
                    $group: {
                        _id: "category",
                        totalSpent: { $sum: "$totalSpent" },
                        totalBudget: { $sum: "$totalBudget" }
                    }
                }]
            }
        }, {
            $project: {
                _id: 0,
                $totalSpent: 1,
                $totalOverBudget: 1,
                $totalCategories: 1
            }
        }])

        // ---------------------------------------------------
        const res1 = await db.collection("monthlyBudget").aggregate([
            {
                $group: {
                    _id: category,
                    totalSpent: { "$sum": "$spent" },
                    totalBudget: { "$sum": "$budget" },
                    differences: { "$subtract": ["$spent", "$budget"] }
                },

            },
            {
                $lookup: {
                    from: "categoryInfo",
                    localField: "category",
                    foreignField: "category",
                    as: "department"
                }
            },
            {
                $group: {
                    "_id": "$department",
                    totalSpent: { "$sum": "$totalSpent" },
                    totalBudget: { "$sum": "$totalBudget" },
                    $cond: [{ $gt: ["$totalSpent", "$totalBudget"] }, 1, 0]
                }
            },
            {
                $facet: {
                    "departments": [{
                        $group : {
                            "_id" : "$department",
                            "totalSpent" : "$totalSpent",
                            "totalBudget" : "$totalBudget",
                            "OverBudgetCategories" : { "$sum" : "$totalBudget"}
                        }
                    }],
                    "topOverSpendingCategory": [ {
                        $group : {
                            category : "$category",
                            differences : { $subtract : ["$totalSpent", "$totalBudget"]}
                        }
                    }],
                    "globalStatus": [
                        {
                            $group : {
                                _id : null,
                                grandTotalSpent : { "$sum" : "$totalSpent"},
                                grandTotalBudget : { "$sum" : "$totalBudget"},
                                totalDepartment : { "$sum" : "$departmens"}
                                
                            }
                        }
                    ]
                }
            }


        ])

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