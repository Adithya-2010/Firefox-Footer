import "./FirefoxFooter.css";

const groups = [
    {
        title: "Download",
        links: ["Firefox Desktop", "Firefox for Android", "Firefox for iOS"]
    },
    {
        title: "Resources",
        links: ["Firefox Support", "Release Notes", "Developer Edition"]
    }
];

function FirefoxFooter() {
    return (
        <footer className="footer-box">
            {groups.map(function (group) {
                return (
                    <div key={group.title}>
                        <h3>{group.title}</h3>
                        <ul>
                            {group.links.map(function (link) {
                                return (
                                    <li key={link}>
                                        <a href="#" className="footer-link">{link}</a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                );
            })}
        </footer>
    );
}

export default FirefoxFooter;