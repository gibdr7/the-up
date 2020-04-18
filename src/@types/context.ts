interface Breadcrumb {
    crumbs: string;
}

interface Frontmatter {
    title: string;
    category: string;
    date: string;
    subcategory: string;
    tags: string[];
}

interface ReadingTime {
    text: string;
    minutes: string;
    time: string;
    words: string;
}

interface Fields {
    slug: string;
    pagePath: string;
    readingTime: ReadingTime;
}

export interface Node {
    frontmatter: Frontmatter;
    fields: Fields;
    excerpt: string;
    html: string;
}

interface MarkdownRemark {
    markdownRemark: Node;
}

interface Nodes {
  node: Node;
}

interface Group {
    fieldValue: string;
    totalCount: number;
}

interface SiteMetadataItems {
    title: string;
    author: string;
    imageUrl: string;
    description: string;
    keywords: string;
    instagram: string;
    github: string;
    facebook: string;
    linkedin: string;
    gatsby: string;
    bulma: string;
    spotify: string;
    siteUrl: string;
    email: string;
    phone: string;
}

interface SiteMetadata {
    siteMetadata: SiteMetadataItems;
}

interface PlaylistNode {
    spotifyId: string;
    name: string;
    href: string;
    image: any;
    images: any;
    tracks: any;
    owner: any;
}

export interface Playlists {
    node: PlaylistNode;
}

interface PlaylistEdges {
    edges: Playlists[];
}

interface InstaNode {
    id: string;
    likes: number;
    mediaType: string;
    preview: any;
    original: any;
    timestamp: number;
    caption: string;
    localFile: any;
}

interface Instas {
    node: InstaNode;
}

export interface InstaEdges {
    edges: Instas[];
}

interface AllMarkdownRemarkLevel {
    limit: number;
    totalCount: number;
    edges: Nodes[];
    group: Group[];
}

interface AllMarkdownRemark {
    allMarkdownRemark: AllMarkdownRemarkLevel;
    playlists: PlaylistEdges;
    instas: InstaEdges;
    site: SiteMetadata;
}

export type ArchivePageContext = {
    readonly crumbs: string;
    readonly pagePath: string;
    readonly prev: Node;
    readonly next: Node;
    readonly allCategories: Array<Group>;
    readonly allSubcategories: Array<Group>;
    readonly category: string;
    readonly subcategory: string;
    readonly limit: number;
    readonly skip: number;
    readonly currentPage: number;
    readonly numPages: number;
    readonly tag: string;
    readonly breadcrumb: Breadcrumb;
}

export interface MarkdownProps {
    pageContext: ArchivePageContext;
    data: MarkdownRemark;
}

export interface AllMarkdownProps {
  pageContext: ArchivePageContext;
  data: AllMarkdownRemark;
}
