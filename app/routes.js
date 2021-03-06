/** @jsx React.DOM */

var Router = require('react-router');
var Routes = Router.Routes;
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

module.exports = (
  <Routes location="history">
    <Route name="root" path="/" handler={require('./handlers/Root')}>
      <DefaultRoute handler={require('./handlers/Home')} />
      <Route name="contact" addHandlerKey={true} path="contact/:id" handler={require('./handlers/Contact')} />
      <Route name="newContact" handler={require('./handlers/NewContact')} />
      <Route name="createContact" handler={require('./handlers/CreateContact')} />
    </Route>
  </Routes>
);

