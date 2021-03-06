export enum Actions {
  edit = 'edit',
  active = 'active',
  deactive = 'deactive',
}

export const etc = {
  listActions: () => {
    return {
      edit: {
        action: Actions.edit,
        icon: 'edit',
        color: '#2ca3c4',
        label: 'Editar',
        function: 'handleEdit',
        show: true,
      },
      active: {
        action: Actions.active,
        icon: 'adjust',
        color: '#ed4955',
        label: 'Activar',
        function: 'handleActive',
        show: true,
      },
      deactive: {
        action: Actions.deactive,
        icon: 'adjust',
        color: '#5dcb94',
        label: 'Desactivar',
        function: 'handleDeactive',
        show: true,
      },
    };
  },
  dataTable: {
    tableId: 'PRODUCTS',
    columns: [
      { header: 'ID', align: 'left', key: 'productId', width: '60', show: true },
      { header: 'Name', align: 'left', key: 'name', width: '120', show: false },
      { header: 'Description', align: 'left', key: 'description', width: '160', show: false },
      { header: 'Type', align: 'left', key: 'type', width: '80', show: false },
      { header: 'Price', align: 'right', key: 'price', width: '80', show: false },
      { header: 'Active', align: 'left', key: 'active', width: '80', show: false },
    ],
    actionColumn: true,
    indexColumn: true,
    pageSizeOptions: [10, 20, 50, 100],
    pageSizeDefault: 10,
    // filtersAllowed: [ // informacion brindada por el endpoint
    //   { key: 'productTypeId', label: 'Product Type ID' },
    //   { key: 'productTypeIdsIn', label: 'Product Type IDs' },
    //   { key: 'active', label: 'Active' }
    // ],
    showFilters: true,
    showBtnReload: true,
    showBtnDownload: true,
    showBtnAdd: true,
    showChooseColumns: true,
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
