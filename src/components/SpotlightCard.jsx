export const SpotlightCard = ({ children, className = "" }) => {
  return (
    <div
      className={`relative overflow-hidden rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 transition-colors ${className}`}
    >
      <div className="relative h-full">{children}</div>
    </div>
  );
};
