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

export async function handleRegisterApi({ email, password, name, surname, city }) {
  const response = await fetch('http://localhost:8090/auth/register', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      password,
      email,
      name,
      surname,
      city,
    }),
  });

  if(!response.ok) {
    if (response.status === 400) {
      const error = await response.json();
      console.log(error)
    }
  }
  
  const data = await response.json();

  return data; 
};

export async function handleLoginApi({ email, password }) {
  const response = await fetch('http://localhost:8090/auth/login', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  if(!response.ok) {
    if (response.status === 401) {
      const error = await response.json();
      console.log(error);
    }

    console.log(response.json());
    throw new Error("Не удалось войти");
  }

  const data = await response.json();
  return data;

  // const tokenResponse = await fetch('http://localhost:8090/auth/login', {
  //   method: "PUT",
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({
  //     email,
  //     password,
  //   }),
  // });

  // const { access, refresh } = await tokenResponse.json();

  // return { ...data, access, refresh }; 
};

export async function getProduct(productId) {

  const response = await fetch(`http://localhost:8090/ads/${productId}`, {
    method: "GET",
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  
  return data; 
}


export async function getComments(productId) {

  const response = await fetch(`http://localhost:8090/ads/${productId}/comments`, {
    method: "GET",
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  
  return data; 
}

export async function getPersonalProducts() {

  const response = await fetch(`http://localhost:8090/ads/me`, {
    method: "GET",
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  
  return data; 
}