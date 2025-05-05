const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();
//const pool = require('./config/supabase');
dotenv.config();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors({
  origin: 'http://127.0.0.2:5500'
}));

const activityRoutes = require('./routes/activities');
app.use('/api/activities', activityRoutes);
const experiencesRoutes = require('./routes/experiences.js');
app.use('/api/experiences', experiencesRoutes);

// app.use('/exceptions', require('./routes/exceptions.js'))
// app.use('/schedules', require('./routes/schedules.js'))
// app.use('/news', require('./routes/news.js'))


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  console.log(`API available at http://localhost:${port}/api/activities`);
})
