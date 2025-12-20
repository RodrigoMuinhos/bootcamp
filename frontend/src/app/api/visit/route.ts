import { NextRequest, NextResponse } from 'next/server';

const BACKEND_URL = process.env.BACKEND_URL || 'https://bootcamp-backend-production.up.railway.app';

export async function POST(request: NextRequest) {
  try {
    const response = await fetch(`${BACKEND_URL}/api/visit`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      // Não falha a requisição do client se tracking falhar
      return NextResponse.json({ success: false }, { status: 200 });
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Erro ao registrar visita:', error);
    // Retorna sucesso mesmo com erro para não bloquear página
    return NextResponse.json({ success: false }, { status: 200 });
  }
}
