import { useCalls } from "@/hooks/use-calls";

export default function CallsPage() {
  const calls = useCalls();

  return (
    <div className="space-y-6">
      <div>
        <p className="text-brand font-mono text-[11px] font-bold tracking-wider uppercase">
          CRM Workspace
        </p>
        <h1 className="font-headline mt-1 text-3xl font-semibold tracking-tight">Calls</h1>
        <p className="text-muted-foreground mt-1 text-sm">Global call log.</p>
      </div>
      <p className="text-sm">Total calls: {calls.data?.count ?? 0}</p>
    </div>
  );
}
