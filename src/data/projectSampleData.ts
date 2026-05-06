
interface Projects {
    id: number;
    title?: string;
    description?: string[];
    images?: string[];
    videoUrl?: string;
    projectUrl?: string;
    technologies?: string[];
    customIcons?: Record<string, string>; // Maps tech name to image path
}

export const projectsData: Projects[] = [
    {
        id: 1,
        videoUrl: "/tiktokVids/mitsy-vid1.mp4",
    },
    {
        id: 2,
        videoUrl: "/tiktokVids/mitsy-vid2.mp4",
    },
    {
        id: 3,
        videoUrl: "/tiktokVids/mitsy-vid3.mp4",
    },
    {
        id: 4,
        videoUrl: "/tiktokVids/mitsy-vid4.mp4",
    },
    {
        id: 5,
        videoUrl: "/tiktokVids/mitsy-vid5.mp4",
    },
    {
        id: 6,
        videoUrl: "/tiktokVids/mitsy-vid6.mp4",
    },
    {
        id: 7,
        videoUrl: "/tiktokVids/mitsy-vid7.mp4",
    },
    {
        id: 8,
        videoUrl: "/tiktokVids/mitsy-vid8.mp4",
    },
    {
        id: 9,
        videoUrl: "/tiktokVids/mitsy-vid9.mp4",
    },
    {
        id: 10,
        videoUrl: "/tiktokVids/mitsy-vid10.mp4",
    },
    {
        id: 11,
        videoUrl: "/tiktokVids/mitsy-vid11.mp4",
    },
    {
        id: 12,
        videoUrl: "/tiktokVids/mitsy-vid12.mp4",
    }
]

export const imageProjectsData: Projects[] = [
    {
        id: 101,
        title: "Mitsy Gallery 1",
        images: ["/mitsy-pics/mitsy-img2.jpg", "/mitsy-pics/mitsy-img3.jpg"],
    },
    {
        id: 102,
        title: "Mitsy Gallery 2",
        images: ["/mitsy-pics/mitsy-img4.jpg", "/mitsy-pics/mitsy-img5.jpg"],
    },
    {
        id: 103,
        title: "Mitsy Gallery 3",
        images: ["/mitsy-pics/mitsy-img6.jpg", "/mitsy-pics/mitsy-img7.jpg"],
    },
    {
        id: 104,
        title: "Mitsy Gallery 4",
        images: ["/mitsy-pics/mitsy-img8.jpg", "/mitsy-pics/mitsy-img9.jpg"],
    },
    {
        id: 105,
        title: "Mitsy Gallery 5",
        images: ["/mitsy-pics/mitsy-img10.jpg", "/mitsy-pics/mitsy-img11.jpg"],
    },
]