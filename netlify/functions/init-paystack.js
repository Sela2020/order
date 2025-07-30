exports.handler = async (event) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' })
    };
  }

  try {
    const { email, amount, metadata } = JSON.parse(event.body);
    
    return {
      statusCode: 200,
      body: JSON.stringify({
        key: process.env.PAYSTACK_PUBLIC_KEY,
        email: email,
        amount: amount,
        metadata: metadata
      })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to process payment data' })
    };
  }
};