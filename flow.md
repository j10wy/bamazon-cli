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