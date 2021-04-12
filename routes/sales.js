const express = require('express');
const connectEnsureLogin = require('connect-ensure-login');
const {
  getAllRequests,
  postNewRequest,
  getNewRequest,
  getRequest,
  updateRequest,
  deleteRequest,
} = require('../controllers/sales');
const router = express.Router();

router.get('/sales', connectEnsureLogin.ensureLoggedIn(), (req, res) => {
  res.render('sales', { title: 'Sales' });
});

router.route('/callRequests').get(getAllRequests);
router.route('/newRequest').get(getNewRequest).post(postNewRequest);
router.route('/callRequestDetails/:id').get(getRequest).post(updateRequest);
router.route('/callRequestDel/:id').delete(deleteRequest).get(deleteRequest);

module.exports = router;
