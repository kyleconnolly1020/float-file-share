import React from 'react'
import './SocialMediaBar.css'

class SocialMediaBar extends React.Component {
    state = {
        icons : [this.props]
    }
    facebookIcon (props) {
        if (this.props.facebook) {
            return <i className='fab fa-facebook-square'></i>
        }
    }
    twitterIcon (props) {
        if (this.props.twitter) {
            return <i className='fab fa-twitter'></i>
        }
    }

    snapchatIcon (props) {
        if (this.props.snapchat) {
            return <i className='fab fa-snapchat-ghost'></i>
        }
    }

    linkedinIcon (props) {
        if (this.props.linkedin) {
            return <i className='fab fa-linkedin'></i>
        }
    }

    instagramIcon (props) {
        if (this.props.instagram) {
            return <i className='fab fa-instagram'></i>
        }
    }

    pdfIcon (props) {
        if (this.props.pdf) {
            return <i className='far fa-file-pdf'></i>
        }
    }

    audiofileIcon (props) {
        if (this.props.audiofile) {
            return <i className='fas fa-file-audio'></i>
        }
    }

    javascriptIcon (props) {
        if (this.props.javascript) {
            return <i className='fab fa-js-square'></i>
        }
    }

    render (props) {
        return (
        <div>
            <span className='icon1'>{this.facebookIcon(props)}</span>
            <span className='icon2'>{this.twitterIcon(props)}</span>
            <span className='icon3'>{this.snapchatIcon(props)}</span>
            <span className='icon4'>{this.linkedinIcon(props)}</span>
            <span className='icon5'>{this.instagramIcon(props)}</span>
            <span className='icon6'>{this.pdfIcon(props)}</span>
            <span className='icon7'>{this.audiofileIcon(props)}</span>
            <span className='icon8'>{this.javascriptIcon(props)}</span>
        </div>
        )
    }
}

export default SocialMediaBar
