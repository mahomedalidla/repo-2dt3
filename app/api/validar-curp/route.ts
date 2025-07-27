import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { curp } = await req.json()

  if (!curp || typeof curp !== 'string') {
    return NextResponse.json({ error: 'CURP inválida o faltante' }, { status: 400 })
  }

  const curpLimpia = curp.trim().toUpperCase()
  const regexCURP = /^[A-Z]{4}\d{6}[HM][A-Z]{5}[0-9A-Z]\d$/
  const valido = regexCURP.test(curpLimpia)

  return NextResponse.json({
    curp: curpLimpia,
    valido,
    mensaje: valido ? 'CURP válida' : 'CURP no válida'
  })
}