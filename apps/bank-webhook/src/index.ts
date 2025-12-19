import express from "express";
import  prisma  from "@repo/db";
const app = express();

app.use(express.json())

app.post("/hdfcWebhook", async (req, res) => {
  const paymentInformation = {
    token: req.body.token,
    userId: Number(req.body.user_identifier),
    amount: Number(req.body.amount)
  };

  try {
    await prisma.$transaction(async (tx:any) => {
      const txn = await tx.onRampTransaction.findFirst({
        where: { token: paymentInformation.token }
      });

      if (txn?.status === "Success") return;

      const balance = await tx.balance.findUnique({
        where: { userId: paymentInformation.userId }
      });

      if (!balance || balance.locked < paymentInformation.amount) {
        throw new Error("Invalid locked balance");
      }

      await tx.balance.update({
        where: { userId: paymentInformation.userId },
        data: {
          amount: { increment: paymentInformation.amount },
          locked: { decrement: paymentInformation.amount }
        }
      });

      await tx.onRampTransaction.updateMany({
        where: { token: paymentInformation.token },
        data: { status: "Success" }
      });
    });

    res.json({ message: "Captured" });
  } catch (e) {
    console.error(e);
    res.status(411).json({ message: "Error while processing webhook" });
  }
});

app.listen(3003);