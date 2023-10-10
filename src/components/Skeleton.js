import React, { Component } from 'react'

export default class Skeleton extends Component {
    render() {
        return (
            
            <div className="border border-blue-300 shadow relative z-20 rounded-2xl mb-6 -translate-x-1 p-4 max-w-sm w-64 h-80">
                <div className="animate-pulse flex-col space-x-2">
                    <div className="rounded-lg bg-slate-600 h-32 w-52 my-0 mx-auto"></div>
                    <div className="flex-1 space-y-7 py-1 mr-1">
                        <div></div>
                        <div className='flex-col space-y-2'>
                        <div className="h-2 bg-slate-600 rounded"></div>
                        <div className="h-2 bg-slate-600 rounded"></div>
                        </div>
                        <div className="space-y-3">
                            <div className="grid grid-cols-3 gap-4">
                                <div className="h-2 bg-slate-600 rounded col-span-2"></div>
                                <div className="h-2 bg-slate-600 rounded col-span-1"></div>
                            </div>
                            <div className="h-6 w-48 mt-4 bg-slate-600 rounded-3xl"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
