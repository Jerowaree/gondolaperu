import os
from pptx import Presentation
from pptx.util import Inches, Pt
from pptx.dml.color import RGBColor
from pptx.enum.text import PP_ALIGN
from pptx.enum.shapes import MSO_SHAPE

def build_presentation():
    prs = Presentation()
    prs.slide_width = Inches(13.333)
    prs.slide_height = Inches(7.5)
    blank_layout = prs.slide_layouts[6]

    # Paleta oficial de GÓNDOLA PERÚ
    C_NAVY_DARK = RGBColor(0, 26, 50)      # #001A32
    C_NAVY = RGBColor(0, 56, 101)          # #003865 (Azul Marino Institucional)
    C_BLUE = RGBColor(0, 130, 214)         # #0082D6 (Azul Oceánico)
    C_BLUE_LIGHT = RGBColor(230, 242, 251) # #E6F2FB
    C_YELLOW = RGBColor(252, 184, 0)       # #FCB800 (Amarillo Solar)
    C_YELLOW_LIGHT = RGBColor(255, 248, 225) # #FFF8E1
    C_BG_PAGE = RGBColor(245, 247, 250)    # #F5F7FA
    C_WHITE = RGBColor(255, 255, 255)
    C_TEXT_MAIN = RGBColor(23, 43, 58)     # #172B3A
    C_TEXT_MUTED = RGBColor(100, 116, 139) # #64748B
    C_BORDER = RGBColor(226, 232, 240)     # #E2E8F0
    C_EMERALD = RGBColor(16, 185, 129)     # #10B981 (WhatsApp)

    logo_path = os.path.abspath("public/logos/gondolalogo.png")

    def draw_header(slide, title, section_name="LÍNEA AUTOMOTRIZ — GÓNDOLA PERÚ"):
        # Header bar background
        header_bar = slide.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(0), Inches(0), Inches(13.333), Inches(1.15))
        header_bar.fill.solid()
        header_bar.fill.fore_color.rgb = C_NAVY
        header_bar.line.color.rgb = C_NAVY

        # Accent yellow line
        accent_strip = slide.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(0), Inches(1.15), Inches(13.333), Inches(0.06))
        accent_strip.fill.solid()
        accent_strip.fill.fore_color.rgb = C_YELLOW
        accent_strip.line.color.rgb = C_YELLOW

        # Logo on header (left)
        if os.path.exists(logo_path):
            slide.shapes.add_picture(logo_path, Inches(0.8), Inches(0.12), height=Inches(0.9))

        # Title block
        tx_box = slide.shapes.add_textbox(Inches(2.1), Inches(0.12), Inches(10.4), Inches(0.95))
        tf = tx_box.text_frame
        tf.word_wrap = True
        tf.margin_left = tf.margin_top = tf.margin_right = tf.margin_bottom = 0

        p_sec = tf.paragraphs[0]
        p_sec.text = section_name.upper()
        p_sec.font.name = "Arial"
        p_sec.font.size = Pt(9.5)
        p_sec.font.bold = True
        p_sec.font.color.rgb = C_YELLOW

        p_tit = tf.add_paragraph()
        p_tit.text = title
        p_tit.font.name = "Arial"
        p_tit.font.size = Pt(19)
        p_tit.font.bold = True
        p_tit.font.color.rgb = C_WHITE

    def draw_footer(slide, current_page, total_pages=7):
        # Footer text
        tx_box = slide.shapes.add_textbox(Inches(0.8), Inches(7.08), Inches(11.733), Inches(0.35))
        tf = tx_box.text_frame
        tf.word_wrap = True
        tf.margin_left = tf.margin_top = tf.margin_right = tf.margin_bottom = 0
        p = tf.paragraphs[0]
        p.text = f"GÓNDOLA VARIEDAD Y EXPERIENCIA S.A.C.  |  Distrito Veintiséis de Octubre, Piura, Perú  |  Línea Automotriz  |  Lámina {current_page} de {total_pages}"
        p.font.name = "Arial"
        p.font.size = Pt(8.5)
        p.font.color.rgb = C_TEXT_MUTED

    # =========================================================================
    # LÁMINA 1: PORTADA CORPORATIVA (LÍNEA AUTOMOTRIZ)
    # =========================================================================
    s1 = prs.slides.add_slide(blank_layout)
    bg1 = s1.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(0), Inches(0), Inches(13.333), Inches(7.5))
    bg1.fill.solid()
    bg1.fill.fore_color.rgb = C_NAVY_DARK
    bg1.line.color.rgb = C_NAVY_DARK

    # Decorative geometric accents
    dec1 = s1.shapes.add_shape(MSO_SHAPE.RIGHT_TRIANGLE, Inches(10.2), Inches(0), Inches(3.133), Inches(7.5))
    dec1.fill.solid()
    dec1.fill.fore_color.rgb = C_NAVY
    dec1.line.color.rgb = C_NAVY
    dec1.rotation = 180

    dec_line = s1.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(0), Inches(7.35), Inches(13.333), Inches(0.15))
    dec_line.fill.solid()
    dec_line.fill.fore_color.rgb = C_YELLOW
    dec_line.line.color.rgb = C_YELLOW

    # Logo Box
    if os.path.exists(logo_path):
        logo_card = s1.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.9), Inches(1.1), Inches(2.4), Inches(2.4))
        logo_card.fill.solid()
        logo_card.fill.fore_color.rgb = C_WHITE
        logo_card.line.color.rgb = C_BLUE
        logo_card.line.width = Pt(1.5)
        s1.shapes.add_picture(logo_path, Inches(1.05), Inches(1.25), width=Inches(2.1))

    # Badge Pill
    badge1 = s1.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(3.7), Inches(1.15), Inches(4.8), Inches(0.42))
    badge1.fill.solid()
    badge1.fill.fore_color.rgb = C_BLUE
    badge1.line.color.rgb = C_YELLOW
    b1_tf = badge1.text_frame
    b1_p = b1_tf.paragraphs[0]
    b1_p.text = "LÍNEA AUTOMOTRIZ & CATÁLOGO DIGITAL"
    b1_p.font.name = "Arial"
    b1_p.font.size = Pt(11)
    b1_p.font.bold = True
    b1_p.font.color.rgb = C_WHITE
    b1_p.alignment = PP_ALIGN.CENTER

    # Title box
    tbox1 = s1.shapes.add_textbox(Inches(3.7), Inches(1.7), Inches(8.8), Inches(2.6))
    tf_t1 = tbox1.text_frame
    tf_t1.word_wrap = True
    tf_t1.margin_left = tf_t1.margin_top = tf_t1.margin_right = tf_t1.margin_bottom = 0

    p_main = tf_t1.paragraphs[0]
    p_main.text = "GÓNDOLA PERÚ"
    p_main.font.name = "Arial"
    p_main.font.size = Pt(42)
    p_main.font.bold = True
    p_main.font.color.rgb = C_WHITE

    p_sub1 = tf_t1.add_paragraph()
    p_sub1.text = "Plataforma Web y Catálogo Comercial de Repuestos Automotrices"
    p_sub1.font.name = "Arial"
    p_sub1.font.size = Pt(20)
    p_sub1.font.bold = True
    p_sub1.font.color.rgb = C_YELLOW

    p_sub2 = tf_t1.add_paragraph()
    p_sub2.text = "GÓNDOLA VARIEDAD Y EXPERIENCIA S.A.C. — Abastecimiento integral en autopartes, componentes mecánicos, lubricantes, baterías y servicios técnicos para talleres, flotas y vehículos en Piura."
    p_sub2.font.name = "Arial"
    p_sub2.font.size = Pt(12)
    p_sub2.font.color.rgb = RGBColor(220, 230, 242)

    # 3 Summary Cards at bottom
    c1_cards = [
        ("6 CATEGORÍAS AUTOMOTRICES", "Motor, Sistema de Frenos, Suspensión & Dirección, Baterías 12V, Lubricantes y Accesorios vehiculares.", C_BLUE),
        ("SERVICIOS DE TALLER MECÁNICO", "Afinamiento electrónico, cambio de fluidos, rectificación de discos y reparación preventiva en Piura.", C_YELLOW),
        ("COTIZACIÓN DIRECTA WHATSAPP", "Enlace directo con asesores de venta (+51 951 545 204) con prellenado de ficha y compatibilidad técnica.", C_EMERALD)
    ]
    for idx, (head, body, border_c) in enumerate(c1_cards):
        cx = Inches(0.9 + idx * 3.9)
        c_box = s1.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, cx, Inches(4.75), Inches(3.65), Inches(1.95))
        c_box.fill.solid()
        c_box.fill.fore_color.rgb = C_WHITE
        c_box.line.color.rgb = border_c
        c_box.line.width = Pt(2)
        ctf = c_box.text_frame
        ctf.word_wrap = True
        ctf.margin_left = ctf.margin_right = ctf.margin_top = ctf.margin_bottom = Inches(0.2)
        
        cp1 = ctf.paragraphs[0]
        cp1.text = head
        cp1.font.name = "Arial"
        cp1.font.size = Pt(11.5)
        cp1.font.bold = True
        cp1.font.color.rgb = C_NAVY

        cp2 = ctf.add_paragraph()
        cp2.text = body
        cp2.font.name = "Arial"
        cp2.font.size = Pt(9.5)
        cp2.font.color.rgb = C_TEXT_MAIN

    # =========================================================================
    # LÁMINA 2: PROPUESTA DE VALOR Y MODELO COMERCIAL
    # =========================================================================
    s2 = prs.slides.add_slide(blank_layout)
    bg2 = s2.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(0), Inches(0), Inches(13.333), Inches(7.5))
    bg2.fill.solid()
    bg2.fill.fore_color.rgb = C_BG_PAGE
    bg2.line.color.rgb = C_BG_PAGE

    draw_header(s2, "1. Enfoque Comercial de la Línea Automotriz en Piura")
    draw_footer(s2, 2)

    # Left Container: Perfil y Propósito
    b2_left = s2.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.8), Inches(1.45), Inches(4.2), Inches(5.35))
    b2_left.fill.solid()
    b2_left.fill.fore_color.rgb = C_WHITE
    b2_left.line.color.rgb = C_BORDER
    b2_left.line.width = Pt(1)
    tf2_l = b2_left.text_frame
    tf2_l.word_wrap = True
    tf2_l.margin_left = tf2_l.margin_right = tf2_l.margin_top = tf2_l.margin_bottom = Inches(0.28)

    p = tf2_l.paragraphs[0]
    p.text = "GÓNDOLA VARIEDAD Y EXPERIENCIA S.A.C."
    p.font.name = "Arial"
    p.font.size = Pt(13)
    p.font.bold = True
    p.font.color.rgb = C_NAVY

    p = tf2_l.add_paragraph()
    p.text = "Nombre comercial: GÓNDOLA PERÚ\nSede: Distrito Veintiséis de Octubre, Piura, Perú."
    p.font.name = "Arial"
    p.font.size = Pt(10)
    p.font.color.rgb = C_TEXT_MUTED

    p = tf2_l.add_paragraph()
    p.text = "\nDISTINCIÓN DE NEGOCIO CRÍTICA:"
    p.font.name = "Arial"
    p.font.size = Pt(10.5)
    p.font.bold = True
    p.font.color.rgb = C_NAVY

    p = tf2_l.add_paragraph()
    p.text = "GÓNDOLA PERÚ no comercializa estanterías ni góndolas de supermercado. Es una distribuidora automotriz consolidada con taller mecánico propio, especializada en repuestos mecánicos, piezas de recambio garantizadas y servicio técnico vehicular."
    p.font.name = "Arial"
    p.font.size = Pt(9.5)
    p.font.color.rgb = C_TEXT_MAIN

    p = tf2_l.add_paragraph()
    p.text = "\nVENTAJA COMPETITIVA EN PIURA:"
    p.font.name = "Arial"
    p.font.size = Pt(10.5)
    p.font.bold = True
    p.font.color.rgb = C_NAVY

    p = tf2_l.add_paragraph()
    p.text = "• Stock físico en tienda para entrega inmediata.\n• Asesoría técnica por especialistas mecánicos.\n• Validación de compatibilidad antes de la venta.\n• Precios mayoristas para talleres mecánicos y flotas."
    p.font.name = "Arial"
    p.font.size = Pt(9.5)
    p.font.color.rgb = C_TEXT_MAIN

    # Right Container: 3 Audiencias Objetivo
    audiences = [
        ("TALLERES MECÁNICOS Y MULTIMARCA", 
         "Abastecimiento continuo de repuestos para mantenimiento y reparaciones.",
         "• Repuestos internos de motor, fajas, filtros y empaquetaduras.\n• Pastillas cerámicas, discos ventilados y bombas de freno.\n• Amortiguadores, rótulas, terminales de dirección y bujes.\n• Cotizaciones ágiles por WhatsApp para cotizar presupuestos a sus clientes.",
         C_NAVY),
        ("EMPRESAS CON FLOTAS Y TRANSPORTE", 
         "Suministro mayorista para camionetas, furgonetas y vehículos comerciales.",
         "• Baterías 12V reforzadas con tecnología calcio-plata de alta duración.\n• Aceites sintéticos y semisintéticos para trabajo pesado bajo calor piurano.\n• Lotes de mantenimiento preventivo y suministros programados.\n• Facturación comercial formal de GÓNDOLA S.A.C.",
         C_BLUE),
        ("CONDUCTORES Y CLIENTES PARTICULARES", 
         "Compra directa de repuestos y accesorios con garantía comprobada.",
         "• Accesorios vehiculares, plumillas limpiaparabrisas, focos LED y alarmas.\n• Consulta asistida por WhatsApp para identificar el repuesto por placa o modelo.\n• Opción de instalación y servicio técnico en el taller mecánico propio de Piura.",
         C_YELLOW)
    ]

    for idx, (a_title, a_sub, a_bullets, a_color) in enumerate(audiences):
        ay = Inches(1.45 + idx * 1.83)
        a_card = s2.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(5.2), ay, Inches(7.333), Inches(1.68))
        a_card.fill.solid()
        a_card.fill.fore_color.rgb = C_WHITE
        a_card.line.color.rgb = a_color
        a_card.line.width = Pt(1.5)
        atf = a_card.text_frame
        atf.word_wrap = True
        atf.margin_left = atf.margin_right = atf.margin_top = atf.margin_bottom = Inches(0.2)
        
        ap1 = atf.paragraphs[0]
        ap1.text = a_title
        ap1.font.name = "Arial"
        ap1.font.size = Pt(11)
        ap1.font.bold = True
        ap1.font.color.rgb = C_NAVY

        ap2 = atf.add_paragraph()
        ap2.text = f"{a_sub}\n{a_bullets}"
        ap2.font.name = "Arial"
        ap2.font.size = Pt(9)
        ap2.font.color.rgb = C_TEXT_MAIN

    # =========================================================================
    # LÁMINA 3: LAS 6 CATEGORÍAS DE LA LÍNEA AUTOMOTRIZ
    # =========================================================================
    s3 = prs.slides.add_slide(blank_layout)
    bg3 = s3.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(0), Inches(0), Inches(13.333), Inches(7.5))
    bg3.fill.solid()
    bg3.fill.fore_color.rgb = C_BG_PAGE
    bg3.line.color.rgb = C_BG_PAGE

    draw_header(s3, "2. Estructura del Catálogo: Las 6 Categorías Automotrices")
    draw_footer(s3, 3)

    auto_cats = [
        ("1. REPUESTOS DE MOTOR", "slug: repuestos-motor",
         "Componentes mecánicos internos y externos:",
         "• Pistones, anillos y metales de biela.\n• Empaquetaduras de culata y retenes.\n• Fajas de distribución y accesorios.\n• Válvulas de admisión y escape.\n• Filtros de aceite, aire y combustible.",
         C_NAVY),
        ("2. SISTEMA DE FRENOS", "slug: sistema-frenos",
         "Seguridad y control de frenado integral:",
         "• Pastillas cerámicas de bajo desvanecimiento térmico.\n• Discos de freno ventilados y ranurados.\n• Tambores y zapatas para eje posterior.\n• Bombas de freno y cilindros maestros.\n• Líquidos de freno DOT 3 y DOT 4.",
         C_BLUE),
        ("3. SUSPENSIÓN Y DIRECCIÓN", "slug: suspension-direccion",
         "Estabilidad y confort de marcha:",
         "• Amortiguadores hidráulicos y presurizados a gas.\n• Terminales de dirección y barras estabilizadoras.\n• Rótulas de suspensión y trapecios completos.\n• Bujes de jebe y poliuretano para trabajo pesado.\n• Cremalleras mecánicas e hidráulicas.",
         C_NAVY),
        ("4. SISTEMA ELÉCTRICO Y BATERÍAS", "slug: sistema-electrico-baterias",
         "Arranque confiable y potencia eléctrica:",
         "• Baterías 12V 13 y 15 placas libre mantenimiento.\n• Tecnología Calcio-Plata resistente al calor de Piura.\n• Alternadores y arrancadores de alto rendimiento.\n• Bujías de iridio y bobinas de encendido.\n• Focos LED y fusibles automotrices.",
         C_YELLOW),
        ("5. LUBRICANTES Y FLUIDOS", "slug: lubricantes-fluidos",
         "Protección y viscosidad para motores:",
         "• Aceites 100% sintéticos (5W-30, 5W-40).\n• Aceites semisintéticos y minerales (10W-40, 20W-50).\n• Refrigerantes anticorrosivos formulados al 50/50.\n• Grasas de litio para chasis y rodamientos.\n• Fluidos para transmisión manual y automática.",
         C_NAVY),
        ("6. ACCESORIOS VEHICULARES", "slug: accesorios-vehiculares",
         "Equipamiento y confort del conductor:",
         "• Plumas limpiaparabrisas de silicona prémium.\n• Espejos retrovisores y cobertores vehiculares.\n• Compresores de aire portátiles 12V.\n• Alarmas, trabavolantes y seguros de rueda.\n• Cables pasacorriente reforzados para batería.",
         C_BLUE)
    ]

    for idx, (c_name, c_slug, c_intro, c_list, c_col) in enumerate(auto_cats):
        col = idx % 3
        row = idx // 3
        cx = Inches(0.8 + col * 3.95)
        cy = Inches(1.45 + row * 2.7)

        card = s3.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, cx, cy, Inches(3.8), Inches(2.55))
        card.fill.solid()
        card.fill.fore_color.rgb = C_WHITE
        card.line.color.rgb = c_col
        card.line.width = Pt(1.5)
        ctf = card.text_frame
        ctf.word_wrap = True
        ctf.margin_left = ctf.margin_right = ctf.margin_top = ctf.margin_bottom = Inches(0.2)

        cp1 = ctf.paragraphs[0]
        cp1.text = c_name
        cp1.font.name = "Arial"
        cp1.font.size = Pt(11)
        cp1.font.bold = True
        cp1.font.color.rgb = C_NAVY

        cp2 = ctf.add_paragraph()
        cp2.text = c_slug
        cp2.font.name = "Arial"
        cp2.font.size = Pt(8.5)
        cp2.font.color.rgb = C_TEXT_MUTED

        cp3 = ctf.add_paragraph()
        cp3.text = f"{c_intro}\n{c_list}"
        cp3.font.name = "Arial"
        cp3.font.size = Pt(8.5)
        cp3.font.color.rgb = C_TEXT_MAIN

    # =========================================================================
    # LÁMINA 4: LÍNEA COMPLEMENTARIA — SERVICIOS DE TALLER MECÁNICO
    # =========================================================================
    s4 = prs.slides.add_slide(blank_layout)
    bg4 = s4.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(0), Inches(0), Inches(13.333), Inches(7.5))
    bg4.fill.solid()
    bg4.fill.fore_color.rgb = C_BG_PAGE
    bg4.line.color.rgb = C_BG_PAGE

    draw_header(s4, "3. Servicios Técnicos de Taller y Mantenimiento Mecánico")
    draw_footer(s4, 4)

    services_data = [
        ("DIAGNÓSTICO Y AFINAMIENTO ELECTRÓNICO", 
         "Inspección computarizada de sensores, inyección y parámetros del motor.",
         "• Escaneo de códigos de falla OBD2 con informe técnico.\n• Limpieza de inyectores por ultrasonido y prueba en banco.\n• Calibración del cuerpo de aceleración y bujías.\n• Medición de compresión de cilindros y presión de combustible.",
         C_NAVY),
        ("MANTENIMIENTO PREVENTIVO Y FLUIDOS", 
         "Servicio integral por kilometraje para extender la vida del motor.",
         "• Cambio de aceite de motor y filtro de aceite garantizado.\n• Reemplazo de filtro de aire, polen y combustible.\n• Drenaje y recambio de líquido refrigerante anticorrosivo.\n• Revisión de niveles de transmisión y dirección hidráulica.",
         C_BLUE),
        ("SISTEMA DE FRENOS Y RECTIFICACIÓN", 
         "Mantenimiento correctivo para máxima seguridad de frenado.",
         "• Inspección de espesor y cambio de pastillas cerámicas.\n• Rectificación de discos ventilados y tambores posteriores.\n• Purga de líquido de frenos con equipos a presión.\n• Verificación de caliper, pistones, zapatas y freno de mano.",
         C_YELLOW),
        ("REPARACIÓN DE SUSPENSIÓN Y DIRECCIÓN", 
         "Corrección de ruidos, juego y vibraciones en pista y trocha.",
         "• Diagnóstico de amortiguadores en prueba de rebote.\n• Cambio de rótulas, terminales de dirección y bieletas.\n• Reemplazo de bujes de trapecio y soportes de motor.\n• Alineamiento vehicular y balanceo de ruedas en taller.",
         C_NAVY)
    ]

    for idx, (s_title, s_sub, s_items, s_col) in enumerate(services_data):
        sx = Inches(0.8 + idx * 2.95)
        s_box = s4.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, sx, Inches(1.45), Inches(2.8), Inches(3.6))
        s_box.fill.solid()
        s_box.fill.fore_color.rgb = C_WHITE
        s_box.line.color.rgb = s_col
        s_box.line.width = Pt(1.5)
        stf = s_box.text_frame
        stf.word_wrap = True
        stf.margin_left = stf.margin_right = stf.margin_top = stf.margin_bottom = Inches(0.2)

        sp1 = stf.paragraphs[0]
        sp1.text = s_title
        sp1.font.name = "Arial"
        sp1.font.size = Pt(11)
        sp1.font.bold = True
        sp1.font.color.rgb = C_NAVY

        sp2 = stf.add_paragraph()
        sp2.text = s_sub
        sp2.font.name = "Arial"
        sp2.font.size = Pt(9)
        sp2.font.color.rgb = C_TEXT_MUTED

        sp3 = stf.add_paragraph()
        sp3.text = f"\n{s_items}"
        sp3.font.name = "Arial"
        sp3.font.size = Pt(8.5)
        sp3.font.color.rgb = C_TEXT_MAIN

    # Bottom Banner on Services Slide
    s_banner = s4.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.8), Inches(5.25), Inches(11.733), Inches(1.55))
    s_banner.fill.solid()
    s_banner.fill.fore_color.rgb = C_NAVY
    s_banner.line.color.rgb = C_YELLOW
    s_banner.line.width = Pt(1.5)
    sbtf = s_banner.text_frame
    sbtf.word_wrap = True
    sbtf.margin_left = sbtf.margin_right = sbtf.margin_top = sbtf.margin_bottom = Inches(0.22)

    sbp1 = sbtf.paragraphs[0]
    sbp1.text = "INTEGRACIÓN ENTRE CATÁLOGO DIGITAL Y TALLER FÍSICO EN PIURA"
    sbp1.font.name = "Arial"
    sbp1.font.size = Pt(11.5)
    sbp1.font.bold = True
    sbp1.font.color.rgb = C_YELLOW

    sbp2 = sbtf.add_paragraph()
    sbp2.text = "Cada tarjeta de servicio en la web cuenta con un botón directo a WhatsApp. El cliente no solo compra el repuesto; puede agendar simultáneamente la instalación y mano de obra calificada en el taller de GÓNDOLA S.A.C., garantizando un ciclo completo de satisfacción y garantía técnica en Piura."
    sbp2.font.name = "Arial"
    sbp2.font.size = Pt(9.5)
    sbp2.font.color.rgb = C_WHITE

    # =========================================================================
    # LÁMINA 5: EXPERIENCIA DE USUARIO Y NAVEGACIÓN EN LA WEB
    # =========================================================================
    s5 = prs.slides.add_slide(blank_layout)
    bg5 = s5.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(0), Inches(0), Inches(13.333), Inches(7.5))
    bg5.fill.solid()
    bg5.fill.fore_color.rgb = C_BG_PAGE
    bg5.line.color.rgb = C_BG_PAGE

    draw_header(s5, "4. Experiencia de Usuario, Búsqueda y Fichas de Producto")
    draw_footer(s5, 5)

    ux_blocks = [
        ("CABECERA Y BUSCADOR INTELIGENTE", 
         "Exploración rápida por repuesto, código o marca vehicular",
         [
             "Buscador central con filtro automático por categoría automotriz.",
             "Reconocimiento de términos comunes (ej: pastillas, batería, amortiguador).",
             "Acceso rápido a las 6 categorías desde el menú desplegable.",
             "Botón visible permanente de cotización vía WhatsApp."
         ], C_BLUE),
        ("TARJETAS DE PRODUCTO (STACKZERO)", 
         "Diseño comercial adaptado para alta densidad de información",
         [
             "Fotografía del repuesto con relación 4:3 y efecto zoom al pasar el cursor.",
             "Badge distintivo 'Línea Automotriz' en azul marino corporativo.",
             "Especificaciones técnicas clave visibles (ej: 12V 13 placas, eje delantero).",
             "Doble acción directa: botón 'Ver Ficha' y botón verde 'Cotizar'."
         ], C_YELLOW),
        ("FICHA TÉCNICA DETALLADA (/productos/[slug])", 
         "Página de detalle para validación de compatibilidad mecánica",
         [
             "Galería de imágenes con visor de fotos y zoom interactivo.",
             "Tabla completa de especificaciones: amperaje, CCA, posición, material.",
             "Badge de stock y garantía comercial de fábrica (12 meses en baterías).",
             "Módulo de repuestos relacionados de la misma categoría de motor o freno."
         ], C_NAVY),
        ("DISEÑO 100% RESPONSIVE PARA SMARTPHONES", 
         "Optimizado para mecánicos y clientes que consultan desde el taller",
         [
             "Menú lateral drawer con apertura táctil suave y acceso a categorías.",
             "Botón flotante de WhatsApp accesible en todo momento en la esquina inferior.",
             "Carga instantánea de imágenes con tamaños optimizados para datos móviles.",
             "Tipografía y botones con padding táctil amplio para evitar clics erróneos."
         ], C_EMERALD)
    ]

    for idx, (u_title, u_sub, u_items, u_col) in enumerate(ux_blocks):
        col_x = Inches(0.8 + (idx % 2) * 5.95)
        row_y = Inches(1.45 + (idx // 2) * 2.7)
        u_card = s5.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, col_x, row_y, Inches(5.75), Inches(2.55))
        u_card.fill.solid()
        u_card.fill.fore_color.rgb = C_WHITE
        u_card.line.color.rgb = u_col
        u_card.line.width = Pt(1.5)
        utf = u_card.text_frame
        utf.word_wrap = True
        utf.margin_left = utf.margin_right = utf.margin_top = utf.margin_bottom = Inches(0.22)

        up1 = utf.paragraphs[0]
        up1.text = u_title
        up1.font.name = "Arial"
        up1.font.size = Pt(11.5)
        up1.font.bold = True
        up1.font.color.rgb = C_NAVY

        up2 = utf.add_paragraph()
        up2.text = u_sub
        up2.font.name = "Arial"
        up2.font.size = Pt(9.5)
        up2.font.color.rgb = C_TEXT_MUTED

        for it in u_items:
            u_p = utf.add_paragraph()
            u_p.text = f"• {it}"
            u_p.font.name = "Arial"
            u_p.font.size = Pt(9)
            u_p.font.color.rgb = C_TEXT_MAIN

    # =========================================================================
    # LÁMINA 6: FLUJO DE COTIZACIÓN COMERCIAL POR WHATSAPP
    # =========================================================================
    s6 = prs.slides.add_slide(blank_layout)
    bg6 = s6.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(0), Inches(0), Inches(13.333), Inches(7.5))
    bg6.fill.solid()
    bg6.fill.fore_color.rgb = C_BG_PAGE
    bg6.line.color.rgb = C_BG_PAGE

    draw_header(s6, "5. Flujo de Cotización Directa por WhatsApp")
    draw_footer(s6, 6)

    # 4 Steps of Conversion Flow
    flow_steps = [
        ("PASO 1", "Búsqueda del Repuesto", 
         "El cliente (taller, flota o conductor) busca en la web la pieza que necesita o navega por las 6 categorías automotrices.", C_NAVY),
        ("PASO 2", "Clic en 'Cotizar'", 
         "Presiona el botón de WhatsApp presente en el header, en la tarjeta del producto o en la ficha técnica detallada.", C_BLUE),
        ("PASO 3", "Mensaje Prellenado", 
         "La web genera automáticamente un enlace de WhatsApp con el nombre exacto del repuesto (ej: 'Hola GÓNDOLA PERÚ, deseo cotizar Batería 12V 13 Placas').", C_YELLOW),
        ("PASO 4", "Atención en Piura", 
         "El asesor comercial de GÓNDOLA S.A.C. (+51 951 545 204) valida modelo y chasis, confirma stock, cotiza precio y coordina despacho o recojo en tienda.", C_EMERALD)
    ]

    for idx, (num, stitle, sdesc, scol) in enumerate(flow_steps):
        fx = Inches(0.8 + idx * 2.95)
        f_box = s6.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, fx, Inches(1.45), Inches(2.8), Inches(3.3))
        f_box.fill.solid()
        f_box.fill.fore_color.rgb = C_WHITE
        f_box.line.color.rgb = scol
        f_box.line.width = Pt(2)
        ftf = f_box.text_frame
        ftf.word_wrap = True
        ftf.margin_left = ftf.margin_right = ftf.margin_top = ftf.margin_bottom = Inches(0.2)

        fp1 = ftf.paragraphs[0]
        fp1.text = num
        fp1.font.name = "Arial"
        fp1.font.size = Pt(11)
        fp1.font.bold = True
        fp1.font.color.rgb = scol

        fp2 = ftf.add_paragraph()
        fp2.text = stitle
        fp2.font.name = "Arial"
        fp2.font.size = Pt(12)
        fp2.font.bold = True
        fp2.font.color.rgb = C_NAVY

        fp3 = ftf.add_paragraph()
        fp3.text = f"\n{sdesc}"
        fp3.font.name = "Arial"
        fp3.font.size = Pt(9)
        fp3.font.color.rgb = C_TEXT_MAIN

    # Bottom Callout: Por qué no hay carrito ni pasarela de pago
    c_why = s6.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.8), Inches(4.95), Inches(11.733), Inches(1.9))
    c_why.fill.solid()
    c_why.fill.fore_color.rgb = C_NAVY
    c_why.line.color.rgb = C_YELLOW
    c_why.line.width = Pt(1.5)
    cw_tf = c_why.text_frame
    cw_tf.word_wrap = True
    cw_tf.margin_left = cw_tf.margin_right = cw_tf.margin_top = cw_tf.margin_bottom = Inches(0.22)

    cwp1 = cw_tf.paragraphs[0]
    cwp1.text = "¿POR QUÉ EL CATÁLOGO AUTOMOTRIZ OPERA CON COTIZACIÓN POR WHATSAPP?"
    cwp1.font.name = "Arial"
    cwp1.font.size = Pt(11.5)
    cwp1.font.bold = True
    cwp1.font.color.rgb = C_YELLOW

    cwp2 = cw_tf.add_paragraph()
    cwp2.text = "1. Validación técnica imprescindible: En repuestos de motor, frenos y suspensión es crucial confirmar año, motorización y número de pieza para evitar despachos incompatibles.\n2. Negociación por volumen y precios a talleres: Permite otorgar tarifas preferenciales a mecánicos independientes y empresas de transporte.\n3. Coordinación de recojo en tienda o taller: Agiliza la entrega inmediata en el distrito Veintiséis de Octubre o envío a toda la región Piura.\n4. Experiencia sin fricción: El cliente no necesita crear cuentas ni ingresar tarjetas bancarias en línea."
    cwp2.font.name = "Arial"
    cwp2.font.size = Pt(9.5)
    cwp2.font.color.rgb = C_WHITE

    # =========================================================================
    # LÁMINA 7: ARQUITECTURA Y STACK TECNOLÓGICO (100% VISIBLE Y LLENO)
    # =========================================================================
    s7 = prs.slides.add_slide(blank_layout)
    bg7 = s7.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(0), Inches(0), Inches(13.333), Inches(7.5))
    bg7.fill.solid()
    bg7.fill.fore_color.rgb = C_BG_PAGE
    bg7.line.color.rgb = C_BG_PAGE

    draw_header(s7, "6. Stack Tecnológico, Rendimiento y Escalabilidad")
    draw_footer(s7, 7)

    tech_sections = [
        ("CORE TECNOLÓGICO FRONTEND", 
         "Tecnologías modernas de alto desempeño",
         [
             "React 19: Biblioteca líder de interfaz declarativa y modular.",
             "TypeScript: Tipado estático estricto que elimina errores de ejecución.",
             "Vite: Entorno de desarrollo ultrarrápido y compilador de producción en ~1.3 segundos.",
             "Tailwind CSS v4: Framework utilitario con sistema de diseño basado en variables CSS corporativas.",
             "React Router DOM: Enrutamiento SPA fluido con URLs amigables (/productos, /categorias)."
         ], C_BLUE),
        ("COMPONENTES Y EXPERIENCIA VISUAL", 
         "Diseño comercial robusto y adaptativo",
         [
             "Patrones Stackzero Commerce UI: Product Cards y Banners comerciales de nivel industrial.",
             "Shadcn/ui: Primitivos accesibles (Button, Badge, Card, Tabs, Separator) estilizados con la marca.",
             "Lucide React & React Icons: Iconografía técnica automotriz y botón oficial de WhatsApp.",
             "Sistema Anti-Imágenes Rotas: Manejador onError con fallback SVG corporativo automático.",
             "Carga diferida (Lazy loading): Optimización de fotografías para navegación móvil rápida."
         ], C_NAVY),
        ("ARQUITECTURA LISTA PARA ESCALAR", 
         "Diseñado para incorporar backend y administración",
         [
             "Capa de datos desacoplada: Modelos y catálogos aislados en /data y /lib listos para conectar a APIs.",
             "Transición transparente a Backend: Podrá conectarse a base de datos (PostgreSQL/Node) sin reescribir la UI.",
             "Preparado para Panel Administrativo: Listo para añadir módulo de gestión de stock, precios y promociones.",
             "Escalabilidad de Catálogo: Diseñado para soportar miles de SKUs con paginación y filtros facetados.",
             "Arquitectura B2B/Retail: Permite activar a futuro carrito de pedidos o facturación electrónica si se requiere."
         ], C_YELLOW)
    ]

    for idx, (t_title, t_sub, t_items, t_border) in enumerate(tech_sections):
        tx = Inches(0.8 + idx * 3.95)
        t_card = s7.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, tx, Inches(1.45), Inches(3.8), Inches(5.35))
        t_card.fill.solid()
        t_card.fill.fore_color.rgb = C_WHITE
        t_card.line.color.rgb = t_border
        t_card.line.width = Pt(1.5)
        ttf = t_card.text_frame
        ttf.word_wrap = True
        ttf.margin_left = ttf.margin_right = ttf.margin_top = ttf.margin_bottom = Inches(0.22)

        tp1 = ttf.paragraphs[0]
        tp1.text = t_title
        tp1.font.name = "Arial"
        tp1.font.size = Pt(11.5)
        tp1.font.bold = True
        tp1.font.color.rgb = C_NAVY

        tp2 = ttf.add_paragraph()
        tp2.text = t_sub
        tp2.font.name = "Arial"
        tp2.font.size = Pt(9.5)
        tp2.font.color.rgb = C_TEXT_MUTED

        for it in t_items:
            tp = ttf.add_paragraph()
            tp.text = f"• {it}"
            tp.font.name = "Arial"
            tp.font.size = Pt(9)
            tp.font.color.rgb = C_TEXT_MAIN

    # Guardar en raíz del workspace
    output_path = os.path.abspath("Gondola_Peru_Funcionamiento_Web.pptx")
    prs.save(output_path)
    print(f"Presentation saved successfully to: {output_path}")

    # Guardar copia en artifact directory
    artifact_dir = r"C:\Users\DAVID\.gemini\antigravity\brain\f449a9b6-67b5-4a2d-8083-dc141208d00c"
    if os.path.exists(artifact_dir):
        artifact_pptx = os.path.join(artifact_dir, "Gondola_Peru_Funcionamiento_Web.pptx")
        prs.save(artifact_pptx)
        print(f"Artifact copy saved to: {artifact_pptx}")

if __name__ == "__main__":
    build_presentation()
