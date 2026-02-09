function Footer() {
    return (
        <footer className="text-center pb-3 px-3 px-lg-5 mb-3">
            <hr className="py-1 mx-5" />
            <p className="mb-0">
                Tugas Zahra A. S.
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-dot-icon lucide-dot"
                >
                    <circle cx="12.1" cy="12.1" r="1" />
                </svg>
                <a
                    href="https://github.com/zeashel"
                    title="My GitHub"
                    alt="My GitHub"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1.25em"
                        height="1.25em"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-github-icon lucide-github"
                        style={{ marginInlineEnd: "0.3em" }}
                    >
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                        <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                </a>
                <a
                    href="https://github.com/zeashel/karang-taruna"
                    title="Source Code of this Web App"
                    alt="Source Code"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1.30em"
                        height="1.30em"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-code-xml-icon lucide-code-xml"
                    >
                        <path d="m18 16 4-4-4-4" />
                        <path d="m6 8-4 4 4 4" />
                        <path d="m14.5 4-5 16" />
                    </svg>
                </a>
            </p>
            <p className="text-muted text-smallest lh-sm mt-0">
                <small>© Zahra A. S. 2026. All rights reserved.</small>
            </p>
        </footer>
    );
}

export default Footer;
