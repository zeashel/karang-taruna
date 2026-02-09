## Prerequisites for local development

-   [Node.js](https://nodejs.org/)
-   [pnpm](https://pnpm.io/installation)
-   [MongoDB community edition](https://www.mongodb.com/docs/v8.0/administration/install-community/)

## Running for local development

-   Start [MongoDB service](https://www.mongodb.com/docs/v8.0/administration/install-community/)
-   Run `pnpm install` in both `frontend/` and `backend/`
-   Create `backend/.env`. Example content:
    ```env
    JWT_SECRET=examplekey
    MONGO_URI=mongodb://127.0.0.1:27017/karang-taruna
    CLIENT_URL=http://localhost:5173
    ```
-   Run `pnpm run dev` in both `frontend/` and `backend/`
