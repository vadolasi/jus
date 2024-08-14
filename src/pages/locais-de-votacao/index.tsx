import DefaultLayout from "../../layouts/default";

export default () => {
  return (
    <DefaultLayout>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Local
              </th>
              <th scope="col" className="px-6 py-3">
                Zona
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                1
              </th>
              <td className="px-6 py-4">Dirceu</td>
              <td className="px-6 py-4">Zona urbana</td>
            </tr>
          </tbody>
        </table>
      </div>
    </DefaultLayout>
  );
};
