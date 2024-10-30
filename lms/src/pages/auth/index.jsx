import CommonForm from "@/components/common-form"; // Importa CommonForm
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { signInFormControls, signUpFormControls } from "@/config";
import { GraduationCap } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

function AuthPage() {
    // Estado para controlar la pestaña activa, comienza en "signin"
    const [activeTab, setActiveTab] = useState('signin');

    // Función para manejar el cambio de pestaña
    function handleTabChange(value) {
        setActiveTab(value);
    }

    // Función de ejemplo para manejar el envío del formulario
    function handleSubmit(e) {
        e.preventDefault();
        // Aquí puedes agregar la lógica de envío
        console.log("Formulario enviado");
    }

    return (
        <div className="flex flex-col min-h-screen ">
            {/* Header con logo y título */}
            <header className="px-4 lg:px-6 h-14 flex items-center border-b ">
                <Link to={"/"} className="flex items-center justify-center">
                    <GraduationCap className="h-8 w-8 mr-4" />
                    <span className="font-extrabold text-xl ">LMS LEARN</span>
                </Link>
            </header>

            {/* Contenido principal con las pestañas de autenticación */}
            <div className="flex items-center justify-center min-h-screen bg-background">
                <Tabs 
                    value={activeTab}
                    defaultValue="signin"
                    onValueChange={handleTabChange}
                    className="w-full max-w-md"
                >
                    {/* Lista de pestañas */}
                    <TabsList className="grid w-full grid-cols-2 ">
                        <TabsTrigger value="signin">Sign In</TabsTrigger>
                        <TabsTrigger value="signup">Sign Up</TabsTrigger>
                    </TabsList>

                    {/* Contenido para cada pestaña */}
                    <TabsContent value="signin">
                        <Card className="p-6 space-y-4 ">
                            <CardHeader>
                                <CardTitle>Sign in to your account</CardTitle>
                                <CardDescription> Enter your email and password to access your account</CardDescription>
                            </CardHeader>

                        <CardContent className="space-y-2">
                            <CommonForm
                                formControls={signInFormControls}
                                buttonText={'Sign in'}
                            />
                        </CardContent>

                        </Card>
                    </TabsContent>
                    <TabsContent value="signup">
                        <CommonForm
                            formControls={signUpFormControls}/>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
}

export default AuthPage;