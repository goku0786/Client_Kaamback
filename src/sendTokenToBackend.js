async function sendTokenToBackend(token, user) {
    try {
      const backendUrl = 'https://your-backend-endpoint.com/api/receive-token'; // Replace with your actual endpoint
      const response = await fetch(backendUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // Optional: Use this if your backend requires authentication
        },
        body: JSON.stringify({ token, user }),
      });
  
      const result = await response.json();
  
      if (response.ok) {
        console.log('Token and user data sent successfully:', result);
        // Handle successful response
      } else {
        console.error('Error sending token and user data:', result);
        // Handle error response
      }
    } catch (error) {
      console.error('Error while sending token and user data:', error);
      // Handle network or other errors
    }
  }
  
  export default sendTokenToBackend;
  