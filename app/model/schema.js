import { appSchema, tableSchema } from '@nozbe/watermelondb';

export default appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: 'posts',
      columns: [
        { name: 'title', type: 'string' },
        { name: 'subtitle', type: 'string', isOptional: true },
        { name: 'body', type: 'string' },
        { name: 'is_pinned', type: 'boolean' },
      ]
    }),
    tableSchema({
      name: 'comments',
      columns: [
        { name: 'body', type: 'string' },
        { name: 'post_id', type: 'string', isIndexed: true },
      ]
    }),

    // TODO: These would be the possible tables for the scheme: insumo, proveedor, compra, inventario*, categoria, ordencompra*, listaMercado*, detalleCompra*

    /*
    tableSchema({
      name:'insumo',
      colums: [
        { name: 'description', type: 'string' },
        { name: 'cantidad', type: 'number' },
        { name: 'is_precio', type: 'boolean'},
      ]
    }),
    tableSchema({
      name:'proveedor',
      colums: [
        { name: 'nombre', type: 'string' },
        { name: 'contacto', type: 'string' },
        { name: 'direccion', type: 'string' },
      ]
    }),
    tableSchema({
      name:'listaMercado',
      colums: [
        { name: 'cantidad_necesaria', type: 'string' },
        { name: 'insumo_id', type: 'string', isIndexed: true },
      ]
    }),
    */

  ]
})