import React from 'react'
import './SocialMediaBar.css'

class SocialMediaBar extends React.Component {
    state = {
        icons : this.props,
        rendering : []
    }

    componentWillMount() {
        this.renderIcons()
    }

    iconDetection = (icon) => {
        switch (icon) {
            case "facebook":
            return <i className='fab fa-facebook-square'></i>;
            case "twitter":
            return <i className='fab fa-twitter'></i>;
            case "snapchat":
            return <i className='fab fa-snapchat-ghost'></i>;
            case "linkedin":
            return <i className='fab fa-linkedin'></i>;
            case "instagram":
            return <i className='fab fa-instagram'></i>;
            case "pdf":
            return <i className='far fa-file-pdf'></i>;
            case "audiofile":
            return <i className='fas fa-file-audio'></i>;
            case "javascript":
            return <i className='fab fa-js-square'></i>;
            default:
        }
    }

    renderIcons = () => {
        let i = 1;
        for(var icon in this.state.icons){
            if (this.state.icons[icon] === "true") {
                this.state.rendering.push({icon: this.iconDetection(icon), iconNum:'icon' + i, key: i + 10});
                i++;
            }
        }
    }

    render () {
        return (
        <div>
            {this.state.rendering.map(render => {
                console.log(render);
                return <span className={render.iconNum} key={render.key}>{render.icon}</span>
            })}
        </div>
        )
    }
}

export default SocialMediaBar
