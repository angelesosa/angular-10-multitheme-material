export const etc = {
  listActions: [
    {
      action: 'edit',
      icon: 'spellcheck',
      color: '#2ca3c4',
      label: 'Acreditar la transaccion',
      function: 'handleEdit',
    },
  ],
  dataTable: {
    tableId: 'CNT',
    columns: [
      { header: 'ID', align: 'left', key: 'pKey', width: '60', show: true },
      { header: 'Name', align: 'left', key: 'name', width: '140', show: false },
      { header: 'Capital', align: 'left', key: 'capital', width: '120', show: false },
      { header: 'Population', align: 'right', key: 'population', width: '110', show: false },
      { header: 'Sub-Region', align: 'left', key: 'subregion', width: '160', show: false },
      { header: 'Area', align: 'right', key: 'area', width: '100', show: false },
    ],
    actionColumn: true,
    indexColumn: true,
    pageSizeOptions: [10, 20, 50, 100],
    pageSizeDefault: 10,
    listStatus: [
      { key: '1', label: 'Activos' },
      { key: '0', label: 'Inactivos' },
      { key: '-1', label: 'Todos' },
    ],
    statusSelected: 1,
    showStatus: true,
    filtersAllowed: [ // informacion brindada por el endpoint
      { key: 'productTypeId', label: 'Product Type ID' },
      { key: 'productTypeIdsIn', label: 'Product Type IDs' },
      { key: 'active', label: 'Active' }
    ],
    filterSelected: 'active',
    showFilters: true,
    showBtnDownload: true,
    showBtnAdd: true,
  }
};
