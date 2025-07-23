import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { signup } from "@/app/sign-up/actions";

export function FormData({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-3", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>🚀 Convierte tu plano 2D en un modelo 3D</CardTitle>
          <CardDescription>
            Sube tu archivo DWG o DXF y completa los detalles para comenzar la
            conversión a Revit. Nos pondremos en contacto contigo si necesitamos
            información adicional.{" "}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <h2 className="text-xl font-semibold">
                Convierte tu plano 2D a 3D
              </h2>
              <p className="text-sm text-muted-foreground">
                Sube tu plano y cuéntanos un poco sobre el proyecto.
              </p>

              <div className="grid gap-3">
                <Label htmlFor="projectName">Nombre del proyecto</Label>
                <Input
                  id="projectName"
                  name="projectName"
                  placeholder="Casa Bosques 2025"
                  required
                />
              </div>

              <div className="grid gap-3">
                <Label htmlFor="location">Ubicación del proyecto</Label>
                <Input
                  id="location"
                  name="location"
                  placeholder="Ej. Zapopan, Jalisco"
                />
              </div>

              <div className="grid gap-3">
                <Label htmlFor="units">Unidades del plano</Label>
                <select
                  id="units"
                  name="units"
                  className="border rounded-md px-3 py-2 text-sm"
                  required
                >
                  <option value="">Selecciona</option>
                  <option value="m">Metros</option>
                  <option value="cm">Centímetros</option>
                  <option value="mm">Milímetros</option>
                  <option value="ft">Pies</option>
                </select>
              </div>

              <div className="grid gap-3">
                <Label htmlFor="wallHeight">Altura estándar de muros</Label>
                <Input
                  id="wallHeight"
                  name="wallHeight"
                  placeholder="Ej. 2.60 m"
                  required
                />
              </div>

              <div className="grid gap-3">
                <Label htmlFor="layers">
                  Capas relevantes (muros, ventanas, puertas)
                </Label>
                <Input
                  id="layers"
                  name="layers"
                  placeholder="Ej. A-Muro, A-Ventana, A-Puerta"
                  required
                />
              </div>

              <div className="grid gap-3">
                <Label htmlFor="scope">¿Qué deseas convertir?</Label>
                <select
                  id="scope"
                  name="scope"
                  className="border rounded-md px-3 py-2 text-sm"
                >
                  <option value="estructura">Solo estructura</option>
                  <option value="estructura_mobiliario">
                    Estructura + mobiliario
                  </option>
                  <option value="personalizado">Personalizado</option>
                </select>
              </div>

              <div className="grid gap-3">
                <Label htmlFor="file">Plano (.dwg o .dxf)</Label>
                <Input
                  id="file"
                  type="file"
                  name="file"
                  accept=".dwg,.dxf"
                  required
                />
              </div>

              <div className="grid gap-3">
                <Label htmlFor="details">
                  Comentarios o requerimientos adicionales
                </Label>
                <Input
                  id="details"
                  name="details"
                  placeholder="¿Necesitas renders, mobiliario específico, etc.?"
                />
              </div>

              <div className="flex flex-col gap-3">
                <Button type="submit" className="w-full">
                  Enviar plano
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
