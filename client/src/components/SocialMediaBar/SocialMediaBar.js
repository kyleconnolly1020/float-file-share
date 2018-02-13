import React from 'react'
import './SocialMediaBar.css'

class SocialMediaBar extends React.Component {
    state = {
        icons : this.props,
        rendering : []
    }
    iconDetection (icon) {
        switch (icon) {
            case "facebook":
            return <i className='fab fa-facebook-square'></i>;
            break;
            case "twitter":
            return <i className='fab fa-twitter'></i>;
            break;
            case "snapchat":
            return <i className='fab fa-snapchat-ghost'></i>;
            break;
            case "linkedin":
            return <i className='fab fa-linkedin'></i>;
            break;
            case "instagram":
            return <i className='fab fa-instagram'></i>;
            break;
            case "pdf":
            return <i className='far fa-file-pdf'></i>;
            break;
            case "audiofile":
            return <i className='fas fa-file-audio'></i>;
            break;
            case "javascript":
            return <i className='fab fa-js-square'></i>;
            break;
            default:
            break;
        }
    }

    renderIcons() {
        let i = 1;
        for(var icon in this.state.icons){
            if (this.state.icons[icon] === "true") {
                this.state.rendering.push({icon: this.iconDetection(icon), iconNum:'icon' + i});
                i++;
            }
        }
    }

    render (props) {
        console.log(this.state.icons)
        this.renderIcons();
        console.log(this.state.rendering)
        return (
        <div>
            {
            // this.state.rendering.map(render => {return ReactHtmlParser(render)})
            /* <span className='icon1'>{this.facebookIcon(props)}</span>
            <span className='icon2'>{this.twitterIcon(props)}</span>
            <span className='icon3'>{this.snapchatIcon(props)}</span>
            <span className='icon4'>{this.linkedinIcon(props)}</span>
            <span className='icon5'>{this.instagramIcon(props)}</span>
            <span className='icon6'>{this.pdfIcon(props)}</span>
            <span className='icon7'>{this.audiofileIcon(props)}</span>
            <span className='icon8'>{this.javascriptIcon(props)}</span> */}

            {this.state.rendering.map(render => {
                console.log(render);
                return <span className={render.iconNum}>{render.icon}</span>
            })}
        </div>
        )
    }
}

export default SocialMediaBar
