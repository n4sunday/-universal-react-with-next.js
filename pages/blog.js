import Layout from '../components/Layout'
import Link from 'next/link'

const PostLink = ({ title, slug }) => (
    <li>
        <Link as={`/${slug}`} href={`/post?title=${title}`}>
            <a >{title} </a>
        </Link>
    </li>
)


export default () => (
    <Layout title="My Blog">
        <ul>
            <PostLink slug="react-pos" title="React" />
            <PostLink slug="angular-pos" title="Angular" />
            <PostLink slug="vue-pos" title="Vue" />
        </ul>
    </Layout>
)

