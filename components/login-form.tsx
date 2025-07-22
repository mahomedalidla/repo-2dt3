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


 import { login, signup } from '@/app/login/actions'
// import { Button } from "@/components/ui/button"


// export default function LoginPage() {
//   return (
//     <form>
//       <label htmlFor="email">Email:</label>
//       <input id="email" name="email" type="email" required />
//       

{/* <label htmlFor="password">Password:</label> */}
//       <input id="password" name="password" type="password" required />
//       <button formAction={login}>Log in</button>
//       {/* <button formAction={signup}>Sign up</button> */}
//       <Button formAction={signup}>Sign up</Button>
//     </form>
//   )
// }



export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Inicia sesión</CardTitle>
          <CardDescription>
Ingrese su correo electrónico a continuación para iniciar sesión en su cuenta
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
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
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    ¿Olvidaste tu contraseña?
                  </a>
                </div>
                <Input id="password" type="password" name="password" required />
              </div>
              <div className="flex flex-col gap-3">
                <Button formAction={login} type="submit" className="w-full">
                  Entrar
                </Button>
                {/* <Button variant="outline" className="w-full">
                  Iniciar sesión con Google
                </Button> */}
              </div>
            </div>
            <div className="mt-4 text-center text-sm">
              ¿No tienes una cuenta? {" "}
              <a href="#" className="underline underline-offset-4">
                Crear cuenta
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
