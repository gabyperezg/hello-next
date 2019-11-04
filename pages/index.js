// This is the Link API
import Link from 'next/link';
import Header from "../components/Header";
import Layout from "../components/Layout";

const PostLink = props => (
    <li>
        <Link href="/post/[id]" as={`/post/${props.id}`}>
            <a>{props.id}</a>
        </Link>
    </li>
);

const Index = () => (
    <div>
        <Layout>
            <h1>My Blog</h1>
            <ul>
                <PostLink id="hello-nextjs" />
                <PostLink id="learn-nextjs" />
                <PostLink id="deploy-nextjs" />
            </ul>
        </Layout>

    </div>
);

export default Index;
