import { checkEmail } from './apiConfig';

export const checkEmails= async(emailArray)=>{
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({ email: emailArray });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    return fetch(checkEmail, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        if (result.statusCode === 200) {
          return (result.result);
        } else {
          return (result.message);
        }
      })
      .catch((error) => {
        // console.log("error", error);
        return (error);
        // setError(error);
      });
}