const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/kggame', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
