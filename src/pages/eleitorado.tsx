import DefaultLayout from "../layouts/default";

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
                Titulo
              </th>
              <th scope="col" className="px-6 py-3">
                Nome
              </th>
              <th scope="col" className="px-6 py-3">
                Seção
              </th>
              <th scope="col" className="px-6 py-3">
                Celular
              </th>
              <th scope="col" className="px-6 py-3">
                Confiabilidade
              </th>
              <th scope="col" className="px-6 py-3">
                Data de cadastro
              </th>
              <th scope="col" className="px-6 py-3">
                Ações
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
              <td className="px-6 py-4">0001</td>
              <td className="px-6 py-4">Eliana Rocha</td>
              <td className="px-6 py-4">78 - U. E. DIRCEU ARCOVERDE</td>
              <td className="px-6 py-4">(89) 98101-0101</td>
              <td className="px-6 py-4">Garantido</td>
              <td className="px-6 py-4">04/10/2024</td>
              <td className="px-6 py-4">
                <button className="text-blue-600 hover:underline">Editar</button>
                <button className="text-red-600 hover:underline">Excluir</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </DefaultLayout>
  );
};
