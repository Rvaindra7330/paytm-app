<img width="1175" height="471" alt="Screenshot 2025-12-20 131237" src="https://github.com/user-attachments/assets/ffe14346-e22a-4649-ac2d-1aacc01bab05" />

# Paytm Clone

A modern Paytm-like wallet application built with **Next.js**, **Prisma**, and **NextAuth**, featuring P2P transfers, wallet balances, bank on-ramp, and a simple dashboard. This project is designed as a learning & demo project for fintech functionality in a monorepo setup.

---

##  Tech Stack

- **Frontend:** Next.js (App Router) + Tailwind CSS  
- **Authentication:** NextAuth.js with Credentials (Phone + Password)  
- **Validation:** Zod for form input validation  
- **Database:** PostgreSQL via Prisma ORM  
- **UI Components:** Reusable `@repo/ui` components (Card, Button, Select, TextInput)  
- **Backend Logic:** Prisma in `@repo/db` package  
- **Deployment:** Vercel (Recommended)

---

## Features

### User & Auth
- Signup (with password hashing via bcrypt)  
- Login via phone number & password  
- Secure session handling with JWT  

### Wallet
- View **available balance**, **locked balance**, and **total balance**  
- Add money via supported banks (on-ramp)  
- P2P transfers between users  
- Failed/successful transaction notifications using toast  

### Transactions
- Recent transaction history (sent & received)  
- Sorted latest first  
- Clear UI with amount and timestamp  

### Dashboard / Home
- Quick actions: Add Money, Send Money  
- Pending transactions / alerts  
- Last activity summary  

---

## ⚙️ Environment Variables

Create a `.env` file in the root with the following:

```env
DATABASE_URL=postgresql://USER:PASSWORD@HOST:PORT/DATABASE
NEXTAUTH_SECRET=your_jwt_secret_here
JWT_SECRET=your_jwt_secret_here

---
## 🚀 Quick Start

Follow these commands to set up and run the project locally:

```bash
# 1. Clone the repository
git clone https://github.com/Rvaindra7330/paytm-app.git
cd paytm-app

# 2. Install root dependencies
npm install

# 3. Setup database
cd packages/db
npx prisma migrate dev --name init
npx prisma generate

# 4. Run the user app (frontend + API)
cd ../../apps/user-app
npm run dev

# 5. Run the bank webhook server
cd ../bank-webhook
npm run start

-----
### Security Notes

Passwords are hashed with bcrypt before storing in DB

Input validation is handled via Zod

Failed or invalid transfers are rejected, with toast notifications for feedback

