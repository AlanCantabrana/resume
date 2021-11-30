import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Page from '../Components/Page/Page'

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//     // params contains the post `id`.
//     // If the route is like /posts/1, then params.id is 1
//     const response = await fetch(
//         `https://platzi-avo.vercel.app/api/avo/${params?.id}`
//     )
//     const product = await response.json()

//     // Pass post data to the page via props
//     return { props: { product } }
// }

const Resume: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Resume Alan</title>
                <meta name="description" content="Resume Alan Cantabrana" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Page />
        </div>
    )
}

export default Resume
