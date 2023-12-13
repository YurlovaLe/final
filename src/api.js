export async function getProducts() {

const response = await fetch('http://localhost:8090/ads', {
  method: "GET",
  headers: {
    'Content-Type': 'application/json',
  },
  });
  const data = await response.json();

  return data; 
}