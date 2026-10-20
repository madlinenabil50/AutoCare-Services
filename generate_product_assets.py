from pathlib import Path

root = Path(__file__).resolve().parent / 'assets' / 'images' / 'products'
root.mkdir(parents=True, exist_ok=True)

items = {
    'product-placeholder.svg': ('Auto Part Placeholder', 'Category-specific part placeholder', '#0d6efd', 'placeholder'),
    'premium-engine-air-filter.svg': ('Engine Air Filter', 'Premium Filter', '#0d6efd', 'filter'),
    'front-brake-pad-set.svg': ('Brake Pad Set', 'Front Set', '#d64545', 'brake'),
    'car-battery-70ah.svg': ('12V Battery', '70Ah', '#f4b740', 'battery'),
    'synthetic-engine-oil-5w-30.svg': ('Engine Oil', '5W-30', '#1ca76b', 'oil'),
    'spark-plug-set-4-pack.svg': ('Spark Plug Set', '4-Pack', '#5c6f86', 'spark'),
    'all-season-tire-225-55r17.svg': ('All Season Tire', '225/55R17', '#3c4d62', 'tire'),
    'headlight-assembly.svg': ('Headlight Assembly', 'Ready to Install', '#2d6df6', 'headlight'),
    'front-suspension-strut.svg': ('Suspension Strut', 'Front', '#0b4fbd', 'strut'),
    'cabin-air-filter.svg': ('Cabin Air Filter', 'HVAC', '#6c85ff', 'cabin'),
    'battery-terminal-kit.svg': ('Battery Terminal Kit', 'Secure Fit', '#f0932b', 'terminal'),
    'car-care-detail-kit.svg': ('Detail Kit', 'Care Pack', '#0d9488', 'detail'),
    'heavy-duty-clutch-kit.svg': ('Clutch Kit', 'Heavy Duty', '#a855f7', 'clutch'),
}


