// components/nav-item.js
import { Link } from 'react-router-dom';

export function NavItem({ to, children }) {
  return (
    <Link to={to} className="flex items-center gap-2 py-2 px-4 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
      {children}
    </Link>
  );
}
