import * as React from "react"
import {graphql} from 'gatsby'
import Layout from "../components/layout"
import Seo from "../components/seo"
import { GatsbyImage, getImage  } from "gatsby-plugin-image"




const Posts = ({data}) => {
    const {html} = data.markdownRemark;
    const {title, image} = data.markdownRemark.frontmatter;
    const img = getImage(image)

    return (
        <Layout>
            <Seo title="404: Not found" />
                <div>
                    <h1>{title}</h1>
                    <div>
                        <GatsbyImage image={img} alt={title}/>
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: html}} />
                </div>
        </Layout>
    )
}
export default Posts

export const query = graphql`
    query  PostQuery($url: String) {
    markdownRemark(frontmatter: {url: {eq: $url}}) {
        html
        frontmatter {
            category
            title
            url
            image {
                childImageSharp {
                gatsbyImageData(width: 600)
                }
            }   
        }
    }
}
`


