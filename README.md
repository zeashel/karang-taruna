## Prerequisites for local development

**Web App Prerequisites**

-   [Node.js](https://nodejs.org/)
-   [pnpm](https://pnpm.io/installation)
-   [MongoDB community edition](https://www.mongodb.com/docs/v8.0/administration/install-community/)

**Mobile App Prerequisites**

-   Expo Go or Xcode (Simulator.app)

## Running for local development

First, clone the repo

```
git clone https://github.com/zeashel/karang-taruna.git
```

**Web App**

-   Start [MongoDB service](https://www.mongodb.com/docs/v8.0/administration/install-community/)
-   Run `pnpm install` in both `frontend/` and `backend/`
-   Create `backend/.env`. Example content:
    ```env
    JWT_SECRET=examplekey
    MONGO_URI=mongodb://127.0.0.1:27017/karang-taruna
    CLIENT_URL=http://localhost:5173
    ```
-   Run `pnpm run dev` in both `frontend/` and `backend/`
-   Open http://localhost:5173 for testing

**Mobile App**

1. In the root of the repo, `cd mobile/DYDA`
2. Run `npm install`
3. Run `npx expo start`
4. For testing:
    - Scan the QR code with the "Expo Go" app on your mobile device (Expo Go must be installed on your Android/iOS device)
    - Or press `i` to test in the Xcode Simulator.app (Xcode must be installed on your Mac)
