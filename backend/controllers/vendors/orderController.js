// // controllers/orderController.js
// const pool = require("../config/db");

// exports.placeOrder = async (req, res) => {
//   const { vendor_id, customer_name, items, total_amount } = req.body;

//   try {
//     const result = await pool.query(
//       `INSERT INTO orders (vendor_id, customer_name, items, total_amount)
//        VALUES ($1, $2, $3, $4) RETURNING *`,
//       [vendor_id, customer_name, items, total_amount]
//     );
//     res.status(201).json({ success: true, order: result.rows[0] });
//   } catch (err) {
//     res.status(500).json({ success: false, error: err.message });
//   }
// };


// exports.getVendorOrders = async (req, res) => {
//     const vendor_id = req.vendor.id;
  
//     try {
//       const result = await pool.query(
//         "SELECT * FROM orders WHERE vendor_id = $1 ORDER BY created_at DESC",
//         [vendor_id]
//       );
//       res.json({ success: true, orders: result.rows });
//     } catch (err) {
//       res.status(500).json({ success: false, error: err.message });
//     }
//   };
  
//   exports.updateOrderStatus = async (req, res) => {
//     const vendor_id = req.vendor.id;
//     const order_id = req.params.id;
//     const { status } = req.body;
  
//     try {
//       // Check if order belongs to vendor
//       const order = await pool.query(
//         "SELECT * FROM orders WHERE id = $1 AND vendor_id = $2",
//         [order_id, vendor_id]
//       );
  
//       if (order.rowCount === 0) {
//         return res.status(403).json({ msg: "Unauthorized to update this order" });
//       }
  
//       const result = await pool.query(
//         "UPDATE orders SET status = $1 WHERE id = $2 RETURNING *",
//         [status, order_id]
//       );
//       res.json({ success: true, updatedOrder: result.rows[0] });
//     } catch (err) {
//       res.status(500).json({ success: false, error: err.message });
//     }
//   };
  