def build_svg(label, subtitle, accent, kind):
    main = f'''<svg xmlns="http://www.w3.org/2000/svg" width="900" height="700" viewBox="0 0 900 700">
  <defs>
    <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
      <stop offset="0%" stop-color="#f5f8fc"/>
      <stop offset="100%" stop-color="#edf4ff"/>
    </linearGradient>
  </defs>
  <rect width="900" height="700" fill="url(#bg)"/>
  <rect x="70" y="70" width="760" height="560" rx="34" fill="#ffffff" stroke="{accent}" stroke-width="4"/>
  <text x="450" y="170" text-anchor="middle" font-family="Segoe UI, Arial, sans-serif" font-size="42" font-weight="700" fill="#102a43">{label}</text>
  <text x="450" y="220" text-anchor="middle" font-family="Segoe UI, Arial, sans-serif" font-size="20" fill="#5c6f86">{subtitle}</text>
'''

    if kind == 'filter':
        body = '''
  <rect x="290" y="200" width="320" height="240" rx="24" fill="#dfeeff" stroke="#0d6efd" stroke-width="8"/>
  <rect x="320" y="230" width="260" height="180" rx="18" fill="#ffffff" stroke="#0d6efd" stroke-width="6"/>
  <circle cx="450" cy="320" r="52" fill="#bfd9ff"/>
  <circle cx="450" cy="320" r="24" fill="#0d6efd"/>
  <path d="M360 228 L360 400 M540 228 L540 400" stroke="#0d6efd" stroke-width="10" stroke-linecap="round"/>
'''
    elif kind == 'brake':
        body = '''
  <rect x="250" y="210" width="150" height="220" rx="18" fill="#e9edf4" stroke="#d64545" stroke-width="8"/>
  <rect x="500" y="210" width="150" height="220" rx="18" fill="#e9edf4" stroke="#d64545" stroke-width="8"/>
  <rect x="340" y="250" width="220" height="140" rx="18" fill="#ffffff" stroke="#d64545" stroke-width="8"/>
  <circle cx="450" cy="320" r="42" fill="#f8d7d7" stroke="#d64545" stroke-width="8"/>
'''
    elif kind == 'battery':
        body = '''
  <rect x="300" y="180" width="300" height="300" rx="28" fill="#e8f7ff" stroke="#f4b740" stroke-width="10"/>
  <rect x="360" y="130" width="180" height="58" rx="14" fill="#f4b740"/>
  <rect x="380" y="240" width="140" height="130" rx="18" fill="#fff7dc" stroke="#f4b740" stroke-width="5"/>
  <circle cx="390" cy="310" r="12" fill="#f4b740"/>
  <circle cx="510" cy="310" r="12" fill="#f4b740"/>
'''
    elif kind == 'oil':
        body = '''
  <rect x="370" y="190" width="160" height="260" rx="22" fill="#fff0b3" stroke="#1ca76b" stroke-width="8"/>
  <rect x="410" y="120" width="80" height="80" rx="18" fill="#d5f6e8" stroke="#1ca76b" stroke-width="6"/>
  <rect x="395" y="260" width="110" height="110" rx="14" fill="#c9f3d8" stroke="#1ca76b" stroke-width="6"/>
  <path d="M450 315 L486 370 L450 425 L414 370 Z" fill="#1ca76b" opacity="0.75"/>
'''
    elif kind == 'spark':
        body = '''
  <rect x="275" y="260" width="350" height="120" rx="20" fill="#f3f6fb" stroke="#5c6f86" stroke-width="8"/>
  <rect x="310" y="220" width="90" height="120" rx="18" fill="#dfe7f3" stroke="#5c6f86" stroke-width="8"/>
  <rect x="500" y="220" width="90" height="120" rx="18" fill="#dfe7f3" stroke="#5c6f86" stroke-width="8"/>
  <circle cx="355" cy="320" r="26" fill="#9cb9d8"/>
  <circle cx="545" cy="320" r="26" fill="#9cb9d8"/>
  <path d="M390 320 L510 320" stroke="#5c6f86" stroke-width="10" stroke-linecap="round"/>
'''
    elif kind == 'tire':
        body = '''
  <circle cx="450" cy="330" r="165" fill="#e7edf5" stroke="#3c4d62" stroke-width="14"/>
  <circle cx="450" cy="330" r="110" fill="#ffffff" stroke="#3c4d62" stroke-width="10"/>
  <circle cx="450" cy="330" r="34" fill="#dfe7f3" stroke="#3c4d62" stroke-width="7"/>
  <g stroke="#3c4d62" stroke-width="12" stroke-linecap="round">
    <path d="M336 250 L370 230 M264 330 L286 330 M336 410 L370 470 M450 495 L450 520 M564 410 L530 470 M636 330 L614 330 M564 250 L530 230"/>
  </g>
'''
    elif kind == 'headlight':
        body = '''
  <path d="M260 410 L350 230 L550 230 L640 410 Q640 500 510 500 L390 500 Q260 500 260 410 Z" fill="#eaf4ff" stroke="#2d6df6" stroke-width="8"/>
  <path d="M315 390 L390 280 L500 280 L575 390" fill="none" stroke="#2d6df6" stroke-width="10" stroke-linecap="round"/>
  <circle cx="450" cy="370" r="70" fill="#dfeeff" stroke="#2d6df6" stroke-width="8"/>
  <circle cx="450" cy="370" r="34" fill="#bfd9ff" stroke="#2d6df6" stroke-width="7"/>
'''
    elif kind == 'strut':
        body = '''
  <rect x="410" y="180" width="80" height="230" rx="24" fill="#dfeaff" stroke="#0b4fbd" stroke-width="8"/>
  <rect x="390" y="260" width="120" height="120" rx="18" fill="#ffffff" stroke="#0b4fbd" stroke-width="8"/>
  <path d="M430 180 L430 120 M470 180 L470 120" stroke="#0b4fbd" stroke-width="10" stroke-linecap="round"/>
  <path d="M430 470 L430 540 M470 470 L470 540" stroke="#0b4fbd" stroke-width="10" stroke-linecap="round"/>
  <path d="M370 320 C380 300, 390 290, 410 290" fill="none" stroke="#0b4fbd" stroke-width="10" stroke-linecap="round"/>
  <path d="M530 320 C520 300, 510 290, 490 290" fill="none" stroke="#0b4fbd" stroke-width="10" stroke-linecap="round"/>
'''
    elif kind == 'cabin':
        body = '''
  <rect x="250" y="220" width="400" height="220" rx="26" fill="#edf5ff" stroke="#6c85ff" stroke-width="8"/>
  <rect x="300" y="255" width="300" height="150" rx="16" fill="#ffffff" stroke="#6c85ff" stroke-width="6"/>
  <path d="M320 295 H580 M320 340 H580 M320 385 H580" stroke="#6c85ff" stroke-width="12" stroke-linecap="round"/>
'''
    elif kind == 'terminal':
        body = '''
  <rect x="270" y="230" width="360" height="220" rx="28" fill="#fff7df" stroke="#f0932b" stroke-width="8"/>
  <circle cx="350" cy="340" r="58" fill="#ffd57d" stroke="#f0932b" stroke-width="8"/>
  <circle cx="550" cy="340" r="58" fill="#ffd57d" stroke="#f0932b" stroke-width="8"/>
  <path d="M420 230 L420 170 M480 230 L480 170" stroke="#f0932b" stroke-width="10" stroke-linecap="round"/>
  <path d="M430 270 L470 270 L470 390 L430 390 Z" fill="#fff" stroke="#f0932b" stroke-width="6"/>
'''
    elif kind == 'detail':
        body = '''
  <rect x="260" y="200" width="120" height="220" rx="18" fill="#dffcf5" stroke="#0d9488" stroke-width="8"/>
  <rect x="420" y="210" width="200" height="180" rx="18" fill="#e6f6ff" stroke="#0d9488" stroke-width="8"/>
  <circle cx="330" cy="300" r="42" fill="#9fe3d7"/>
  <path d="M420 250 C470 220, 540 220, 590 250 L590 320 C540 350, 470 350, 420 320 Z" fill="#dffcf5" stroke="#0d9488" stroke-width="8"/>
  <path d="M440 250 L440 390 M560 250 L560 390" stroke="#0d9488" stroke-width="8" stroke-linecap="round"/>
'''
    elif kind == 'clutch':
        body = '''
  <circle cx="450" cy="330" r="150" fill="#f0ebff" stroke="#a855f7" stroke-width="10"/>
  <circle cx="450" cy="330" r="88" fill="#ffffff" stroke="#a855f7" stroke-width="10"/>
  <circle cx="450" cy="330" r="26" fill="#d9c8ff" stroke="#a855f7" stroke-width="8"/>
  <path d="M300 330 H600 M450 180 V480" stroke="#a855f7" stroke-width="12" stroke-linecap="round"/>
'''
    else:
        body = '''
  <circle cx="450" cy="260" r="120" fill="#dfeeff" stroke="#0d6efd" stroke-width="10"/>
  <circle cx="450" cy="260" r="64" fill="#ffffff" stroke="#0d6efd" stroke-width="8"/>
  <path d="M310 450 L590 450" stroke="#0d6efd" stroke-width="12" stroke-linecap="round"/>
  <path d="M390 430 L390 500 M510 430 L510 500" stroke="#0d6efd" stroke-width="12" stroke-linecap="round"/>
'''

    footer = f'''
  <g opacity="0.12">
    <circle cx="150" cy="150" r="70" fill="{accent}"/>
    <circle cx="720" cy="520" r="90" fill="{accent}"/>
  </g>
  <rect x="180" y="540" width="540" height="44" rx="22" fill="{accent}" opacity="0.10"/>
</svg>
'''
    return main + body + footer

for filename, (label, subtitle, accent, kind) in items.items():
    (root / filename).write_text(build_svg(label, subtitle, accent, kind), encoding='utf-8')

print(f'Generated {len(items)} product assets in {root}')
