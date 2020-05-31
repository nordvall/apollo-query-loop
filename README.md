# Apollo Client Issue Reproduction

This repo reproduces an issue introduced in Apollo Client 3.0.0-beta.46 where two simultaneous queries starts an endless loop of server roundtrips. Just start the application with `npm start`, open the debug console in the browser and watch the logging from the resolvers.

The issue goes away if you do any of the following
* remove one of the components `Cities` or `Countries` from the app.
* remove the `permissions {}` part from either `cities` or `countries` query.
* downgrade @apollo/client to any version less than 3.0.0-beta.46