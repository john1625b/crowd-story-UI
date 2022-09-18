import { useEffect } from 'react';
import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";

const clientId = "1061986825821-6qfeaaunb686pgch8abvlrul05lk36ir.apps.googleusercontent.com";


const Authenticate = () => {

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId,
        scope: ''
      })
    };

    gapi.load("client:auth2", initClient);
  }, [])

  const onSuccess = (res: any) => {
    console.log("success:", res);
  }

  const onFailure = (res: any) => {
    console.log("failure:", res);
  }

  return (
    <div>
      <GoogleLogin 
        clientId={clientId}
        buttonText="Sign in with Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </div>
  )

}

export default Authenticate;