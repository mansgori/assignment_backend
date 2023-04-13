const mongoose = require("mongoose");

module.exports = async() =>{
    try{
        const connectionParamas = {
            useNewUrlParser: true,
            useUnifiedTopology: true
        };
        await mongoose.connect(
            "mongodb+srv://test:test123@cluster0.lzqt2np.mongodb.net/test",
            connectionParamas
        );
            console.log("Connected to Database")
    }catch(error){
        console.log("could not connect to database", error)
    }
}