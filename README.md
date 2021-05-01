# E-Commerce

An e-commerce project made in React JS, Javascript, Bootstrap and CSS for educational purpouses

Demo

## Project Status

Finished

## Installation

1. Clone the repository
2. Install all dependencies `npm-install`
3. Create a firestore project and replace `config\firebase.jsx` credentials.

```
# code block
const app = firebase.initializeApp({
	  apiKey: "API_KEY",
	  authDomain: "PROJECT_ID.firebaseapp.com",
	  databaseURL: "https://PROJECT_ID.firebaseio.com",
	  projectId: "PROJECT_ID",
	  storageBucket: "PROJECT_ID.appspot.com",
	  messagingSenderId: "SENDER_ID",
	  appId: "APP_ID",
	  measurementId: "G-MEASUREMENT_ID",
});
```

To run this project in a local server, type `npm start` 

## Database

The application uses firestore database. 

### Productos
Avalaible products of the e-commerce. For home page and the Item Detail page

| Name              | Type    | Comment                                               |
|-------------------|---------|-------------------------------------------------------|
| titulo            | string  | Name of the product in UPPERCASE                      |
| descripcion_corta | string  | Small description of the product                      |
| descripcion_larga | string  | Long description of the product. For Item Detail page |
| img               | string  | URL of the image file                                 |
| precio            | number  | Price of the product                                  |
| oferta            | boolean | Sale                                                  |
| stock             | number  | Quantity of avalaible stock                           |
| proveedor         | string  | Provider                                              |
| tags              | array   | tags of the product                                   |
| id_categoria      | string  | ID of the category                                    |
| categoria         | string  | Description of the category                           |


### Categorias
Categories of the products. For creating the categories page

| Name              | Type   | Comment                           |
|-------------------|--------|-----------------------------------|
| id_categoria      | string | ID of the category                |
| titulo            | string | Name of the category              |
| descripcion_corta | string | Small description of the category |

### Orders
Users orders

| Name     | Type      | Comment                                                    |
|----------|-----------|------------------------------------------------------------|
| Cart     | Array     | Product ID, price, quantity and description of the product |
| User     | Array     | Name, telephone and e-mail                                 |
| CreateOn | Timestamp | Date of the order                                          |
| total    | number    | Total of the order                                         |
|          |           |                                                            |

## Screenshots

Home

![Image](https://res.cloudinary.com/dfgfcd6ob/image/upload/v1619643090/home_zfebdt.png)

For sale
![Image](https://res.cloudinary.com/dfgfcd6ob/image/upload/v1619643089/search_knovm4.png)

Cart
![Image](https://res.cloudinary.com/dfgfcd6ob/image/upload/v1619643089/cart_qfw4ww.png)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
