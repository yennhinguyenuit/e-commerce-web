const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // Cho phép Front-end gọi API
app.get('/', (req, res) => res.send('API SERVER BÁN HÀNG - NHÓM BẢO ĐÃ SẴN SÀNG!'));

app.listen(5000, () => console.log('Server dang chay tai cong 5000'));