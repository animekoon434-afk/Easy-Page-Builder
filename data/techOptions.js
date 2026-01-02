import {
    Globe,
    Code2,
    Hexagon,
    Paintbrush,
    Wind,
    Layers,
    FileCode,
    FileType,
    Server,
    Database,
    Minus
} from 'lucide-react';

export const frontendOptions = [
    {
        id: 'html',
        name: 'HTML',
        description: 'Classic web development',
        icon: Globe,
        disabled: false,
    },
    {
        id: 'react',
        name: 'React',
        description: 'Component-based UI library',
        icon: Code2,
        disabled: false,
    },
    {
        id: 'nextjs',
        name: 'Next.js',
        description: 'Full-stack React framework',
        icon: Hexagon,
        disabled: false,
        default: true,
    },
];

export const stylingOptions = [
    {
        id: 'css',
        name: 'CSS3',
        description: 'Pure CSS styling',
        icon: Paintbrush,
        disabled: false,
    },
    {
        id: 'tailwind',
        name: 'Tailwind CSS',
        description: 'Utility-first CSS framework',
        icon: Wind,
        disabled: false,
        default: true,
    },
    {
        id: 'bootstrap',
        name: 'Bootstrap',
        description: 'Popular CSS framework',
        icon: Layers,
        disabled: false,
    },
];

export const languageOptions = [
    {
        id: 'javascript',
        name: 'JavaScript',
        description: 'Dynamic scripting language',
        icon: FileCode,
        disabled: false,
        default: true,
    },
    {
        id: 'typescript',
        name: 'TypeScript',
        description: 'Typed JavaScript (Coming Soon)',
        icon: FileType,
        disabled: true,
    },
];

export const backendOptions = [
    {
        id: 'none',
        name: 'None',
        description: 'Frontend only',
        icon: Minus,
        disabled: false,
        default: true,
    },
    {
        id: 'nodejs',
        name: 'Node.js',
        description: 'JavaScript runtime',
        icon: Server,
        disabled: false,
    },
    {
        id: 'python',
        name: 'Python',
        description: 'Coming Soon',
        icon: Database,
        disabled: true,
    },
];

// Generate folder structure based on selected stack
export const generateFolderStructure = (stack) => {
    const { frontend, styling, backend } = stack;

    const structures = {
        html: {
            name: 'Web Project',
            icon: '📦',
            children: [
                { name: 'index.html', icon: '📄', type: 'file' },
                {
                    name: 'styles',
                    icon: '🎨',
                    children: [
                        { name: 'main.css', icon: '📄', type: 'file' },
                    ]
                },
                {
                    name: 'scripts',
                    icon: '⚡',
                    children: [
                        { name: 'app.js', icon: '📄', type: 'file' },
                    ]
                },
                {
                    name: 'assets',
                    icon: '🗂',
                    children: [
                        { name: 'images', icon: '🖼', children: [] },
                        { name: 'fonts', icon: '🔤', children: [] },
                    ]
                },
            ]
        },
        react: {
            name: 'React App',
            icon: '📦',
            children: [
                {
                    name: 'src',
                    icon: '🧠',
                    children: [
                        { name: 'App.jsx', icon: '⚛️', type: 'file' },
                        { name: 'index.jsx', icon: '📄', type: 'file' },
                        {
                            name: 'components',
                            icon: '🧩',
                            children: [
                                { name: 'Header.jsx', icon: '📄', type: 'file' },
                                { name: 'Footer.jsx', icon: '📄', type: 'file' },
                            ]
                        },
                        {
                            name: 'styles',
                            icon: '🎨',
                            children: [
                                { name: 'global.css', icon: '📄', type: 'file' },
                            ]
                        },
                        {
                            name: 'hooks',
                            icon: '🪝',
                            children: []
                        },
                        {
                            name: 'utils',
                            icon: '🔧',
                            children: []
                        },
                    ]
                },
                {
                    name: 'public',
                    icon: '🌐',
                    children: [
                        { name: 'index.html', icon: '📄', type: 'file' },
                        { name: 'favicon.ico', icon: '🖼', type: 'file' },
                    ]
                },
                { name: 'package.json', icon: '📋', type: 'file' },
                { name: 'README.md', icon: '📖', type: 'file' },
            ]
        },
        nextjs: {
            name: 'Next.js App',
            icon: '📦',
            children: [
                {
                    name: 'app',
                    icon: '🧠',
                    children: [
                        { name: 'page.js', icon: '📄', type: 'file' },
                        { name: 'layout.js', icon: '📄', type: 'file' },
                        { name: 'globals.css', icon: '🎨', type: 'file' },
                        {
                            name: 'api',
                            icon: '⚡',
                            children: [
                                { name: 'route.js', icon: '📄', type: 'file' },
                            ]
                        },
                    ]
                },
                {
                    name: 'components',
                    icon: '🧩',
                    children: [
                        { name: 'Header.jsx', icon: '📄', type: 'file' },
                        { name: 'Footer.jsx', icon: '📄', type: 'file' },
                        {
                            name: 'ui',
                            icon: '🎯',
                            children: [
                                { name: 'Button.jsx', icon: '📄', type: 'file' },
                                { name: 'Card.jsx', icon: '📄', type: 'file' },
                            ]
                        },
                    ]
                },
                {
                    name: 'lib',
                    icon: '📚',
                    children: [
                        { name: 'utils.js', icon: '📄', type: 'file' },
                    ]
                },
                {
                    name: 'public',
                    icon: '🌐',
                    children: [
                        { name: 'favicon.ico', icon: '🖼', type: 'file' },
                    ]
                },
                { name: 'package.json', icon: '📋', type: 'file' },
                { name: 'next.config.js', icon: '⚙', type: 'file' },
                { name: 'README.md', icon: '📖', type: 'file' },
            ]
        },
    };

    // Get base structure
    let structure = structures[frontend] || structures.nextjs;

    // Add backend-specific folders if backend is selected
    if (backend === 'nodejs') {
        const serverFolder = {
            name: 'server',
            icon: '🖥',
            children: [
                { name: 'index.js', icon: '📄', type: 'file' },
                {
                    name: 'routes',
                    icon: '🔀',
                    children: [
                        { name: 'api.js', icon: '📄', type: 'file' },
                    ]
                },
                {
                    name: 'controllers',
                    icon: '🎮',
                    children: []
                },
                {
                    name: 'models',
                    icon: '📊',
                    children: []
                },
            ]
        };
        structure = {
            ...structure,
            children: [...structure.children, serverFolder]
        };
    }

    // Add Prisma folder if backend is selected
    if (backend !== 'none') {
        const prismaFolder = {
            name: 'prisma',
            icon: '💎',
            children: [
                { name: 'schema.prisma', icon: '📄', type: 'file' },
            ]
        };
        structure = {
            ...structure,
            children: [...structure.children, prismaFolder]
        };
    }

    // Add Tailwind config if Tailwind is selected
    if (styling.includes('tailwind')) {
        structure = {
            ...structure,
            children: [
                ...structure.children,
                { name: 'tailwind.config.js', icon: '🌊', type: 'file' },
            ]
        };
    }

    return structure;
};

export default {
    frontendOptions,
    stylingOptions,
    languageOptions,
    backendOptions,
    generateFolderStructure,
};
