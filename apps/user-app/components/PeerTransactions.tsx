import { Card } from "@repo/ui/src/card";

type Transaction = {
  time: Date;
  amount: number;
};

interface PeerTransactionsProps {
  stransactions: Transaction[];
  rtransactions: Transaction[];
}

export const PeerTransactions = ({
  stransactions,
  rtransactions
}: PeerTransactionsProps) => {
  if (!stransactions.length && !rtransactions.length) {
    return (
      <Card title="Transactions">
        <div>No Transactions</div>
      </Card>
    );
  }

  const allTransactions = [
    ...stransactions.map(t => ({ ...t, type: "sent" as const })),
    ...rtransactions.map(t => ({ ...t, type: "received" as const })),
  ].sort((a, b) => b.time.getTime() - a.time.getTime());

  return (
    <Card title="Transactions">
      {allTransactions.map((t) => (
        <div
          className="flex justify-between border-b border-slate-300 py-2"
        >
          <div>
            <div>{t.type === "sent" ? "Sent" : "Received"}</div>
            <div className="text-xs text-slate-600">
              {t.time.toDateString()}
            </div>
          </div>

          <div
            className={`flex flex-col justify-center ${
              t.type === "sent" ? "text-red-600" : "text-green-600"
            }`}
          >
            {t.type === "sent" ? "-" : "+"}RS {t.amount / 100}
          </div>
        </div>
      ))}
    </Card>
  );
};
