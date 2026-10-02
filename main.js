function processPayment(userId, amount) {
  const TRANSACTION_FEE = 2.5; // Constant configuration
  let paymentStatus = "PENDING"; // Mutable state

  if (amount > 0) {
    let totalDeduction = amount + TRANSACTION_FEE; // Block-scoped variable
    paymentStatus = "COMPLETED";
    console.log(
      `User ${userId} charged ₹${totalDeduction}. Status: ${paymentStatus}`,
    );
  }

  // console.log(totalDeduction); // ❌ ReferenceError! Clean encapsulation, no leakage.
}

processPayment("USR_109", 1500);
