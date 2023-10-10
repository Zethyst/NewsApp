import React, { Component } from 'react';

export class SignatureFooter extends Component {
    componentDidMount() {
        this.checkScrollPosition();
        window.addEventListener('scroll', this.checkScrollPosition);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.checkScrollPosition);
    }

    checkScrollPosition = () => {
        const footer = document.querySelector('.start-footer');
        if (footer) {
            const isAtBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;
            footer.style.position = isAtBottom ? 'relative' : 'fixed';
            // footer.style.bottom = isAtBottom ? '0' : '';
        }
    };

    render() {
        return (
            <footer className="bg-light start-footer start-style w-full h-full">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="flex justify-center items-center py-4 text-lg font-bold tracking-wide">
                                <span>Made With <i className="fa fa-heart pulse text-[#e90606]"></i> By <a href="https://www.linkedin.com/in/akshat-jaiswal-4664a2197/" target="_blank" rel="noopener noreferrer">Akshat</a></span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default SignatureFooter;
