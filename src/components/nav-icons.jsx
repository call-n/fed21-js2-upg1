export function HamburgerMenuIcon(props) {
    return (
        <svg height="24" width="24" viewBox="0 0 24 24" {...props}>
        <g
            fill="currentColor"
            stroke="currentColor"
            strokeLinecap="square"
            strokeLinejoin="miter"
            strokeMiterlimit="10"
            strokeWidth="2"
        >
            <line fill="none" x1="1" x2="23" y1="12" y2="12" />
            <line fill="none" x1="1" x2="23" y1="5" y2="5" />
            <line fill="none" x1="1" x2="23" y1="19" y2="19" />
        </g>
        </svg>
    );
}

export function CloseIcon(props) {
    return (
        <svg height="24" width="24" viewBox="0 0 24 24" {...props}>
        <g
            fill="currentColor"
            stroke="currentColor"
            strokeLinecap="square"
            strokeLinejoin="miter"
            strokeMiterlimit="10"
            strokeWidth="2"
        >
            <line fill="none" stroke="currentColor" x1="19" x2="5" y1="5" y2="19" />
            <line fill="none" stroke="currentColor" x1="19" x2="5" y1="19" y2="5" />
        </g>
        </svg>
    );
}