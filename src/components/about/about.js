import React from 'react';
import ContentBox from '../contentBox/contentBox';

/**
 * Similar to a blog post. Contains a header and multiple ContentBox:es
 * @param {object} props        conatins the attributes of the component
 * @param {string} props.header h2 header of the About component 
 * @param {{img: {alt: string, img: string}, markdown: string}[]} props.contents 
 *                              markdown the text content of the ContentBox, img is
 *                              not required but if used will be displayed next to markdown 
 */
function About(props){
    return (
        <div data-testid="about" className="About">
            <h2>{props.header}</h2>
            {props.contents.map((e, i) => 
              e.img ? <ContentBox
                key={i}
                img={{alt: e.img.alt, src: e.img.src}}
                markdown={e.markdown}
              /> :
              <ContentBox key={i} markdown={e.markdown} />
            )}
        </div>
    )
}; export default About;