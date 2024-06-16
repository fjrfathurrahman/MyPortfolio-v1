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
        { path: '', tittle: "Email", icon: "fa-regular fa-envelope" },
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

const dataReview: any = {
    Reviews: [
        {
            name: 'Alexander L',
            image: 'https://i.pinimg.com/564x/13/b3/57/13b35759e9da6c839758cd0a5e0d523b.jpg',
            description: 'Fajar was always responsive and communicative throughout the project. All requests and revisions were handled quickly and appropriately.'
        },
        {
            name: 'Michael David',
            image: 'https://i.pinimg.com/564x/53/58/37/535837a68e8a8d1bc85c5e3eb7f94b8e.jpg',
            description: 'The experience of working with Fajar has been great. He is well versed in his field and always provides the best solution to any challenges that arise.'
        },
        {
            name: 'John A',
            image: 'https://i.pinimg.com/564x/27/d2/dc/27d2dc8fae147533a2fec6075a359c84.jpg',
            description: 'Fajars thoroughness in designing and building the website is impressive. Every element is designed in great detail, resulting in a perfect look.'
        },
        {
            name: 'Sophie Grace',
            image: 'https://i.pinimg.com/236x/3a/93/03/3a930381250ffa78913aaf43d1b870f0.jpg',
            description: 'Fajar always delivers projects on schedule and with great professionalism. He ensures that every stage of the project runs smoothly and without a hitch. His commitment to quality and timeliness is impressive.'
        },
        {
            name: 'Jessen S',
            image: 'https://i.pinimg.com/564x/47/f1/78/47f1780b9f02644dbea5b216420487be.jpg',
            description: 'The website built by Fajar is very professional and suits my business needs. The design is elegant and the navigation is very easy to use, making the user experience very pleasant.'
        },
        {
            name: 'Claire Sooya',
            image: 'https://i.pinimg.com/564x/71/fa/cf/71facfcd81516a4e89f7577ee6210928.jpg',
            description: 'Working with Fajar was a pleasure! He is very professional and his work is outstanding. The website created is very modern and functional.'
        },
    ]
}

export { dataNavigation, dataFooter, dataReview }