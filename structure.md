### Project files structure

### Backend.
The backend code has two folders that will be modified by others devs, these are routes and tests.

#### Routes.
This folder contains all the api endpoints separated in folders that names are according with the endpoint route, inside the folders are the index that allows to make subendpoints of the route and the folders controllers and routes.
The controllers folder contain the functions to be executed in each endpoint http verb.
The routes folder contain the routes definitions for each endpoint http verb.

#### Tests
This folder contains the test for the api endpoints, the test are group by each endpoint.

### Frontend.
The src folder contains all code and inside are many folders to be modified by devs.

#### api.
This folder contains each api endpoint call.

#### config.
For config files like api url.

#### hooks.
For custom hooks of react.

#### images.
For images used in the app.

#### layouts.
These are the layouts that can be used on certain app pages, the base layout wrap are pages.

#### store.
Contains the global react states with the jotai package.

#### views.
Are the views or pages of the app.

#### Router.jsx.
This file is the main router of the app, it defines the routes and the views to be rendered.

#### Components (optional).
Components folder contains all the custom components to be used on various views, in this case using we are using MUI, then not need the components folder still.