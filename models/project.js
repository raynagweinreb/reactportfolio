const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    title:{type: String },
    project_link:{type:String },
    gitlab_link:{type:String},
    photo:{type:String}
})
const Project = mongoose.model("Project",projectSchema)
module.exports = Project