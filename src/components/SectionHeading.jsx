export const SectionHeading = ({ title, subtitle }) => (
  <div className="mb-10">
    <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
      {title}
    </h2>
    {subtitle && <p className="mt-2 text-gray-600 dark:text-gray-400 max-w-lg">{subtitle}</p>}
  </div>
);
