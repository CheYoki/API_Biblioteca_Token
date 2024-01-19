const mongoose = require('mongoose');

// Usando directamente el MongoDB Atlas.
mongoose.connect("mongodb+srv://<username>:<password>@cluster0.tyb17qv.mongodb.net/biblioteca", {
	useUnifiedTopology: true,
	useNewUrlParser: true,
});

const LibroSchema = new mongoose.Schema({
	titulo: String,
	autor: String
}, { collection: 'libros' });

const Libro = mongoose.model('Libro', LibroSchema);


module.exports = Libro;