const mongoose = require("mongoose");

const pdfSchema = new mongoose.Schema({
    filename: {
        type: String,
        required: true, // Ensure a filename is provided
    },
    contentType: {
        type: String,
        default: 'application/pdf', // Default value for contentType
        required: true, // Ensure a content type is provided
    },
    uploadDate: {
        type: Date,
        default: Date.now, // Automatically set the upload date to now
    },
    size: {
        type: Number,
        default: 0, // Default value for size
        required: true, // Ensure a file size is provided
    },
});

const pdfModel = mongoose.model("Pdf", pdfSchema);
module.exports = pdfModel;