import Layout from '../components/Layout'

export default ({ statusCode }) => (
    <Layout title="Erorr!!">
        {statusCode
            ? `Could not load ypur user data: Status Code ${statusCode}`
            : `Couldn't get that page, sorry!`
        }
    </Layout>
)