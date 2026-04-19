import React from 'react'
import ClassicTemplate from './templates/ClassicTemplate.jsx'
import ModernTemplate from './templates/ModernTemplate.jsx'
import MinimalTemplate from './templates/MinimalTemplate.jsx'
import MinimalImageTemplate from './templates/MinimalImageTemplate.jsx'

const ResumePreview = ({ data, template, accentColor, classes = '' }) => {
    const renderTemplate = () => {
        switch (template) {
            case 'modern':
                return <ModernTemplate data={data} accentColor={accentColor} />
                break
            case 'minimal':
                return <MinimalTemplate data={data} accentColor={accentColor} />
                break
            case 'minimal-image':
                return <MinimalImageTemplate data={data} accentColor={accentColor} />
                break
            default:
                return <ClassicTemplate data={data} accentColor={accentColor} />
                break
        }
    }
    return (
        <div className='w-fulll bg-gray-100'>


            <div id='resume-preview' className={'border border-gray-200 print:shadow-none print:border-none' + classes}>
                {renderTemplate()}
            </div>

            <style jsx>
                {`
                @page{
                size: letter;
                margin:0;}
                @media print{
                html, body{
                    width:8.5in;
                    height:11in;
                    overflow:hidden;
                }
                body * {
                    visibility:hidden;
                }
                #resume-preview, #resume-preview *{
                    visibility:visible;
                }
                #resume-preview{
                    position:absolute;
                    left:0;
                    top:0;
                    width:100%;
                    height:auto;
                    padding:0;
                    margin:0;
                    border:none !important;
                    box-shadow:none !important;
                    
                }
                    
                }
                `}
            </style>
        </div>
    )
}

export default ResumePreview