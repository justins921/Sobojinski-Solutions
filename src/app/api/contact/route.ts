import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const { firstName, lastName, email, phone, service, message } = body

    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // If Supabase is configured, store the submission
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    if (supabaseUrl && supabaseKey) {
      const { getSupabase } = await import('@/lib/supabase')
      const supabase = getSupabase()
      const { error } = await supabase
        .from('contact_submissions')
        .insert({
          first_name: firstName,
          last_name: lastName,
          email,
          phone: phone || null,
          service: service || null,
          message,
        })

      if (error) {
        console.error('Supabase insert error:', error)
        return NextResponse.json(
          { error: 'Failed to save submission' },
          { status: 500 }
        )
      }
    } else {
      // Log submission when Supabase isn't configured yet
      console.log('Contact submission (Supabase not configured):', { firstName, lastName, email, phone, service, message })
    }

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
