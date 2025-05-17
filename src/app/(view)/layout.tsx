import { AuthProvider } from "@/context/AuthContext";

export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <section>
            <AuthProvider>
            {children}
            </AuthProvider>
        </section>
    );
}