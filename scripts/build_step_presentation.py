import os
import shutil
from pptx import Presentation
from pptx.util import Inches, Pt
from pptx.dml.color import RGBColor
from pptx.enum.text import PP_ALIGN, MSO_ANCHOR
from pptx.enum.shapes import MSO_SHAPE

def build_presentation():
    prs = Presentation()
    prs.slide_width = Inches(13.333)
    prs.slide_height = Inches(7.5)
    blank_layout = prs.slide_layouts[6]

    # Paleta oficial de GÓNDOLA PERÚ
    C_NAVY_DARK = RGBColor(0, 26, 50)        # #001A32
    C_NAVY = RGBColor(0, 56, 101)            # #003865 (Azul Marino Institucional)
    C_BLUE = RGBColor(0, 130, 214)           # #0082D6 (Azul Océano)
    C_BLUE_LIGHT = RGBColor(230, 242, 251)   # #E6F2FB
    C_YELLOW = RGBColor(252, 184, 0)         # #FCB800 (Amarillo Solar)
    C_YELLOW_LIGHT = RGBColor(255, 248, 225) # #FFF8E1
    C_BG_PAGE = RGBColor(248, 250, 252)      # #F8FAFC
    C_WHITE = RGBColor(255, 255, 255)
    C_TEXT_MAIN = RGBColor(23, 43, 58)       # #172B3A
    C_TEXT_MUTED = RGBColor(100, 116, 139)   # #64748B
    C_BORDER = RGBColor(226, 232, 240)       # #E2E8F0
    C_EMERALD = RGBColor(16, 185, 129)       # #10B981 (WhatsApp)
    C_CARD_BG = RGBColor(255, 255, 255)

    base_dir = os.path.abspath(".")
    screenshots_dir = os.path.join(base_dir, "scripts", "screenshots")
    logo_path = os.path.join(base_dir, "public", "logos", "gondolalogo.png")

    TOTAL_PAGES = 10

    def draw_header(slide, title, step_tag="GUÍA PASO A PASO"):
        # Header bar
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
            slide.shapes.add_picture(logo_path, Inches(0.7), Inches(0.12), height=Inches(0.9))

        # Title block
        tx_box = slide.shapes.add_textbox(Inches(2.0), Inches(0.12), Inches(10.6), Inches(0.95))
        tf = tx_box.text_frame
        tf.word_wrap = True
        tf.margin_left = tf.margin_top = tf.margin_right = tf.margin_bottom = 0

        p_sec = tf.paragraphs[0]
        p_sec.text = f"GÓNDOLA PERÚ  •  LÍNEA AUTOMOTRIZ  •  {step_tag.upper()}"
        p_sec.font.name = "Arial"
        p_sec.font.size = Pt(9.5)
        p_sec.font.bold = True
        p_sec.font.color.rgb = C_YELLOW

        p_tit = tf.add_paragraph()
        p_tit.text = title
        p_tit.font.name = "Arial"
        p_tit.font.size = Pt(18)
        p_tit.font.bold = True
        p_tit.font.color.rgb = C_WHITE

    def draw_footer(slide, current_page):
        tx_box = slide.shapes.add_textbox(Inches(0.8), Inches(7.12), Inches(11.733), Inches(0.32))
        tf = tx_box.text_frame
        tf.word_wrap = True
        tf.margin_left = tf.margin_top = tf.margin_right = tf.margin_bottom = 0
        p = tf.paragraphs[0]
        p.text = f"GÓNDOLA VARIEDAD Y EXPERIENCIA S.A.C.  |  RUC: 20610998399  |  Piura, Perú  |  Lámina {current_page} de {TOTAL_PAGES}"
        p.font.name = "Arial"
        p.font.size = Pt(8.5)
        p.font.color.rgb = C_TEXT_MUTED

    def draw_step_slide(slide_num, title, step_tag, subtitle, points, benefit_title, benefit_desc, img_filename):
        s = prs.slides.add_slide(blank_layout)
        # Background
        bg = s.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(0), Inches(0), Inches(13.333), Inches(7.5))
        bg.fill.solid()
        bg.fill.fore_color.rgb = C_BG_PAGE
        bg.line.color.rgb = C_BG_PAGE

        draw_header(s, title, step_tag)
        draw_footer(s, slide_num)

        # ── LEFT COLUMN: Text and explanations (width 4.9 in) ──
        left_card = s.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.7), Inches(1.45), Inches(4.9), Inches(5.45))
        left_card.fill.solid()
        left_card.fill.fore_color.rgb = C_CARD_BG
        left_card.line.color.rgb = C_BORDER
        left_card.line.width = Pt(1)

        tx_box = s.shapes.add_textbox(Inches(0.95), Inches(1.65), Inches(4.4), Inches(3.6))
        tf = tx_box.text_frame
        tf.word_wrap = True
        tf.margin_left = tf.margin_top = tf.margin_right = tf.margin_bottom = 0

        # Subtitle
        p_sub = tf.paragraphs[0]
        p_sub.text = subtitle
        p_sub.font.name = "Arial"
        p_sub.font.size = Pt(12)
        p_sub.font.bold = True
        p_sub.font.color.rgb = C_NAVY
        p_sub.space_after = Pt(12)

        # Points
        for p_title, p_desc in points:
            p_item = tf.add_paragraph()
            p_item.text = f"• {p_title}: "
            p_item.font.name = "Arial"
            p_item.font.size = Pt(10)
            p_item.font.bold = True
            p_item.font.color.rgb = C_TEXT_MAIN

            run = p_item.add_run()
            run.text = p_desc
            run.font.name = "Arial"
            run.font.size = Pt(10)
            run.font.bold = False
            run.font.color.rgb = C_TEXT_MUTED
            p_item.space_after = Pt(9)

        # Benefit Box (bottom of left column)
        ben_box = s.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.95), Inches(5.5), Inches(4.4), Inches(1.2))
        ben_box.fill.solid()
        ben_box.fill.fore_color.rgb = C_BLUE_LIGHT
        ben_box.line.color.rgb = C_BLUE
        ben_box.line.width = Pt(1.5)

        tx_ben = s.shapes.add_textbox(Inches(1.1), Inches(5.58), Inches(4.1), Inches(1.05))
        tf_b = tx_ben.text_frame
        tf_b.word_wrap = True
        tf_b.margin_left = tf_b.margin_top = tf_b.margin_right = tf_b.margin_bottom = 0

        p_bt = tf_b.paragraphs[0]
        p_bt.text = f"★ {benefit_title.upper()}"
        p_bt.font.name = "Arial"
        p_bt.font.size = Pt(9.5)
        p_bt.font.bold = True
        p_bt.font.color.rgb = C_NAVY
        p_bt.space_after = Pt(3)

        p_bd = tf_b.add_paragraph()
        p_bd.text = benefit_desc
        p_bd.font.name = "Arial"
        p_bd.font.size = Pt(9.2)
        p_bd.font.color.rgb = C_TEXT_MAIN

        # ── RIGHT COLUMN: Browser Screenshot Mockup (width 6.9 in) ──
        # Browser mockup window background
        mockup_bg = s.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(5.8), Inches(1.45), Inches(6.85), Inches(5.45))
        mockup_bg.fill.solid()
        mockup_bg.fill.fore_color.rgb = C_CARD_BG
        mockup_bg.line.color.rgb = C_BORDER
        mockup_bg.line.width = Pt(1)

        # Browser toolbar bar
        toolbar = s.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(5.8), Inches(1.45), Inches(6.85), Inches(0.42))
        toolbar.fill.solid()
        toolbar.fill.fore_color.rgb = RGBColor(241, 245, 249) # #F1F5F9
        toolbar.line.color.rgb = C_BORDER
        toolbar.line.width = Pt(0.75)

        # Window dots (mac/browser style)
        dot_colors = [RGBColor(239, 68, 68), RGBColor(245, 158, 11), RGBColor(16, 185, 129)]
        for i, dc in enumerate(dot_colors):
            dot = s.shapes.add_shape(MSO_SHAPE.OVAL, Inches(5.95 + i*0.18), Inches(1.58), Inches(0.12), Inches(0.12))
            dot.fill.solid()
            dot.fill.fore_color.rgb = dc
            dot.line.fill.background()

        # Browser address pill
        url_pill = s.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(6.6), Inches(1.52), Inches(4.2), Inches(0.26))
        url_pill.fill.solid()
        url_pill.fill.fore_color.rgb = C_WHITE
        url_pill.line.color.rgb = C_BORDER
        url_pill.line.width = Pt(0.5)

        tx_url = s.shapes.add_textbox(Inches(6.7), Inches(1.54), Inches(4.0), Inches(0.24))
        tf_u = tx_url.text_frame
        tf_u.margin_left = tf_u.margin_top = tf_u.margin_right = tf_u.margin_bottom = 0
        p_u = tf_u.paragraphs[0]
        p_u.text = f"https://gondolaperu.com/{img_filename.replace('.png', '').split('_', 1)[-1]}"
        p_u.font.name = "Arial"
        p_u.font.size = Pt(8.5)
        p_u.font.color.rgb = C_TEXT_MUTED

        # Insert Screenshot Image
        img_full_path = os.path.join(screenshots_dir, img_filename)
        if os.path.exists(img_full_path):
            s.shapes.add_picture(
                img_full_path,
                Inches(5.82),
                Inches(1.88),
                width=Inches(6.81),
                height=Inches(4.98)
            )

    # =========================================================================
    # LÁMINA 1: PORTADA CORPORATIVA
    # =========================================================================
    s1 = prs.slides.add_slide(blank_layout)
    bg1 = s1.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(0), Inches(0), Inches(13.333), Inches(7.5))
    bg1.fill.solid()
    bg1.fill.fore_color.rgb = C_NAVY_DARK
    bg1.line.color.rgb = C_NAVY_DARK

    # Decorative geometric accents
    dec1 = s1.shapes.add_shape(MSO_SHAPE.RIGHT_TRIANGLE, Inches(9.8), Inches(0), Inches(3.533), Inches(7.5))
    dec1.fill.solid()
    dec1.fill.fore_color.rgb = C_NAVY
    dec1.line.color.rgb = C_NAVY
    dec1.rotation = 180

    dec_line = s1.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(0), Inches(7.35), Inches(13.333), Inches(0.15))
    dec_line.fill.solid()
    dec_line.fill.fore_color.rgb = C_YELLOW
    dec_line.line.color.rgb = C_YELLOW

    # Logo Box
    logo_card = s1.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(1.2), Inches(1.3), Inches(2.2), Inches(2.2))
    logo_card.fill.solid()
    logo_card.fill.fore_color.rgb = C_WHITE
    logo_card.line.color.rgb = C_YELLOW
    logo_card.line.width = Pt(3)

    if os.path.exists(logo_path):
        s1.shapes.add_picture(logo_path, Inches(1.35), Inches(1.45), width=Inches(1.9))

    # Title box
    tx_box1 = s1.shapes.add_textbox(Inches(3.8), Inches(1.3), Inches(8.5), Inches(4.5))
    tf1 = tx_box1.text_frame
    tf1.word_wrap = True

    p0 = tf1.paragraphs[0]
    p0.text = "GÓNDOLA VARIEDAD Y EXPERIENCIA S.A.C."
    p0.font.name = "Arial"
    p0.font.size = Pt(13)
    p0.font.bold = True
    p0.font.color.rgb = C_YELLOW
    p0.space_after = Pt(10)

    p1 = tf1.add_paragraph()
    p1.text = "GUÍA Y RECORRIDO DE LA PLATAFORMA WEB"
    p1.font.name = "Arial"
    p1.font.size = Pt(28)
    p1.font.bold = True
    p1.font.color.rgb = C_WHITE
    p1.space_after = Pt(8)

    p2 = tf1.add_paragraph()
    p2.text = "Funcionamiento Paso a Paso con Capturas Reales de la Línea Automotriz y Servicios de Taller"
    p2.font.name = "Arial"
    p2.font.size = Pt(15)
    p2.font.color.rgb = RGBColor(186, 215, 240)
    p2.space_after = Pt(24)

    p3 = tf1.add_paragraph()
    p3.text = "RUC: 20610998399  |  Sede Central: Piura, Perú  |  Línea Detailing, Repuestos y Taller Mecánico"
    p3.font.name = "Arial"
    p3.font.size = Pt(11)
    p3.font.color.rgb = C_TEXT_MUTED

    # Bottom 3 summary cards
    card_data = [
        ("Experiencia de Compra", "Navegación ágil por categorías especializadas, búsqueda en tiempo real y fichas técnicas completas."),
        ("Acceso de Clientes", "Portal exclusivo para talleres y flotas con registro de empresa y cotizaciones personalizadas."),
        ("Atención Omnicanal", "Generación de cotizaciones formalizadas y canal directo vía WhatsApp institucional en Piura.")
    ]
    for i, (ctit, cdesc) in enumerate(card_data):
        cx = Inches(1.2 + i * 3.7)
        cbox = s1.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, cx, Inches(5.1), Inches(3.4), Inches(1.7))
        cbox.fill.solid()
        cbox.fill.fore_color.rgb = RGBColor(0, 40, 75)
        cbox.line.color.rgb = C_BLUE
        cbox.line.width = Pt(1)

        ctx = s1.shapes.add_textbox(cx + Inches(0.2), Inches(5.2), Inches(3.0), Inches(1.5))
        ctf = ctx.text_frame
        ctf.word_wrap = True
        ctf.margin_left = ctf.margin_top = ctf.margin_right = ctf.margin_bottom = 0

        cp0 = ctf.paragraphs[0]
        cp0.text = ctit
        cp0.font.name = "Arial"
        cp0.font.size = Pt(11.5)
        cp0.font.bold = True
        cp0.font.color.rgb = C_YELLOW
        cp0.space_after = Pt(4)

        cp1 = ctf.add_paragraph()
        cp1.text = cdesc
        cp1.font.name = "Arial"
        cp1.font.size = Pt(9.5)
        cp1.font.color.rgb = RGBColor(220, 230, 242)

    # =========================================================================
    # LÁMINA 2: PASO 1 — PORTADA DE INICIO
    # =========================================================================
    draw_step_slide(
        slide_num=2,
        title="Paso 1: Página de Inicio y Presentación Comercial",
        step_tag="Paso 1 de 8 — Ingreso a la Web",
        subtitle="Punto de acceso principal y propuesta de valor",
        points=[
            ("Hero Banner Dinámico", "Presenta la propuesta central de valor: productos premium de detailing, repuestos certificados y servicios de taller en Piura."),
            ("Barra de Búsqueda Rápida", "Permite al cliente localizar productos al instante por nombre, código OEM o aplicación vehicular."),
            ("Acceso a Línea Automotriz", "Menú superior categorizado para saltar directamente a productos de cuidado exterior, interior y mecánica."),
            ("Contacto y Cotización Inmediata", "Acceso directo visible al botón flotante de WhatsApp y números de atención al cliente.")
        ],
        benefit_title="Impacto para el Cliente",
        benefit_desc="Carga ultra rápida con diseño moderno que genera confianza inmediata e invita a explorar el catálogo sin barreras.",
        img_filename="01_inicio.png"
    )

    # =========================================================================
    # LÁMINA 3: PASO 2 — LOGIN Y IDENTIFICACIÓN
    # =========================================================================
    draw_step_slide(
        slide_num=3,
        title="Paso 2: Acceso Exclusivo de Clientes y Talleres",
        step_tag="Paso 2 de 8 — Identificación",
        subtitle="Portal dedicado para clientes corporativos y talleres",
        points=[
            ("Identificación Personalizada", "Campo 'Nombre o Empresa' para identificar automáticamente si se trata de un taller mecánico o cliente particular."),
            ("Credenciales Comerciales", "Acceso seguro con correo y contraseña corporativa con validación inmediata en el frontend."),
            ("Persistencia de Sesión", "Guarda el perfil activo para que las cotizaciones y carritos mantengan los datos de la empresa sin reingresarlos."),
            ("Navegación Continua", "Al iniciar sesión, el sistema redirige automáticamente a la página que el cliente estaba revisando.")
        ],
        benefit_title="Agilidad Operativa",
        benefit_desc="Permite a talleres mecánicos y empresas de transporte cotizar en segundos con sus datos fiscales listos.",
        img_filename="02_login.png"
    )

    # =========================================================================
    # LÁMINA 4: PASO 3 — CATÁLOGO GENERAL Y FILTROS
    # =========================================================================
    draw_step_slide(
        slide_num=4,
        title="Paso 3: Catálogo General con Filtros Avanzados",
        step_tag="Paso 3 de 8 — Búsqueda en Catálogo",
        subtitle="Exploración organizada de productos y repuestos",
        points=[
            ("Cuadrícula Responsiva", "Tarjetas de producto con fotos en alta definición, descripción concisa, especificaciones y precios actualizados."),
            ("Filtros por Categoría", "Permite filtrar al instante entre las 6 categorías automotrices (Aros, Interiores, Shampoos, Ceras, etc.)."),
            ("Indicador de Stock Local", "Muestra claramente si el producto cuenta con disponibilidad inmediata en el almacén de Piura o bajo pedido."),
            ("Buscador Reactivo", "Filtra en milisegundos conforme el cliente escribe, sin recargas de página lentas.")
        ],
        benefit_title="Eficiencia de Compra",
        benefit_desc="Reduce el tiempo de búsqueda a menos de 3 clics, ayudando al cliente a encontrar exactamente la pieza que requiere.",
        img_filename="03_catalogo.png"
    )

    # =========================================================================
    # LÁMINA 5: PASO 4 — CATEGORÍAS ESPECIALIZADAS
    # =========================================================================
    draw_step_slide(
        slide_num=5,
        title="Paso 4: Navegación por Categorías Automotrices",
        step_tag="Paso 4 de 8 — Categorización Técnica",
        subtitle="Segmentación por tipo de uso y subsistema automotriz",
        points=[
            ("Cabecera Temática", "Identifica visualmente la categoría activa (ej. Aros y Neumáticos) con imagen contextual y resumen técnico."),
            ("Migajas de Pan (Breadcrumbs)", "Guía de navegación clara para retroceder a la línea principal o al catálogo general en un clic."),
            ("Especificaciones Clave", "Cada tarjeta expone datos esenciales como rendimiento por auto, pH de dilución o tipo de uso."),
            ("Acción Directa de Cotización", "Botones rápidos para ver ficha completa o cotizar de inmediato vía WhatsApp.")
        ],
        benefit_title="Segmentación Precisa",
        benefit_desc="Organiza el inventario como un mostrador profesional de repuestos, facilitando compras mayoristas y al por menor.",
        img_filename="04_categoria.png"
    )

    # =========================================================================
    # LÁMINA 6: PASO 5 — FICHA TÉCNICA DE PRODUCTO
    # =========================================================================
    draw_step_slide(
        slide_num=6,
        title="Paso 5: Ficha Técnica Detallada de Producto",
        step_tag="Paso 5 de 8 — Evaluación Técnica",
        subtitle="Información completa para decisión de compra informada",
        points=[
            ("Galería de Imágenes HD", "Múltiples vistas del producto y sus presentaciones comerciales en alta calidad visual."),
            ("Tabla de Presentaciones y Precios", "Desglose claro de volúmenes comerciales (ej: 1/2 Litro, 4 Litros, 20 Litros) con precios transparentes en Soles."),
            ("Especificaciones Técnicas", "Detalle de rendimiento (vehículos por litro), dilución requerida y nivel de pH químico."),
            ("Garantía y Asesoría", "Insignias de garantía oficial, soporte técnico calificado y entrega rápida en Piura.")
        ],
        benefit_title="Seguridad en la Elección",
        benefit_desc="Elimina dudas técnicas antes de la compra y previene devoluciones por incompatibilidad de producto.",
        img_filename="05_producto_detalle.png"
    )

    # =========================================================================
    # LÁMINA 7: PASO 6 — CENTRO DE COTIZACIÓN
    # =========================================================================
    draw_step_slide(
        slide_num=7,
        title="Paso 6: Gestión de Cotizaciones y Solicitud de Pedidos",
        step_tag="Paso 6 de 8 — Cotización Formal",
        subtitle="Módulo centralizado para cotizar requerimientos de taller",
        points=[
            ("Consolidado de Requerimientos", "El cliente puede listar los repuestos y suministros necesarios para su vehículo o flota."),
            ("Formulario de Datos Comerciales", "Campos claros para Nombre Completo, Teléfono Celular, Nombre de Empresa y Notas Técnicas."),
            ("Mensaje Estructurado", "El sistema compila automáticamente un mensaje formal con el detalle de los productos y cantidades."),
            ("Canal Rápido de Validación", "Conexión directa con los asesores comerciales de Góndola Perú para confirmación inmediata de despacho.")
        ],
        benefit_title="Cierre Comercial Rápido",
        benefit_desc="Facilita órdenes de compra corporativas sin trámites burocráticos y con atención prioritaria.",
        img_filename="06_cotizacion.png"
    )

    # =========================================================================
    # LÁMINA 8: PASO 7 — SERVICIOS DE TALLER Y VALORES
    # =========================================================================
    draw_step_slide(
        slide_num=8,
        title="Paso 7: Servicios de Taller Especializado y Respaldo",
        step_tag="Paso 7 de 8 — Servicios de Taller",
        subtitle="Infraestructura técnica y trayectoria en la región Piura",
        points=[
            ("Mantenimiento Integral", "Servicios de mecánica preventiva, afinamiento de motores, cambio de fluidos y limpieza especializada."),
            ("Diagnóstico Computarizado", "Escaneo electrónico de fallas de inyección, sensores y sistemas ABS para todas las marcas."),
            ("Rectificación y Mecanizado", "Taller propio de precisión para rectificación de discos, tambores y componentes mecánicos."),
            ("Respaldo Empresarial", "Más de una década de experiencia formal bajo la razón social GÓNDOLA VARIEDAD Y EXPERIENCIA S.A.C.")
        ],
        benefit_title="Solución 360 Grados",
        benefit_desc="El cliente no solo compra el repuesto, sino que cuenta con el taller calificado para su instalación y calibración.",
        img_filename="07_servicios_taller.png"
    )

    # =========================================================================
    # LÁMINA 9: PASO 8 — CANALES DE CONTACTO Y DATOS LEGALES
    # =========================================================================
    draw_step_slide(
        slide_num=9,
        title="Paso 8: Canales de Atención, Ubicación y Transparencia",
        step_tag="Paso 8 de 8 — Soporte y Contacto",
        subtitle="Atención omnicanal y cumplimiento normativo completo",
        points=[
            ("Datos Fiscales Transparentes", "Exhibición clara del RUC (20610998399), razón social oficial y dirección en Piura."),
            ("Botón de WhatsApp Permanente", "Canal de soporte conversacional accesible desde cualquier pantalla del sitio web."),
            ("Cumplimiento Regulatorio", "Acceso directo a Libro de Reclamaciones conforme a la normativa de INDECOPI, políticas de privacidad y términos."),
            ("Ubicación Física en Piura", "Sede estratégica en el Distrito Veintiséis de Octubre para recojo en almacén o envíos locales.")
        ],
        benefit_title="Máxima Confianza",
        benefit_desc="Garantiza a los clientes y empresas auditoras que interactúan con una empresa 100% formal y localizable.",
        img_filename="08_contacto_footer.png"
    )

    # =========================================================================
    # LÁMINA 10: RESUMEN DEL FLUJO OPERATIVO Y BENEFICIOS
    # =========================================================================
    s10 = prs.slides.add_slide(blank_layout)
    bg10 = s10.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(0), Inches(0), Inches(13.333), Inches(7.5))
    bg10.fill.solid()
    bg10.fill.fore_color.rgb = C_BG_PAGE
    bg10.line.color.rgb = C_BG_PAGE

    draw_header(s10, "Resumen del Flujo Operativo y Beneficios Comerciales", "SÍNTESIS ESTRATÉGICA")
    draw_footer(s10, 10)

    # 5 Process Flow Step Cards horizontally
    flow_steps = [
        ("1. Descubrimiento", "El cliente ingresa a la plataforma web y busca por marca, categoría o código OEM."),
        ("2. Identificación", "Inicia sesión con su nombre o razón social para tarifas y presupuestos personalizados."),
        ("3. Validación Técnica", "Revisa la ficha técnica con imágenes HD, especificaciones, dilución y presentaciones."),
        ("4. Cotización Digital", "Genera su pedido formal o consulta directamente por WhatsApp con el equipo comercial."),
        ("5. Despacho y Taller", "Confirmación de stock, entrega en Piura o agendamiento de servicio en taller especializado.")
    ]

    for i, (f_title, f_desc) in enumerate(flow_steps):
        fx = Inches(0.7 + i * 2.4)
        f_box = s10.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, fx, Inches(1.5), Inches(2.25), Inches(2.4))
        f_box.fill.solid()
        f_box.fill.fore_color.rgb = C_CARD_BG
        f_box.line.color.rgb = C_NAVY
        f_box.line.width = Pt(1.5)

        # Header of step card
        f_hdr = s10.shapes.add_shape(MSO_SHAPE.RECTANGLE, fx, Inches(1.5), Inches(2.25), Inches(0.48))
        f_hdr.fill.solid()
        f_hdr.fill.fore_color.rgb = C_NAVY
        f_hdr.line.color.rgb = C_NAVY

        tx_fh = s10.shapes.add_textbox(fx, Inches(1.56), Inches(2.25), Inches(0.35))
        tfh = tx_fh.text_frame
        tfh.margin_left = tfh.margin_top = tfh.margin_right = tfh.margin_bottom = 0
        pfh = tfh.paragraphs[0]
        pfh.text = f_title
        pfh.alignment = PP_ALIGN.CENTER
        pfh.font.name = "Arial"
        pfh.font.size = Pt(10.5)
        pfh.font.bold = True
        pfh.font.color.rgb = C_YELLOW

        tx_fb = s10.shapes.add_textbox(fx + Inches(0.12), Inches(2.1), Inches(2.0), Inches(1.65))
        tfb = tx_fb.text_frame
        tfb.word_wrap = True
        tfb.margin_left = tfb.margin_top = tfb.margin_right = tfb.margin_bottom = 0
        pfb = tfb.paragraphs[0]
        pfb.text = f_desc
        pfb.font.name = "Arial"
        pfb.font.size = Pt(9.2)
        pfb.font.color.rgb = C_TEXT_MAIN

    # Bottom 3 Pillars of Value
    pillars = [
        ("Rapidez y Cero Fricción", "La arquitectura React + Vite garantiza transiciones instantáneas, reduciendo el tiempo de cotización de minutos a segundos."),
        ("Especialización Automotriz", "Estructura pensada 100% para las necesidades mecánicas de talleres, transportistas y propietarios en el norte peruano."),
        ("Certeza y Respaldo Local", "Disponibilidad real de inventario en Piura con el respaldo fiscal y técnico de GÓNDOLA VARIEDAD Y EXPERIENCIA S.A.C.")
    ]

    for i, (ptit, pdesc) in enumerate(pillars):
        px = Inches(0.7 + i * 4.0)
        p_box = s10.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, px, Inches(4.2), Inches(3.8), Inches(2.65))
        p_box.fill.solid()
        p_box.fill.fore_color.rgb = C_BLUE_LIGHT
        p_box.line.color.rgb = C_BLUE
        p_box.line.width = Pt(1.5)

        tx_p = s10.shapes.add_textbox(px + Inches(0.2), Inches(4.35), Inches(3.4), Inches(2.35))
        tfp = tx_p.text_frame
        tfp.word_wrap = True
        tfp.margin_left = tfp.margin_top = tfp.margin_right = tfp.margin_bottom = 0

        pp0 = tfp.paragraphs[0]
        pp0.text = f"✔ {ptit}"
        pp0.font.name = "Arial"
        pp0.font.size = Pt(12)
        pp0.font.bold = True
        pp0.font.color.rgb = C_NAVY
        pp0.space_after = Pt(8)

        pp1 = tfp.add_paragraph()
        pp1.text = pdesc
        pp1.font.name = "Arial"
        pp1.font.size = Pt(10)
        pp1.font.color.rgb = C_TEXT_MAIN
        pp1.line_spacing = 1.25

    # Guardar archivos
    output_filename = "Gondola_Peru_Funcionamiento_Web.pptx"
    prs.save(output_filename)
    print(f"Presentación generada con éxito: {output_filename}")

    # Copia en el directorio de artefactos
    artifact_dir = r"C:\Users\DAVID\.gemini\antigravity\brain\f449a9b6-67b5-4a2d-8083-dc141208d00c"
    if os.path.exists(artifact_dir):
        artifact_path = os.path.join(artifact_dir, output_filename)
        shutil.copy2(output_filename, artifact_path)
        print(f"Copia guardada en artefactos: {artifact_path}")

if __name__ == "__main__":
    build_presentation()
