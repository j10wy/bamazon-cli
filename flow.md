### CUSTOMER

```
+--------------------------+
|     PRODUCTS TABLE:      |
| (id, name, price, stock) |
+------------+-------------+
             |
   +---------v----------+
   |       NODE:        |
   | bamazonCustomer.js |
   +---------+----------+
             |
    +--------v---------+
    | Query & Display: |
    |   ALL PRODUCTS   |
    | (id, name, price)|
    +--------+---------+
             |
  +----------v-----------+
  |    Inquirer LIST:    |
  | Which PRODUCT to buy |
  +----------+-----------+
             |
    +--------v--------+
    | Inquirer INPUT: |
    |  # to purchase  |
    +-----------------+
```

### MANAGER

```
        INQUIRER:
         * View all PRODUCTS
         * View Low Inventory
         * Add to Inventory
         * Add New Product

ALL         LOW      UPDATE   ADD
---         ---      ------   ---

SELECT all PRODUCTS
List (id, name, price, #)

SELECT PRODUCTS <= 5
List (id, name, price, #)

SELECT PRODUCTS <= 5
List (id, name, price, #)

UPDATE PRODUCTS <= 5
List (id, name, price, #)
```