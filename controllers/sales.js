const AllTrucks = require('../models/AllTrucks');
const Requests = require('../models/CallRequests');
const Subscriptions = require('../models/Subscriptions');

// @ Description Gets a list of call requests recieved.
// @ Route GET /callRequests
// @ Access Private
exports.getAllRequests = async (req, res, next) => {
  if (req.session.user) {
    try {
      // Find all the data in the  Requests collection
      const requests = await Requests.find();
      res.render('callRequests', {
        requests: requests,
        title: 'All Request List',
      });
    } catch (err) {
      res.status(400).send('Failed to retrive request list.');
    }
  } else {
    res.redirect('/');
  }
};

// @description  Get form for adding new requests.
// @route        GET /newRequest
// @access       Private
exports.getNewRequest = async (req, res, next) => {
  if (req.session.user) {
    const trucks = await AllTrucks.find({ typeOfTruck: 'Sewage Truck' });
    res.render('newRequest', { trucks: trucks, title: 'Add new request.' });
  } else {
    res.redirect('/');
  }
};

// @description  Add new Request.
// @route        POST /newRequest
// @access       Private
exports.postNewRequest = async (req, res, next) => {
  if (req.session.user) {
    try {
      const newRequest = await Requests.create(req.body);
      res.redirect('callRequests');
    } catch (err) {
      console.log(err);
      res.send('Sorry! Something went wrong.');
    }
  } else {
    res.redirect('/');
  }
};

// @description  Get request details.
// @route        GET /callRequestDetails/:Id
// @access       Private
exports.getRequest = async (req, res, next) => {
  if (req.session.user) {
    try {
      // Find all the data in the  Requests collection
      const request = await Requests.findById(req.params.id);

      // Catches requests with same id format that does not exit.
      if (!request) {
        return res.status(400).send('Request not found.');
      }
      res.render('callRequestDetails', {
        request: request,
        title: 'Request Details.',
      });
    } catch (err) {
      res.status(400).send('Failed to retrive request details');
    }
  } else {
    res.redirect('/');
  }
};

// @description  Update Single request Details.
// @route        POST /callRequestDetails/:Id
// @access       Private
exports.updateRequest = async (req, res, next) => {
  if (req.session.user) {
    try {
      const request = await Requests.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          useFindAndModify: false,
          new: true,
          runValidators: true,
        }
      );
      if (!request) {
        return res.status(400).send('Request not found.');
      }
      res.redirect('/callRequests');
    } catch (err) {
      res.status(400).send('Request Information NOT update!');
    }
  } else {
    res.redirect('/');
  }
};

// @description  Delete Single Request Details.
// @route        DELETE /callRequestDetails/:Id
// @access       Private
exports.deleteRequest = async (req, res, next) => {
  if (req.session.user) {
    try {
      const requestToDel = await Requests.findByIdAndRemove(req.params.id, {
        useFindAndModify: false,
        new: true,
        runValidators: true,
      });
      if (!requestToDel) {
        return res.status(400).send('Request not found.');
      }

      res.redirect('/callRequests');
    } catch (err) {
      res.status(400).send('Request Information NOT deleted!');
    }
  } else {
    res.redirect('/');
  }
};

// @ Description Gets a list of subscribers
// @ Route GET /subscriptions
// @ Access Private
exports.getAllSubscriptions = async (req, res, next) => {
  if (req.session.user) {
    try {
      // Find all the data in the  Requests collection
      const subscribers = await Subscriptions.find();
      res.render('subscriptions', {
        subscribers: subscribers,
        title: 'List of Subscribers.',
      });
    } catch (err) {
      res.status(400).send('Failed to retrive list of subscribers.');
    }
  } else {
    res.redirect('/');
  }
};

// @description  Get form for adding new subscriber.
// @route        GET /newSubscription
// @access       Private
exports.getNewSubscriber = async (req, res, next) => {
  if (req.session.user) {
    try {
      const garbageTrucks = await AllTrucks.find({
        typeOfTruck: 'Garbage Truck',
      });
      res.render('newSubscription', {
        trucks: garbageTrucks,
        title: 'New Subscription',
      });
    } catch (err) {
      res.status(400).send('Failed to retrive list of subscribers.');
    }
  } else {
    res.redirect('/');
  }
};

// @description  Add new Subscripber.
// @route        POST /newSubscription
// @access       Private
exports.postNewSubscription = async (req, res, next) => {
  if (req.session.user) {
    if (req.body.subPeriod === 'oneTime') {
      try {
        const newRequest = await Requests.create(req.body);
        res.redirect('callRequests');
      } catch (err) {
        res.send('Sorry! Something went wrong.');
      }
    } else {
      try {
        const newSubscriber = await Subscriptions.create(req.body);
        res.redirect('subscriptions');
      } catch (err) {
        console.log(err);
        res.send('Sorry! Something went wrong.');
      }
    }
  } else {
    res.redirect('/');
  }
};

// @description  Get subscription details.
// @route        GET /subscribedDetails/:Id
// @access       Private
exports.getSubscriptionDetails = async (req, res, next) => {
  if (req.session.user) {
    try {
      // Find all the data in the  Subscriptions collection
      const subscribers = await Subscriptions.findById(req.params.id);

      // Catches subscriptions with same id format that does not exit.
      if (!subscriber) {
        return res.status(400).send('Subscription not found.');
      }
      res.render('subscriptionDetails', {
        subscribers: subscribers,
        title: 'Subscription Details.',
      });
    } catch (err) {
      res.status(400).send('Failed to retrive subscription details');
    }
  } else {
    res.redirect('/');
  }
};

// @description  Update Single Subscription Details.
// @route        POST /subscriptionDetails/:Id
// @access       Private
exports.updateSubscription = async (req, res, next) => {
  if (req.session.user) {
    try {
      const subscriber = await Subscriptions.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          useFindAndModify: false,
          new: true,
          runValidators: true,
        }
      );
      if (!subscriber) {
        return res.status(400).send('Subscription not found.');
      }
      res.redirect('/subscriptions');
    } catch (err) {
      res.status(400).send('Subscription Information NOT update!');
    }
  } else {
    res.redirect('/');
  }
};

// @description  Delete Single Subscription Details.
// @route        DELETE /subscriptionDetails/:Id
// @access       Private
exports.deleteSubscription = async (req, res, next) => {
  if (req.session.user) {
    try {
      const subscriptionToBeDel = await Subscriptions.findByIdAndRemove(
        req.params.id,
        {
          useFindAndModify: false,
          new: true,
          runValidators: true,
        }
      );
      if (!subscriptionToBeDel) {
        return res.status(400).send('Subscription not found.');
      }

      res.redirect('/subscriptions');
    } catch (err) {
      res.status(400).send('Subscription Information NOT deleted!');
    }
  } else {
    res.redirect('/');
  }
};
