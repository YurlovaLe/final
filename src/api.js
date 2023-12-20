export async function handleLoginApi({ email, password }) {
  // const response = await fetch('http://localhost:8090/auth/login', {
  //   method: "POST",
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({
  //     email,
  //     password,
  //   }),
  // });

  // if(!response.ok) {
  //   if (response.status === 401) {
  //     const error = await response.json();
  //     console.log(error);
  //   }

  //   console.log(response.json());
  //   throw new Error("Не удалось войти");
  // }

  // const data = await response.json();
  // return data;

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
