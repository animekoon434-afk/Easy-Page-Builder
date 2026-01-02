import { Navbar } from "@/components/ui";
import { StackSelector } from "@/components/stack";

export const metadata = {
    title: "Create Project - WebBuilder",
    description: "Select your tech stack and create a new project",
};

export default function CreatePage() {
    return (
        <main className="min-h-screen">
            <Navbar />

            {/* Background effects */}
            <div className="fixed inset-0 -z-10">
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl" />
                <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-indigo-600/15 rounded-full blur-3xl" />
            </div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                {/* Page Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Create Your Project
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Choose your preferred tech stack. We&apos;ll generate a customized
                        folder structure for you.
                    </p>
                </div>

                {/* Stack Selector */}
                <StackSelector />
            </div>
        </main>
    );
}
