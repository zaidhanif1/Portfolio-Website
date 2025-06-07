import './ByteBistro.css'
import byteBistroOne from '../../assets/bytebistro/ByteBistro-One.png'
import byteBistroTwo from '../..//assets/bytebistro/ByteBistro-Two.png'
import ReactMarkdown from 'react-markdown'

export default function Projects()
{
    return(
<div id='byte-bistro-div'>
    <div className='projects-header'>
    <h1> Solo Projects</h1>
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
           ByteBistro is a React app that transforms any list of ingredients 
           into a fully formatted, AI-generated, recipe; complete with ingredient breakdown,
            prep & cook times, and step-by-step instructions. It leverages React hooks 
            (useState) and prop-driven components for a dynamic UI, with a Netlify Function
             routing your input to the Gemini API.
            I’m currently refining backend error handling for edge-case resilience.

        </p>
    </div>
</div>  


    )
}