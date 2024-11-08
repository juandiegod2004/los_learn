import InstructorCourses from "@/components/instructor-view/courses";
import InstructorDashboard from "@/components/instructor-view/dashboard";
import { Button } from "@/components/ui/button";
import { AuthContext } from "@/context/auth-context";
import { Tabs, TabsContent } from "@radix-ui/react-tabs";
import { BarChart, Book, LogOut } from "lucide-react";
import { useContext, useState } from "react";

function InstructorDashboardpage() {

    const [activeTab, setActiveTab] = useState("dashboard")
    const {resetCredentials} = useContext(AuthContext);

    const menuItems = [
        {
            icon: BarChart,
            label: 'Dashboard',
            value: 'dashboard',
            component: <InstructorDashboard />
        },
        {
            icon: Book,
            label: 'Courses',
            value: 'courses',
            component: <InstructorCourses />
        },
        {
            icon: LogOut,
            label: 'Logout',
            value: 'logout',
            component: null, // Esto activará la acción de cerrar sesión en el contexto.
        }
    ];
    function handleLogout(){ 
        resetCredentials();
        sessionStorage.clear();
     }

    return (
        <div className="flex h-full min-h-screen bg-gray-100">
            <aside className="w-64 bg-white shadow-md hidden md:block">
                <div className="p-4">
                    <h2 className="text-2xl font-bold mb-4">Instructor View</h2>
                    <nav>
                        {menuItems.map((menuItem) => {
                            const Icon = menuItem.icon; // Asignamos el icono como componente aquí
                            return (
                                <Button key={menuItem.value} className="w-full mb-2 flex items-center" 
                                variant={activeTab === menuItem.value ? "secondary" : "ghost"}
                                onClick={menuItem.value === "logout" ?

                                    handleLogout : ()=>setActiveTab(menuItem.value)
                                }>
                                    <Icon className="mr-2 h-4 w-4" />
                                    {menuItem.label}
                                    
                                </Button>
                            );
                        })}
                    </nav>
                </div>
            </aside>

            <main className="flex-1 p-8 overflow-auto">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-3xl font-bold mb-8">
                        Dashboard
                    </h1>

                    <Tabs value={activeTab} onValueChange={setActiveTab}>
                        {
                           menuItems.map(menuItem => (
                            <TabsContent key={menuItem.value} value={menuItem.value}>
                                {menuItem.component !== null ? menuItem.component : null}
                            </TabsContent>
                        ))
                        
                        }

                    </Tabs>
                </div>

            </main>
        </div>
    );
}

export default InstructorDashboardpage;
