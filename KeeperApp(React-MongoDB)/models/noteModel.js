const mongoose = require('mongoose');
const notesSchema = {
    title:  String,
    content: String
}
const Note=mongoose.model("Notes", notesSchema);

module.exports=Note;