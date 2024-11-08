import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@radix-ui/react-label"; // Importar Label desde Radix UI
import { Input } from "@/components/ui/input"; // Asegúrate de que Input provenga de tu librería o de una fuente válida

function CourseSettings() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Course Settings</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col gap-3">
                    <Label>Upload Course Image</Label>
                    <Input type="file" accept="image/*" className="mb-4" />
                </div>
            </CardContent>
        </Card>
    );
}

export default CourseSettings;
