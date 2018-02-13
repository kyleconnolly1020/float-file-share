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
