export default function Footer() {
    return (
        <footer className="border-t border-white/10 bg-black pt-16 pb-8">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                    <div className="col-span-2 md:col-span-1">
                        <h3 className="text-xl font-bold text-white mb-4">WebBuilder</h3>
                        <p className="text-gray-400 text-sm mb-4">
                            The modern way to build, deploy, and scale your web applications.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold text-white mb-4">Product</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-violet-400 transition-colors">Features</a></li>
                            <li><a href="#" className="hover:text-violet-400 transition-colors">Pricing</a></li>
                            <li><a href="#" className="hover:text-violet-400 transition-colors">Integration</a></li>
                            <li><a href="#" className="hover:text-violet-400 transition-colors">Changelog</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-white mb-4">Resources</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-violet-400 transition-colors">Documentation</a></li>
                            <li><a href="#" className="hover:text-violet-400 transition-colors">API Reference</a></li>
                            <li><a href="#" className="hover:text-violet-400 transition-colors">Community</a></li>
                            <li><a href="#" className="hover:text-violet-400 transition-colors">Blog</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-white mb-4">Company</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-violet-400 transition-colors">About</a></li>
                            <li><a href="#" className="hover:text-violet-400 transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-violet-400 transition-colors">Legal</a></li>
                            <li><a href="#" className="hover:text-violet-400 transition-colors">Contact</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        © 2026 WebBuilder Inc. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <a href="#" className="text-gray-500 hover:text-white transition-colors">
                            <span className="sr-only">Twitter</span>
                            Twitter
                        </a>
                        <a href="#" className="text-gray-500 hover:text-white transition-colors">
                            <span className="sr-only">GitHub</span>
                            GitHub
                        </a>
                        <a href="#" className="text-gray-500 hover:text-white transition-colors">
                            <span className="sr-only">Discord</span>
                            Discord
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
