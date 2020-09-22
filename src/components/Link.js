import React from "react";


const Link = ({className, href, children}) => {

    const onClick = (event) => {

        // if we hold on cmd (command on Mac) or ctrl (control on Windows) Key
        // and click on the link it will open up the clicked link in a new tab
        //event.metaKey - for MacOS
        // event.ctrlKey - for Windows OS
        if (event.metaKey || event.ctrlKey) {
            return;
        }

        event.preventDefault();

        // change the URL, but don't do a full page refresh
        window.history.pushState(
            {},
            '',
            href
            )

        // each Route could detect the URL has changed
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    }

    return (
        <a
            className={className}
            href={href}
            onClick={onClick}
        >
            {children}
        </a>
    )
}

export default Link;