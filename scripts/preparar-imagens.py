"""
Gera as imagens WebP do site (public/img) a partir das fotos do cardápio da casa.

Origem: as fotos vêm do cardápio da Smoked Burger no iFood (capturas enviadas pelo
cliente, ~270 px). Elas foram recortadas e ampliadas 4x com super-resolução antes
de passar por este script. Quando a casa enviar os originais em alta resolução,
basta colocá-los na pasta de entrada com os mesmos nomes e rodar de novo.

Uso:
    python3 scripts/preparar-imagens.py <pasta-com-pngs-1072px> public/img
"""

import sys
from pathlib import Path

from PIL import Image, ImageFilter

QUALIDADE = 80

# Fotos quadradas usadas no cardápio, no hero e nas ofertas.
QUADRADAS = [
    'mexicano', 'duo-meat', 'tres-onions', 'churras-salad', 'italianinho',
    'cheddar-bacon', 'pcq', 'mini-burgers', 'festival',
]
LARGURAS = [480, 768, 1072]

# Recortes da galeria: (nome, origem, caixa relativa x0, y0, x1, y1, larguras)
RECORTES = [
    ('galeria-combo', 'combo', (0.0, 0.08, 1.0, 0.83), [640, 1072]),
    ('galeria-onion-rings', 'onion-rings', (0.125, 0.0, 0.875, 1.0), [480, 804]),
    ('galeria-mexicano', 'mexicano', (0.15, 0.0, 0.85, 0.78), [480, 750]),
    ('galeria-batata', 'batata-500', (0.0, 0.0, 1.0, 1.0), [480, 1072]),
    ('galeria-kids', 'smoked-kids', (0.0, 0.16, 1.0, 0.91), [640, 1072]),
]


def salvar(img: Image.Image, destino: Path, largura: int) -> None:
    if img.width != largura:
        altura = round(img.height * largura / img.width)
        img = img.resize((largura, altura), Image.LANCZOS)
        img = img.filter(ImageFilter.UnsharpMask(radius=0.8, percent=40, threshold=2))
    img.save(destino, 'WEBP', quality=QUALIDADE, method=6)


def main(entrada: Path, saida: Path) -> None:
    saida.mkdir(parents=True, exist_ok=True)

    for nome in QUADRADAS:
        img = Image.open(entrada / f'{nome}.png').convert('RGB')
        for w in LARGURAS:
            salvar(img, saida / f'{nome}-{w}.webp', w)

    for nome, origem, (x0, y0, x1, y1), larguras in RECORTES:
        img = Image.open(entrada / f'{origem}.png').convert('RGB')
        W, H = img.size
        recorte = img.crop((round(x0 * W), round(y0 * H), round(x1 * W), round(y1 * H)))
        for w in larguras:
            salvar(recorte, saida / f'{nome}-{w}.webp', w)

    # Imagem de compartilhamento (Open Graph), 1200x630.
    og = Image.open(entrada / 'mini-burgers.png').convert('RGB')
    W, H = og.size
    altura = round(W * 630 / 1200)
    topo = round((H - altura) * 0.55)
    og = og.crop((0, topo, W, topo + altura)).resize((1200, 630), Image.LANCZOS)
    og.save(saida.parent / 'og-image.jpg', 'JPEG', quality=84, optimize=True, progressive=True)


if __name__ == '__main__':
    main(Path(sys.argv[1]), Path(sys.argv[2]))
