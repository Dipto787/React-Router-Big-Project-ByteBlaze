import Markdown from 'react-markdown'
import { useLoaderData } from 'react-router-dom';
import undefindImage from '../assets/404.jpg'
import rehypeRaw from 'rehype-raw';
const Content = () => {
    let cardInfo=useLoaderData();
    let {cover_image,description,title,published_at,id,tags,body_html}=cardInfo;
    return (
        <div>
            <div className=" mx-auto border-2 p-2   group hover:no-underline focus:no-underline dark:bg-gray-50">
                <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={cover_image || undefindImage} />
                <div className="p-6 space-y-2">
                    {
                        tags.map(e=>
                            (
                                <a key={e}
                                rel='noopener noreferrer'
                                href='#'
                                className='px-3 py-1 rounded-sm hover:underline '>
                                     #{e}
                                </a>
                            )
                        )
                    }
                    <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
                     
                    <p><Markdown rehypePlugins={rehypeRaw}>{body_html}</Markdown></p>
                </div>
            </div>
        </div>
    );
};

export default Content;