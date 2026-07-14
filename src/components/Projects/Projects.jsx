import './ByteBistro.css'
import byteBistroOne from '../../assets/bytebistro/byteBistroOne.png'
import byteBistroTwo from '../..//assets/bytebistro/byteBistroTwo.png'
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
        ByteBistro is a React-based web app that converts 
        any list of ingredients into a fully formatted, AI-generated recipe. 
        It includes a complete ingredient breakdown, prep and cook times, 
        and detailed step-by-step instructions. The front end was created
        with React, Express for the server, and PostgreSQL for the database.
         
           

        </p>
    </div>
</div>  


    )
}