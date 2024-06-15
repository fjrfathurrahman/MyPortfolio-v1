import imgIconReact from "../assets/global/imgIconReact.png";
import imgIconTailwindcss from "../assets/global/imgIconTailwind.png";

const dataNavigation: any = {
    Logo: 'FjrFthrrhmn.',
    Menu: [
        { path: '/', tittle: 'Home' },
        { path: '/about', tittle: 'About' },
        { path: '/projects', tittle: 'Projects' },
    ]
}

const dataFooter: any = {
    Made: [imgIconReact, imgIconTailwindcss],
    Sosial: [
        { path: '', tittle: "Email", icon: "fa-solid fa-envelope" },
        { path: '', tittle: "Github", icon: "fa-brands fa-github" },
        { path: '', tittle: "LinkedIn", icon: "fa-brands fa-linkedin" },
        { path: '', tittle: "Instagram", icon: "fa-brands fa-instagram" },
    ],
    DesignSosialMedia: [
        { icon: 'facebook' },
        { icon: 'twitter' },
        { icon: 'tiktok' },
        { icon: 'instagram' },
        { icon: 'snapchat' },
        { icon: 'whatsapp' },
        { icon: 'telegram' },
        { icon: 'discord' },
        { icon: 'reddit' },
        { icon: 'twitch' },
        { icon: 'youtube' },
        { icon: 'linkedin' },
        { icon: 'github' },
        { icon: 'pinterest' },
        { icon: 'tumblr' },
        { icon: 'blogger-b' },
    ]
}
export { dataNavigation, dataFooter }