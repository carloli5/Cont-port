
interface Projects {
    id: number;
    title?: string;
    description?: string[];
    images?: string[];
    videoUrl?: string;
    thumbnailUrl?: string;
    thumbnailTime?: number;
    projectUrl?: string;
    technologies?: string[];
    customIcons?: Record<string, string>; // Maps tech name to image path
}

const CLOUDINARY_VIDEO_BASE = import.meta.env.VITE_CLOUDINARY_VIDEO_BASE_URL ?? "https://res.cloudinary.com/dlohdez0u/video/upload"
const CLOUDINARY_IMAGE_BASE = import.meta.env.VITE_CLOUDINARY_IMAGE_BASE_URL ?? "https://res.cloudinary.com/dlohdez0u/image/upload"

function cloudinaryVideoUrl(publicId: string) {
  return `${CLOUDINARY_VIDEO_BASE}/${publicId}`
}

function cloudinaryImageUrl(publicId: string) {
  return `${CLOUDINARY_IMAGE_BASE}/${publicId}`
}

export const projectsData: Projects[] = [
    {
        id: 1,
        videoUrl: cloudinaryVideoUrl("Vids/lv_0_20260505180234_j38imc"),
        thumbnailTime: 17,
        title: "Mitsy highlight 1",
        description: ["A dynamic short video from Mitsy's feed."],
    },
    {
        id: 2,
        videoUrl: cloudinaryVideoUrl("Vids/lv_0_20251110171125_jn0yio"),
        thumbnailTime: 14,
        title: "Mitsy highlight 2",
        description: ["Fast-paced motion edit with vibrant energy."],
    },
    {
        id: 3,
        videoUrl: cloudinaryVideoUrl("Vids/snaptik_7340904599554968837_hd_tabij3"),
        thumbnailTime: 12,
        title: "Mitsy highlight 3",
        description: ["A polished clip showing Mitsy's performance style."],
    },
    {
        id: 4,
        videoUrl: cloudinaryVideoUrl("Vids/lv_0_20251203194559_elzhbz"),
        thumbnailTime: 2,
        title: "Mitsy highlight 4",
        description: ["Creative transition work with catchy beats."],
    },
    {
        id: 5,
        videoUrl: cloudinaryVideoUrl("Vids/snaptik_7557318780964195592_hd_bw8wd4"),
        thumbnailTime: 4,
        title: "Mitsy highlight 5",
        description: ["A bold look paired with rhythmic editing."],
    },
    {
        id: 6,
        videoUrl: cloudinaryVideoUrl("Vids/lv_0_20251017172804_rereqg"),
        thumbnailTime: 10,
        title: "Mitsy highlight 6",
        description: ["A dramatic shot showcasing Mitsy's aesthetic."],
    },
    {
        id: 7,
        videoUrl: cloudinaryVideoUrl("Vids/snaptik_7318034310093753605_hd_bujphj"),
        thumbnailTime: 1,
        title: "Mitsy highlight 7",
        description: ["Colorful content with strong visual storytelling."],
    },
    {
        id: 8,
        videoUrl: cloudinaryVideoUrl("Vids/snaptik_7480181508494462216_hd_e7gwnk"),
        thumbnailTime: 1,
        title: "Mitsy highlight 8",
        description: ["A fun creative moment turned into video art."],
    },
    {
        id: 9,
        videoUrl: cloudinaryVideoUrl("Vids/snaptik_7433062141554380050_hd_w3ovsj"),
        thumbnailTime: 5,
        title: "Mitsy highlight 9",
        description: ["A polished clip with bold motion visuals."],
    },
    {
        id: 10,
        videoUrl: cloudinaryVideoUrl("Vids/snaptik_7460475305669561607_hd_odyy9r"),
        thumbnailTime: 2,
        title: "Mitsy highlight 10",
        description: ["A stylized performance moment in motion."],
    },
    {
        id: 11,
        videoUrl: cloudinaryVideoUrl("Vids/lv_0_20260505183445_jy1io1"),
        thumbnailTime: 48,
        title: "Mitsy highlight 11",
        description: ["A cinematic clip with strong energy."],
    },
    {
        id: 12,
        videoUrl: cloudinaryVideoUrl("Vids/ssstik.io_1777975540803_mqqkdu"),
        thumbnailTime: 1,
        title: "Mitsy highlight 12",
        description: ["A standout short video with playful edits."],
    }
]

export const imageProjectsData: Projects[] = [
    {
        id: 101,
        title: "Mitsy image 1",
        description: ["I'm rocking a dark fantasy look with pale-white base, dramatic white cut-crease, bold red lips with a faux white fangs, and graphic black brows to match my vampire-doll cosplay aesthetic."],
        images: [
            cloudinaryImageUrl("mitsy-img2_yejqh7"),
            cloudinaryImageUrl("mitsy-img14_cn73w2"),
            cloudinaryImageUrl("mitsy-img16_ertcz7"),
            cloudinaryImageUrl("mitsy-img15_tkdjnx"),
        ],
    },
    {
        id: 102,
        title: "Mitsy image 2",
        description: ["I went full Daphne Blake with a porcelain base, bold purple eyeshadow cut crease, light green inner corner highlight, and a classic berry lip to match the iconic purple dress and green headband."],
        images: [cloudinaryImageUrl("mitsy-img3_j5d79c")],
    },
    {
        id: 103,
        title: "Mitsy image 3",
        description: ["I kept the base soft and natural for Mitsuri Kanroji, adding doe-eye lashes, subtle pink-toned lids, and a soft rosy lip to capture her gentle yet fierce Energy Hashira charm."],
        images: [cloudinaryImageUrl("mitsy-img4_ulcqbq")],
    },
    {
        id: 104,
        title: "Mitsy image 4",
        description: ["I went fresh and minimalist for this look, clean dewy base, soft flushed cheeks, wispy natural lashes, and a sheer peachy-pink lip to match the sweet, everyday-girl vibe of this casual cosplay."],
        images: [cloudinaryImageUrl("mitsy-img24_mltych")],
    },
    {
        id: 105,
        title: "Mitsy image 5",
        description: ["I channeled Enid Sinclair with a bright, playful look, dramatic spiky lower lash liner, bold pink eye shadow, flushed cheeks, and a soft nude lip to contrast the fun cotton-candy hair and Nevermore uniform."],
        images: [cloudinaryImageUrl("mitsy-img5_mwtgl6")],
    },
    {
        id: 106,
        title: "Mitsy image 6",
        description: ["I brought Agnes to life with big doll-like circle eyes, soft cool brown-toned shadow, brushed-up brown brows, subtle rosy cheeks, and a muted berry lip for that creepy stalker fangirl feel."],
        images: [cloudinaryImageUrl("mitsy-img8_qyvbzb")],
    },
    {
        id: 107,
        title: "Mitsy image 7",
        description: ["I went full editorial chaos with an intense red and purple halo eye, heavy blended cut-crease, dark vampy red lip, and a pale base to create that eerie broken-doll meets avant-garde fashion energy."],
        images: [cloudinaryImageUrl("mitsy-img12_agnqpp")],
    },
    {
        id: 108,
        title: "Mitsy image 8",
        description: ["I went full Lili De Rochefort with a porcelain white base, soft pink-red bruised under-eye shadow, dramatic wispy lashes, icy blue circle lenses, and a deep red lip to capture her elegant yet cold aristocratic beauty."],
        images: [cloudinaryImageUrl("mitsy-img18_dzfowd")],
    },
]