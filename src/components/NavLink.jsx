export const NavLink = ({ href, children, mobile, onClick }) => (
  <a 
    href={href} 
    onClick={onClick}
    className={`
      text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400
      ${mobile ? 'block py-3 text-lg border-b border-gray-100 dark:border-slate-800' : 'text-gray-600 dark:text-gray-300'}
    `}
  >
    {children}
  </a>
);
