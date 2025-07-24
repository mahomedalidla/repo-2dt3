// app/api/protegido/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/utils/supabase/supabase-server';

export async function GET(req: NextRequest) {
  const authHeader = req.headers.get('authorization');
  const token = authHeader?.split(' ')[1];

  if (!token) {
    return NextResponse.json({ error: 'Token faltante' }, { status: 401 });
  }

  const { data: user, error } = await supabase.auth.getUser(token);

  if (error || !user) {
    return NextResponse.json({ error: 'Token inválido' }, { status: 403 });
  }

  return NextResponse.json({ mensaje: `Hola ${user.user.email}` });
}