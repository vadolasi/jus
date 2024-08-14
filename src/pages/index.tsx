import DefaultLayout from "../layouts/default";

export default () => {
  return (
    <DefaultLayout>
      <div className="grid grid-cols-4 gap-8">
        <div className="flex flex-col items-center justify-center text-center max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Zona eleitoral</h5>
          <h4 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">28ª ZE</h4>
        </div>
        <div className="flex flex-col items-center justify-center text-center max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Eleitores</h5>
        <h4 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">798</h4>
        </div>
        <div className="flex flex-col items-center justify-center text-center max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Locais de votação</h5>
        <h4 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">98</h4>
        </div>
        <div className="flex flex-col items-center justify-center text-center max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Seções</h5>
        <h4 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">98</h4>
        </div>
      </div>
    </DefaultLayout>
  );
};
