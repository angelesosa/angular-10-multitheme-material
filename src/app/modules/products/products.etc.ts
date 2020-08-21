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
    tableId: 'PRODUCTS',
    columns: [
      { header: 'ID', align: 'left', key: 'productId', width: '60', show: true },
      { header: 'Name', align: 'left', key: 'name', width: '140', show: false },
      { header: 'Description', align: 'left', key: 'description', width: '120', show: false },
      { header: 'Type', align: 'left', key: 'type', width: '110', show: false },
      { header: 'Price', align: 'right', key: 'price', width: '160', show: false },
      { header: 'Active', align: 'left', key: 'active', width: '100', show: false },
    ],
    actionColumn: true,
    indexColumn: true,
    pageSizeOptions: [10, 20, 50, 100],
    pageSizeDefault: 10,
    filtersAllowed: [ // informacion brindada por el endpoint
      { key: 'productTypeId', label: 'Product Type ID' },
      { key: 'productTypeIdsIn', label: 'Product Type IDs' },
      { key: 'active', label: 'Active' }
    ],
    showFilters: true,
    showBtnDownload: true,
    showBtnAdd: true,
  },
  active: {
    0: {
      value: '0',
      label: 'Inactivo',
      key: 'active',
    },
    1: {
      value: '1',
      label: 'Activo',
      key: 'active',
    },
  },
};
