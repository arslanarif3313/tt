export async function OPTIONS() {
  return new Response(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization, SOAPAction, X-Requested-With, Cookie, MyPhoneSession',
    },
  });
}

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const targetUrl = searchParams.get('url');
  
  if (!targetUrl) {
    return new Response('No URL provided', { status: 400 });
  }

  try {
    const response = await fetch(targetUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'myphonesession': request.headers.get('myphonesession') || '',
        'Cookie': request.headers.get('cookie') || '',
        'Origin': 'https://tymortechnologies-phone-system.pa.3cx.us',
        'Referer': 'https://tymortechnologies-phone-system.pa.3cx.us/',
      },
    });
    
    const data = await response.text();
    
    return new Response(data, {
      status: response.status,
      headers: {
        'Content-Type': response.headers.get('Content-Type') || 'text/plain',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    });
  } catch (error) {
    console.error('GET Proxy error:', error);
    return new Response(`Proxy error: ${error.message}`, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const { searchParams } = new URL(request.url);
    const targetUrl = searchParams.get('url');
    
    if (!targetUrl) {
      return new Response('No URL provided', { status: 400 });
    }

    const body = await request.arrayBuffer();
    
    const headers = {
      'Content-Type': request.headers.get('Content-Type') || 'application/octet-stream',
      'SOAPAction': request.headers.get('SOAPAction') || '""',
      'MyPhoneSession': request.headers.get('MyPhoneSession') || '',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
    };
    
    const response = await fetch(targetUrl, {
      method: 'POST',
      headers,
      body,
    });
    
    const data = await response.arrayBuffer();
    
    return new Response(data, {
      status: response.status,
      headers: {
        'Content-Type': response.headers.get('Content-Type') || 'application/octet-stream',
        'Access-Control-Allow-Origin': '*',
      },
    });
  } catch (error) {
    console.error('POST Proxy error:', error);
    return new Response(`Error: ${error.message}`, { status: 500 });
  }
}