const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();
const pool = require('./config/supabase');
dotenv.config();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors({
  origin: 'http://'
}));

// app.get('/', (req, res) => {
//   res.send('Backend de Horno3 working! 🎉');
// })

//Aqui estan todas las rutas
app.use(require('./routes/routes.js'));

app.use('/activities', require('./routes/activities.js'))
// app.use('/exceptions', require('./routes/exceptions.js'))
// app.use('/schedules', require('./routes/schedules.js'))
// app.use('/news', require('./routes/news.js'))
// app.use('/experiences', require('./routes/experiences.js'))

app.listen(port, () => {
  console.log(`Running on localhost:${port}`);
})
