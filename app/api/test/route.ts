import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/utils/supabase/supabase-server'

export async function GET(req: NextRequest) {
  const authHeader = req.headers.get('authorization')

  console.log('Authorization header:', authHeader)

  if (!authHeader) {
    return NextResponse.json({ error: 'Token faltante' }, { status: 401 })
  }

  // Soportar formatos con o sin "Bearer"
  const token = authHeader.startsWith('Bearer ')
    ? authHeader.split(' ')[1]
    : authHeader

  const { data: user, error } = await supabase.auth.getUser(token)

  if (error || !user) {
    return NextResponse.json({ error: 'Token inválido' }, { status: 403 })
  }

  return NextResponse.json({ mensaje: `Hola ${user.user.email}` })
}
