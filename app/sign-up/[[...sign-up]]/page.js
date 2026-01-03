import { SignUp } from "@clerk/nextjs";

export const metadata = {
    title: "Sign Up - Easy Page Builder",
    robots: {
        index: false,
        follow: false,
    },
};

export default function SignUpPage() {
    return (
        <main className="min-h-screen flex items-center justify-center p-4">
            {/* Background effects */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl" />
            </div>

            <SignUp
                path="/sign-up"
                routing="path"
                signInUrl="/sign-in"
                afterSignUpUrl="/create"
            />
        </main>
    );
}
