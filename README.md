# product-search

This project is a dynamic and responsive product search page for an e-commerce platform, built using Next.js, React.js, and MUI. It features product listings, multi-level filtering, search functionality, pagination, and a responsive design.

## Features

1. **Product Listing**: Displays products dynamically fetched from the API.
2. **Multi-level Filtering**: Filters products by category and price range.
3. **Search Functionality**: Allows searching products by name or description.
4. **Pagination**: Implements pagination for product listings.
5. **Responsive Design**: Ensures the page is responsive for different device sizes.
6. **Loading Indicator**: Displays a loading spinner while fetching search results.
7. **Reset Filters**: Provides a button to reset all filters.

## Tech Stack

- **Framework**: Next.js
- **State Management**: Context API (Used Context as it is a small size app)
- **UI Library**: MUI (Material-UI)
- **API Calls**: Axios

## Setup Instructions

1. **Clone the Repository**:
    ```sh
    git clone https://github.com/raining101290/product-search.git
    cd product-search
    ```

2. **Install Dependencies**:
    ```sh
    npm install
    ```
3. **Run the Development Server**:
    ```sh
    npm run dev
    ```
   Open [http://localhost:3000](http://localhost:3000) to view the application in the browser.

## Build Process

To create an optimized production build:

1. **Build the Application**:
    ```sh
    npm run build
    ```

2. **Start the Production Server**:
    ```sh
    npm start
    ```

## Assumptions

- **API**: We are using the Fake Store API (`https://fakestoreapi.com/products`) to fetch product data.
- **Filters**: The categories are predefined as ['electronics', 'jewelery', "men's clothing", "women's clothing"].
- **Price Range**: The price range for filtering is assumed to be between 0 and 1000.

## Project Structure

├─app

  ├─ axios
    ├─ api.js
    ├─ axiosInterceptor.js
    └─ commonAxiosFunctions.js

  ├─ components
    ─ atoms
    ├─ Filter.js
    ├─ NoData.js
    ├─ Pagination.js
    ├─ ProductCard.js
    └── SortingBar.js
    ─ Pages
    ├─ ProductList.js
  
  ├─ context
  │   └─ index.js
  ├─ config.js
  ├─ favicon.ico
  ├─ globals.css
  ├─ layout.js
  ├─ page.js
  └─ page.module.css

├─ public

├─ .eslintrc.json
├─ .gitignore
├─ jsconfig.json
├─ next.config.mjs
├─ package.json
└─ README.md