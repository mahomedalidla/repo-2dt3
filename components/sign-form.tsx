import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


 import { signup } from "@/app/sign-up/actions"


export function SignForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Crear cuenta</CardTitle>
          <CardDescription>
Crea una cuenta nueva ingresando tus datos a continuación          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="email">email</Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Contraseña</Label>
                </div>
                <Input id="password" type="password" name="password" required />
              </div>

              <div className="flex flex-col gap-3">
                <Button formAction={signup} type="submit" className="w-full">
                  Crear cuenta
                </Button>
                 {/* <button formAction={signup}>Sign up</button> */}
                 
                 <Button formAction={signup}>Sign up</Button>

                {/* <Button variant="outline" className="w-full">
                  Iniciar sesión con Google
                </Button> */}
              </div>
            </div>
            
            
            
            <div className="mt-4 text-center text-sm">
              Ya tienes una cuenta? {" "}
              <a href="/login" className="underline underline-offset-4">
                Iniciar sesión
              </a>
              {/* <button formAction={signup}>Sign up</button>  */}
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}