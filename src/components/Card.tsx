export default function Card({
  title,
  value,
  tone,
}: {
  title: string;
  value: number | string;
  tone?: "green" | "amber" | "gray";
}) {
  const toneClass =
    tone === "green"
      ? "text-green-600"
      : tone === "amber"
      ? "text-amber-600"
      : "text-slate-700";
  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <div className={`text-sm font-medium ${toneClass}`}>{title}</div>
      <div className="text-2xl font-bold">{value}</div>
    </div>
  );
}
