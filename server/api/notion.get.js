import { Client } from '@notionhq/client'

const DATABASE_ID = 'b3f6526c94c945d2b40ec640f69d478e'

const notion = new Client({
    auth: import.meta.env.NOTION_TOKEN
})

export default defineEventHandler(async() => {
    
    const {results}  = await notion.databases.query({
        filter : {
            property: "project status",
            status: {
                equals: "Done",
            }
        },

        database_id: DATABASE_ID
    })

    const data =  results.map(page => {
        const { properties } = page
        const {name, image, opinion, site_link, github_repository } = properties

        return {
            name: name.title[0].plain_text,
            image: image.files[0].file.url,
            opinion: opinion.rich_text[0].plain_text,
            site_link: site_link.url,
            github_repository: github_repository.url
        }
    }
    
    )

    return data 
   



    })


   


        
    
    