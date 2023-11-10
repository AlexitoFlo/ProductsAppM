import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('prueba.db');

db.transaction(tx => {
  tx.executeSql(
    'create table if not exists ORDERS (id integer primary key not null, product text, quantity integer, price real);'
  );
});

const insertOrder = (product, quantity, price) => {
  db.transaction(tx => {
    tx.executeSql('select * from ORDERS', [], (_, { rows }) => console.log(JSON.stringify(rows)));
  });
};

const getOrders = () => {
  db.transaction(tx => {
    tx.executeSql('select * from ORDERS',[], (_, { rows }) => console.log(JSON.stringify(rows)));
  });
};

// si el usuario intenta registrar un producto con un nombre ya existente

/*
const insertProduct = (product, quantity, price) => {
  db.transaction(tx => {
    tx.executeSql('select * from products where name = ?', [product], (_, { rows }) => {
      if (rows.length > 0) {
        console.log('El nombre del producto ya está en uso.');
      } else {
        tx.executeSql('insert into products (name, quantity, price) values (?, ?, ?)', [product, quantity, price]);
      }
    });
  }, null);
};
*/

// Para permitir que el usuario edite o elimine una orden de compra

/* 

// Función para editar una orden de compra
const editOrder = (id, product, quantity, price) => {
  db.transaction(tx => {
    tx.executeSql('update orders set product = ?, quantity = ?, price = ? where id = ?', [product, quantity, price, id]);
  }, null);
};

// Función para eliminar una orden de compra
const deleteOrder = (id) => {
  db.transaction(tx => {
    tx.executeSql('delete from orders where id = ?', [id]);
  }, null);
};

*/


// Función para obtener todas las órdenes de compra y formatearlas

/*
const getAndFormatOrders = () => {
  db.transaction(tx => {
    tx.executeSql('select * from orders', [], (_, { rows }) =>
      rows._array.forEach(order =>
        console.log(`ID de Orden: ${order.id}\nProducto: ${order.product}\nCantidad: ${order.quantity}\nPrecio: ${order.price}\n`)
      )
    );
  });
};
*/