import './ByteBistro.css'
import byteBistroOne from '../../assets/bytebistro/ByteBistro-One.png'
import byteBistroTwo from '../..//assets/bytebistro/ByteBistro-Two.png'
import ReactMarkdown from 'react-markdown'

export default function Projects()
{
    return(
<div id='byte-bistro-div'>
    <div className='projects-header'>
    <h1> Solo Projects Created</h1>
    <p>No better way to improve than with hands on coding</p>
    </div>


    <div className='byte-bistro-project'>
        <h1 className='bytebistro-h1'>ByteBistro</h1>
        <a href="https://bytebistro.netlify.app/" target='_blank'>
        <img src={byteBistroOne} alt="ByteBistro Project Image One" className='byte-bistro-one' />
        </a>
        <a href="https://bytebistro.netlify.app/" target='_blank'>
        <img src={byteBistroTwo} alt="ByteBistro Project Image Two" className='byte-bistro-two' /> 
        </a>
        
        <p className='bytebistro-desc'>
            ByteBistro was a project that was created to 
            practice useState(), props, API calling, and 
            mapping in React. An input box takes in ingredients which is mapped
            onto a list element and sent to Gemini AI to generate the recipe.

        </p>
    </div>
</div>  


    )
}