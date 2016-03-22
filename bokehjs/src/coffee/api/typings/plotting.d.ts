declare namespace Bokeh.Plotting {
    function show(figure: Figure): void;

    type AxisType = "linear" | "log" | "datetime" | Auto;

    export interface FigureAttrs {
        x_range?: Range | [number, number] | Array<string>;
        y_range?: Range | [number, number] | Array<string>;

        x_axis_type?: AxisType;
        y_axis_type?: AxisType;

        x_minor_ticks?: Int | Auto;
        y_minor_ticks?: Int | Auto;

        x_axis_location?: Location;
        y_axis_location?: Location;

        x_axis_label?: string;
        y_axis_label?: string;

        title?: string;

        plot_width?: Int;
        plot_height?: Int;
    }

    function figure(attrs?: FigureAttrs): Figure;

    var Figure: { new(attrs?: FigureAttrs): Figure };
    export interface Figure extends Plot {
        xgrid: Grid;
        ygrid: Grid;

        annular_wedge     (attrs: AnnularWedgeAttrs):     GlyphRenderer;
        annulus           (attrs: AnnulusAttrs):          GlyphRenderer;
        arc               (attrs: ArcAttrs):              GlyphRenderer;
        bezier            (attrs: BezierAttrs):           GlyphRenderer;
        gear              (attrs: GearAttrs):             GlyphRenderer;
        image             (attrs: ImageAttrs):            GlyphRenderer;
        image_rgba        (attrs: ImageRGBAAttrs):        GlyphRenderer;
        image_url         (attrs: ImageURLAttrs):         GlyphRenderer;
        line              (attrs: LineAttrs):             GlyphRenderer;
        multi_line        (attrs: MultiLineAttrs):        GlyphRenderer;
        oval              (attrs: OvalAttrs):             GlyphRenderer;
        patch             (attrs: PatchAttrs):            GlyphRenderer;
        patches           (attrs: PatchesAttrs):          GlyphRenderer;
        quad              (attrs: QuadAttrs):             GlyphRenderer;
        quadratic         (attrs: QuadraticAttrs):        GlyphRenderer;
        ray               (attrs: RayAttrs):              GlyphRenderer;
        rect              (attrs: RectAttrs):             GlyphRenderer;
        segment           (attrs: SegmentAttrs):          GlyphRenderer;
        text              (attrs: TextAttrs):             GlyphRenderer;
        wedge             (attrs: WedgeAttrs):            GlyphRenderer;

        asterisk          (attrs: AsteriskAttrs):         GlyphRenderer;
        circle            (attrs: CircleAttrs):           GlyphRenderer;
        circle_cross      (attrs: CircleCrossAttrs):      GlyphRenderer;
        circle_x          (attrs: CircleXAttrs):          GlyphRenderer;
        cross             (attrs: CrossAttrs):            GlyphRenderer;
        diamond           (attrs: DiamondAttrs):          GlyphRenderer;
        diamond_cross     (attrs: DiamondCrossAttrs):     GlyphRenderer;
        inverted_triangle (attrs: InvertedTriangleAttrs): GlyphRenderer;
        square            (attrs: SquareAttrs):           GlyphRenderer;
        square_cross      (attrs: SquareCrossAttrs):      GlyphRenderer;
        square_x          (attrs: SquareXAttrs):          GlyphRenderer;
        triangle          (attrs: TriangleAttrs):         GlyphRenderer;
        x                 (attrs: XAttrs):                GlyphRenderer;

        annular_wedge(
            x: DataAttr,
            y: DataAttr,
            inner_radius: SpatialAttr,
            outer_radius: SpatialAttr,
            start_angle: AngularAttr,
            end_angle: AngularAttr,
            opts?: AnnularWedgeOpts):     GlyphRenderer;
        annulus(
            x: DataAttr,
            y: DataAttr,
            inner_radius: SpatialAttr,
            outer_radius: SpatialAttr,
            opts?: AnnulusOpts):          GlyphRenderer;
        arc(
            x: DataAttr,
            y: DataAttr,
            radius: SpatialAttr,
            start_angle: AngularAttr,
            end_angle: AngularAttr,
            opts?: ArcOpts):              GlyphRenderer;
        bezier(
            x0: DataAttr,
            y0: DataAttr,
            x1: DataAttr,
            y1: DataAttr,
            cx0: DataAttr,
            cy0: DataAttr,
            cx1: DataAttr,
            cy1: DataAttr,
            opts?: BezierOpts):           GlyphRenderer;
        gear(
            x: DataAttr,
            y: DataAttr,
            module: ValueAttr<number>,
            teeth: ValueAttr<Int>,
            opts?: GearOpts):             GlyphRenderer;
        image(
            color_mapper: ColorMapper,
            image: ValueAttr<Array<number>>,
            rows: ValueAttr<Int>,
            cols: ValueAttr<Int>,
            x: DataAttr,
            y: DataAttr,
            dw: SpatialAttr,
            dh: SpatialAttr,
            opts?: ImageOpts):            GlyphRenderer;
        image_rgba(
            image: ValueAttr<Array<number>>,
            rows: ValueAttr<Int>,
            cols: ValueAttr<Int>,
            x: DataAttr,
            y: DataAttr,
            dw: SpatialAttr,
            dh: SpatialAttr,
            opts?: ImageRGBAOpts):        GlyphRenderer;
        image_url(
            url: ValueAttr<string>,
            x: DataAttr,
            y: DataAttr,
            w: SpatialAttr,
            h: SpatialAttr,
            opts?: ImageURLOpts):         GlyphRenderer;
        line(
            x: DataAttr,
            y: DataAttr,
            opts?: LineOpts):             GlyphRenderer;
        multi_line(
            xs: MultiDataAttr,
            ys: MultiDataAttr,
            opts?: MultiLineOpts):        GlyphRenderer;
        oval(
            x: DataAttr,
            y: DataAttr,
            width: SpatialAttr,
            height: SpatialAttr,
            opts?: OvalOpts):             GlyphRenderer;
        patch(
            x: DataAttr,
            y: DataAttr,
            opts?: PatchOpts):            GlyphRenderer;
        patches(
            xs: MultiDataAttr,
            ys: MultiDataAttr,
            opts?: PatchesOpts):          GlyphRenderer;
        quad(
            left: DataAttr,
            right: DataAttr,
            bottom: DataAttr,
            top: DataAttr,
            opts?: QuadOpts):             GlyphRenderer;
        quadratic(
            x0: DataAttr,
            y0: DataAttr,
            x1: DataAttr,
            y1: DataAttr,
            cx: DataAttr,
            cy: DataAttr,
            opts?: QuadraticOpts):        GlyphRenderer;
        ray(
            x: DataAttr,
            y: DataAttr,
            length: SpatialAttr,
            opts?: RayOpts):              GlyphRenderer;
        rect(
            x: DataAttr,
            y: DataAttr,
            width: SpatialAttr,
            height: SpatialAttr,
            opts?: RectOpts):             GlyphRenderer;
        segment(
            x0: DataAttr,
            y0: DataAttr,
            x1: DataAttr,
            y1: DataAttr,
            opts?: SegmentOpts):          GlyphRenderer;
        text(
            x: DataAttr,
            y: DataAttr,
            text: ValueAttr<string>,
            opts?: TextOpts):             GlyphRenderer;
        wedge(
            x: DataAttr,
            y: DataAttr,
            radius: SpatialAttr,
            start_angle: AngularAttr,
            end_angle: AngularAttr,
            opts?: WedgeOpts):            GlyphRenderer;

        asterisk          (x: DataAttr, y: DataAttr, opts?: AsteriskOpts):         GlyphRenderer;
        circle            (x: DataAttr, y: DataAttr, opts?: CircleOpts):           GlyphRenderer;
        circle_cross      (x: DataAttr, y: DataAttr, opts?: CircleCrossOpts):      GlyphRenderer;
        circle_x          (x: DataAttr, y: DataAttr, opts?: CircleXOpts):          GlyphRenderer;
        cross             (x: DataAttr, y: DataAttr, opts?: CrossOpts):            GlyphRenderer;
        diamond           (x: DataAttr, y: DataAttr, opts?: DiamondOpts):          GlyphRenderer;
        diamond_cross     (x: DataAttr, y: DataAttr, opts?: DiamondCrossOpts):     GlyphRenderer;
        inverted_triangle (x: DataAttr, y: DataAttr, opts?: InvertedTriangleOpts): GlyphRenderer;
        square            (x: DataAttr, y: DataAttr, opts?: SquareOpts):           GlyphRenderer;
        square_cross      (x: DataAttr, y: DataAttr, opts?: SquareCrossOpts):      GlyphRenderer;
        square_x          (x: DataAttr, y: DataAttr, opts?: SquareXOpts):          GlyphRenderer;
        triangle          (x: DataAttr, y: DataAttr, opts?: TriangleOpts):         GlyphRenderer;
        x                 (x: DataAttr, y: DataAttr, opts?: XOpts):                GlyphRenderer;

        scatter(x: DataAttr, y: DataAttr, opts?: MarkerOpts & { marker?: MarkerType }): GlyphRenderer;
    }

    //                     scalar   vector                 spec
    type DataAttr        = number | Array<number>        | Numerical
                                  | Array<string>        | Categorical;
    type SpatialAttr     = number | Array<number>        | Spatial;
    type AngularAttr     = number | Array<number>        | Angular;
    type ValueAttr<T>    = T      | Array<T>             | Vectorized<T>;

    type MultiDataAttr   =          Array<Array<number>> | MultiNumerical
                                  | Array<Array<string>> | MultiCategorical;

    type ColorAttr = ValueAttr<Color>;
    type AlphaAttr = ValueAttr<Percent>;

    export interface ColorAlphaOpts {
        color?: ColorAttr;
        selection_color?: ColorAttr;
        nonselection_color?: ColorAttr;
        hover_color?: ColorAttr;

        alpha?: AlphaAttr;
        selection_alpha?: AlphaAttr;
        nonselection_alpha?: AlphaAttr;
        hover_alpha?: AlphaAttr;
    }

    export interface AuxFillPropsOpts extends ColorAlphaOpts {
        selection_fill_color?: ColorAttr;
        selection_fill_alpha?: AlphaAttr;
        nonselection_fill_color?: ColorAttr;
        nonselection_fill_alpha?: AlphaAttr;
        hover_fill_color?: ColorAttr;
        hover_fill_alpha?: AlphaAttr;
    }

    export interface FillPropsOpts extends AuxFillPropsOpts {
        fill_color?: ColorAttr;
        fill_alpha?: AlphaAttr;
    }

    export interface AuxLinePropsOpts extends ColorAlphaOpts {
        selection_line_color?: ColorAttr;
        selection_line_alpha?: AlphaAttr;
        nonselection_line_color?: ColorAttr;
        nonselection_line_alpha?: AlphaAttr;
        hover_line_color?: ColorAttr;
        hover_line_alpha?: AlphaAttr;
    }

    export interface LinePropsOpts extends AuxLinePropsOpts {
        line_color?: ColorAttr;
        line_width?: ValueAttr<number>;
        line_alpha?: AlphaAttr;
        line_join?: LineJoin;
        line_cap?: LineCap;
        line_dash?: DashPattern;
        line_dash_offset?: Int;
    }

    export interface AuxTextPropsOpts extends ColorAlphaOpts {
        selection_text_color?: ColorAttr;
        selection_text_alpha?: AlphaAttr;
        nonselection_text_color?: ColorAttr;
        nonselection_text_alpha?: AlphaAttr;
        hover_text_color?: ColorAttr;
        hover_text_alpha?: AlphaAttr;
    }

    export interface TextPropsOpts extends AuxTextPropsOpts {
        text_font?: string;
        text_font_size?: ValueAttr<FontSize>;
        text_font_style?: FontStyle;
        text_color?: ColorAttr;
        text_alpha?: AlphaAttr;
        text_align?: TextAlign;
        text_baseline?: TextBaseline;
    }

    export interface GlyphOpts {
        visible?: boolean;
        source?: DataSource;
    }

    export interface AnnularWedgeOpts extends GlyphOpts, FillPropsOpts, LinePropsOpts {
        direction?: Direction;
    }
    export interface AnnularWedgeAttrs extends AnnularWedgeOpts {
        x: DataAttr;
        y: DataAttr;
        inner_radius: SpatialAttr;
        outer_radius: SpatialAttr;
        start_angle: AngularAttr;
        end_angle: AngularAttr;
    }

    export interface AnnulusOpts extends GlyphOpts, FillPropsOpts, LinePropsOpts {}
    export interface AnnulusAttrs extends AnnulusOpts {
        x: DataAttr;
        y: DataAttr;
        inner_radius: SpatialAttr;
        outer_radius: SpatialAttr;
    }

    export interface ArcOpts extends GlyphOpts, LinePropsOpts {
        direction?: Direction;
    }
    export interface ArcAttrs extends ArcOpts {
        x: DataAttr;
        y: DataAttr;
        radius: SpatialAttr;
        start_angle: AngularAttr;
        end_angle: AngularAttr;
    }

    export interface BezierOpts extends GlyphOpts, LinePropsOpts {}
    export interface BezierAttrs extends BezierOpts {
        x0: DataAttr;
        y0: DataAttr;
        x1: DataAttr;
        y1: DataAttr;
        cx0: DataAttr;
        cy0: DataAttr;
        cx1: DataAttr;
        cy1: DataAttr;
    }

    export interface GearOpts extends GlyphOpts, LinePropsOpts, FillPropsOpts {
        angle?: AngularAttr;
        pressure_angle?: AngularAttr;
        shaft_size?: ValueAttr<number>;
        internal?: ValueAttr<boolean>;
    }
    export interface GearAttrs extends GearOpts {
        x: DataAttr;
        y: DataAttr;
        module: ValueAttr<number>;
        teeth: ValueAttr<Int>;
    }

    export interface ImageRGBAOpts extends GlyphOpts {
        dilate?: boolean;
    }
    export interface ImageRGBAAttrs extends ImageRGBAOpts {
        image: ValueAttr<Array<number>>;
        rows: ValueAttr<Int>;
        cols: ValueAttr<Int>;
        x: DataAttr;
        y: DataAttr;
        dw: SpatialAttr;
        dh: SpatialAttr;
    }

    export interface ImageOpts extends ImageRGBAOpts {}
    export interface ImageAttrs extends ImageOpts {
        color_mapper: ColorMapper;
    }

    export interface ImageURLOpts extends GlyphOpts {
        angle?: AngularAttr;
        global_alpha?: Percent;
        dilate?: boolean;
        anchor?: Anchor;
        retry_attempts?: Int;
        retry_timeout?: Int;
    }
    export interface ImageURLAttrs extends ImageURLOpts {
        url: ValueAttr<string>;
        x: DataAttr;
        y: DataAttr;
        w: SpatialAttr;
        h: SpatialAttr;
    }

    export interface LineOpts extends GlyphOpts, LinePropsOpts {}
    export interface LineAttrs extends LineOpts {
        x: DataAttr;
        y: DataAttr;
    }

    export interface MultiLineOpts extends GlyphOpts, LinePropsOpts {}
    export interface MultiLineAttrs extends MultiLineOpts {
        xs: MultiDataAttr;
        ys: MultiDataAttr;
    }

    export interface OvalOpts extends GlyphOpts, FillPropsOpts, LinePropsOpts {
        angle?: AngularAttr;
    }
    export interface OvalAttrs extends OvalOpts {
        x: DataAttr;
        y: DataAttr;
        width: SpatialAttr;
        height: SpatialAttr;
    }

    export interface PatchOpts extends GlyphOpts, FillPropsOpts, LinePropsOpts {}
    export interface PatchAttrs extends PatchOpts {
        x: DataAttr;
        y: DataAttr;
    }

    export interface PatchesOpts extends GlyphOpts, LinePropsOpts, FillPropsOpts {}
    export interface PatchesAttrs extends PatchesOpts {
        xs: MultiDataAttr;
        ys: MultiDataAttr;
    }

    export interface QuadOpts extends GlyphOpts, FillPropsOpts, LinePropsOpts {}
    export interface QuadAttrs extends QuadOpts {
        left: DataAttr;
        right: DataAttr;
        bottom: DataAttr;
        top: DataAttr;
    }

    export interface QuadraticOpts extends GlyphOpts, LinePropsOpts {}
    export interface QuadraticAttrs extends QuadraticOpts {
        x0: DataAttr;
        y0: DataAttr;
        x1: DataAttr;
        y1: DataAttr;
        cx: DataAttr;
        cy: DataAttr;
    }

    export interface RayOpts extends GlyphOpts, LinePropsOpts {
        angle?: AngularAttr;
    }
    export interface RayAttrs extends RayOpts {
        x: DataAttr;
        y: DataAttr;
        length: SpatialAttr;
    }

    export interface RectOpts extends GlyphOpts, FillPropsOpts, LinePropsOpts {
        angle?: AngularAttr;
        dilate?: boolean;
    }
    export interface RectAttrs extends RectOpts {
        x: DataAttr;
        y: DataAttr;
        width: SpatialAttr;
        height: SpatialAttr;
    }

    export interface SegmentOpts extends GlyphOpts, LinePropsOpts {}
    export interface SegmentAttrs extends SegmentOpts {
        x0: DataAttr;
        y0: DataAttr;
        x1: DataAttr;
        y1: DataAttr;
    }

    export interface TextOpts extends GlyphOpts, TextPropsOpts {
        angle?: AngularAttr;
        x_offset?: SpatialAttr;
        y_offset?: SpatialAttr;
    }
    export interface TextAttrs extends TextOpts {
        x: DataAttr;
        y: DataAttr;
        text: ValueAttr<string>;
    }

    export interface WedgeOpts extends GlyphOpts, FillPropsOpts, LinePropsOpts {
        direction?: Direction;
    }
    export interface WedgeAttrs extends WedgeOpts {
        x: DataAttr;
        y: DataAttr;
        radius: SpatialAttr;
        start_angle: AngularAttr;
        end_angle: AngularAttr;
    }

    export interface MarkerOpts extends GlyphOpts, FillPropsOpts, LinePropsOpts {
        size?: SpatialAttr;
        angle?: AngularAttr;
    }
    export interface MarkerAttrs extends MarkerOpts {
        x: DataAttr;
        y: DataAttr;
    }

    export interface AsteriskOpts extends MarkerOpts {}
    export interface AsteriskAttrs extends MarkerAttrs {}

    export interface CircleOpts extends MarkerOpts {
        radius?: SpatialAttr;
        radius_dimension?: Dimension;
    }
    export interface CircleAttrs extends MarkerAttrs, CircleOpts {}

    export interface CircleCrossOpts extends MarkerOpts {}
    export interface CircleCrossAttrs extends MarkerAttrs, CircleCrossOpts {}

    export interface CircleXOpts extends MarkerOpts {}
    export interface CircleXAttrs extends MarkerAttrs, CircleXOpts {}

    export interface CrossOpts extends MarkerOpts {}
    export interface CrossAttrs extends MarkerAttrs, CrossOpts {}

    export interface DiamondOpts extends MarkerOpts {}
    export interface DiamondAttrs extends MarkerAttrs, DiamondOpts {}

    export interface DiamondCrossOpts extends MarkerOpts {}
    export interface DiamondCrossAttrs extends MarkerAttrs, DiamondCrossOpts {}

    export interface InvertedTriangleOpts extends MarkerOpts {}
    export interface InvertedTriangleAttrs extends MarkerAttrs, InvertedTriangleOpts {}

    export interface SquareOpts extends MarkerOpts {}
    export interface SquareAttrs extends MarkerAttrs, SquareOpts {}

    export interface SquareCrossOpts extends MarkerOpts {}
    export interface SquareCrossAttrs extends MarkerAttrs, SquareCrossOpts {}

    export interface SquareXOpts extends MarkerOpts {}
    export interface SquareXAttrs extends MarkerAttrs, SquareXOpts {}

    export interface TriangleOpts extends MarkerOpts {}
    export interface TriangleAttrs extends MarkerAttrs, TriangleOpts {}

    export interface XOpts extends MarkerOpts {}
    export interface XAttrs extends MarkerAttrs, XOpts {}

    type MarkerType =
        "asterisk"          |
        "circle"            |
        "circle_cross"      |
        "circle_x"          |
        "cross"             |
        "diamond"           |
        "diamond_cross"     |
        "inverted_triangle" |
        "square"            |
        "square_x"          |
        "square_cross"      |
        "triangle"          |
        "x"                 |
        "*"                 |
        "+"                 |
        "o"                 |
        "ox"                |
        "o+"                ;
}
