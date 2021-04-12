const express = require('express');
const connectEnsureLogin = require('connect-ensure-login');
const {
  getAllRequests,
  postNewRequest,
  getNewRequest,
  getRequest,
  updateRequest,
  deleteRequest,
  getAllSubscriptions,
  getNewSubscriber,
  postNewSubscription,
  getSubscriptionDetails,
  updateSubscription,
  deleteSubscription,
} = require('../controllers/sales');
const router = express.Router();

router.get('/sales', connectEnsureLogin.ensureLoggedIn(), (req, res) => {
  res.render('sales', { title: 'Sales' });
});

router.route('/callRequests').get(getAllRequests);
router.route('/newRequest').get(getNewRequest).post(postNewRequest);
router.route('/callRequestDetails/:id').get(getRequest).post(updateRequest);
router.route('/callRequestDel/:id').delete(deleteRequest).get(deleteRequest);

router.route('/subscriptions').get(getAllSubscriptions);
router
  .route('/newSubscription')
  .get(getNewSubscriber)
  .post(postNewSubscription);
router
  .route('/subscriptionDetails/:id')
  .get(getSubscriptionDetails)
  .post(updateSubscription);
router
  .route('/subscriptionToBeDel/:id')
  .delete(deleteSubscription)
  .get(deleteSubscription);

module.exports = router;
