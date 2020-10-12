import React, {useState} from 'react';
import './activitypanel.css';
import { Link } from 'react-router-dom';



const button_Data = [
    {
        name: "activity logs",
        value: "activivty logs",
        link: "/user-dashboard",
        icon: "fa fa-bell"
    },
    {
        name: "pages",
        value: "pages",
        link: "/pagename",
        icon: "fa fa-flag"
    },
    {
        name: "groups",
        value: "groups",
        link: "#",
        icon: "fa fa-users"
    },
    {
        name: "agrimedia",
        value: "agrimedia",
        link: "/agrimedia",
        icon: "fa fa-sticky-note"
    },
    {
        name: "farm tv",
        value: "farm tv",
        link: "/farm-tv",
        icon: "fa fa-tv"
    },
    {
        name: "advertisement",
        value: "advertisement",
        link: "/advertisement",
        icon: "fa fa-bullhorn"
    },
    {
        name: "agriscore",
        value: "agriscore",
        link: "/agriscore",
        icon: "fa fa-calendar"
    }
];



function ActivityPanel(props) {
    const [ activeButton, setActiveButton ] = useState();
    const handleClick = e => {
        const name = e.target.name;
        setActiveButton(name);
    };
    return (
        <div className="activity-panel">
            {button_Data.map(item => {
                const activeClass = activeButton === item.name ? "active" : "";
                return (
                    <div key={item.value} className={`box ${activeClass}`}>
                        <Link
                            to={item.link}
                            className="link"
                            name={item.name}
                            value={item.value}
                            onClick={handleClick}
                        >
                            <i className={`icon ${item.icon}`}></i>
                            {item.name}
                        </Link>    
                    </div>
                );
            })}
        </div>
    )
}

export default ActivityPanel;