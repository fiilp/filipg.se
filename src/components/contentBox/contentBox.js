import React from 'react';
import ReactMarkdown  from 'react-markdown';

/**
 * Used as somewhat of a blog post. Uses markdown text and can have a picture sidebar
 * @param {object} props            contains attributes of component.
 * @param {string} props.markdown   text of the content, uses markdown.
 * @param {object} props.img        contains potential picture to be displayed in sidebar.
 * @param {string} props.img.alt    alt text of picture.
 * @param {string} props.img.src    src of picture.
 */
function ContentBox(props){
    return (
        <div data-testid="contentBox" className="ContentBox">
            {imageSidebar(props.img)}
            <div><ReactMarkdown source={props.markdown}/></div>
        </div>
    )
}; export default ContentBox;

function imageSidebar(img){
    return img ? 
        <div><img alt={img.alt} src={img.src}/></div> : undefined;
}