import React from 'react'
import { Sparkles } from 'lucide-react'

const ProfessionalSummary = ({ data, onChnage, setResumeData }) => {
    return (
        <div className='space-y-4'>
            <div className='flex items-center justify-between'>
                <div>
                    <h3 className='flex items-center gap-2 text-lg font-smeibold text-gray-900'>Professional Summary</h3>
                    <p className='text-sm text-gray-500'>Add a professional summary to highlight your skills and experience</p>
                </div>
                <button className='flex items-center gap-2 text-sm text-purple-600 bg-gradient-to-be from-purple-50 to-purple-100 ring-purple-300 hover:ring transition-all px-3 py-2 rounded-lg'>
                    <Sparkles className='size-4' />
                    AI Enhance
                </button>

            </div>
            <div className='mt-6'>
                <textarea name="" id="" className='w-full p-3 px-4 mt-2 border text-sm border-gray-300 rounded-lg focus:border-blue-500 outline-none transition-colors resize-none' placeholder='write a compelling  '>

                </textarea>

            </div>
        </div>
    )
}

export default ProfessionalSummary