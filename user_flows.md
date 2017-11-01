http://asciiflow.com/

### CUSTOMER FLOW

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
                   |      Inquirer:       |
                   | Which PRODUCT to buy |
                   +----------+-----------+
                              |
                 +------------v--------------+
                 |        Inquirer:          |
                 | How many units of PRODUCT |
                 +------------+--------------+
                              |
                    +---------v-----------+
                    | function()          |
              +-----+ If units > stock || +-------+
              |     | stock === 0         |       |
              |     +---------------------+       |
              |                                   |
+-------------v---------------+  +----------------v------------+
|          IN STOCK           |  |         OUT OF STOCK        |
|          --------           |  |         ------------        |
| Fulfill order:              |  | DO NOT fulfill order:       |
| * Update remaining quantity |  | * 'Insufficient quantity!'  |
| * Show total $ to customer  |  | * Do not update quantity    |
+-----------------------------+  +-----------------------------+
```

### MANAGER FLOW

```
                INQUIRER:
         * View all PRODUCTS
         * View Low Inventory
         * Add to Inventory
         * Add New Product

ALL         LOW      UPDATE   ADD
---         ---      ------   ---

Query all products
List (id, name, price, #)

Query all products
List (id, name, price, #)

```