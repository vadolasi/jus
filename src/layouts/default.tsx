import { useLocation } from "react-router";

const DefaultLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const tabs = {
    "/": "Inicio",
    "/locais-de-votacao": "Locais de votação",
    "/eleitorado": "Eleitorado",
  }

  const currentTab = useLocation().pathname

  return (
    <div className="w-3/4 m-auto">
      <div className="flex justify-between mb-20">
        <div>
          <div className="flex gap-2">
            <div className="w-3 bg-blue-800"></div>
            <h1 className="text-[50px] font-semibold text-gray-300 tracking-tighter">
              Eleições
            </h1>
          </div>
          <div className="flex gap-2 mt-1">
            <div className="w-3 bg-gray-300"></div>
            <h2 className="text-7xl font-bold text-blue-800 tracking-wide">
              2024
            </h2>
          </div>
        </div>
        <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400 items-end">
          {Object.entries(tabs).map(([path, label]) => (
            <li className="me-2" key={path}>
              <a
                href={path}
                className={currentTab === path ? "inline-block px-4 py-3 text-white bg-blue-600 rounded-lg active w-48 text-lg" : "inline-block items-center px-4 py-3 rounded-lg hover:text-gray-900 bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white w-48 text-lg"}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {children}
    </div>
  );
};

export default DefaultLayout;
