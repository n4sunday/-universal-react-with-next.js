import Layout from '../components/Layout'


const Post = ({ url }) => (
    <Layout title={url.query.title}>
        <p>Test</p>
    </Layout>
)


export default Post
