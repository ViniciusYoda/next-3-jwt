import { tokenService } from "../src/service/auth/tokenService";

function AuthPageSSR(props) {
    return(
        <div>
            <h1>
                Auth Page Server side render
            </h1>
            <pre>
          {JSON.stringify(props, null, 2)}
        </pre>
        </div>
    )
}

export default AuthPageSSR;

export async function getServerSideProps(ctx) {
    const cookies = nookies.get(ctx)

    return {
        props: {
            token: tokenServic.get()
        },
    }
}
